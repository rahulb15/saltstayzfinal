// "use client";
// import React, { useState } from "react";
// import SelectPaymentType from "./SelectPaymentType";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { useRouter } from "next/navigation";
// const OrderDetails = () => {
//   const router = useRouter();
//   const [total, setTotal] = useState(0);
//   const [shipingAmount, setShipingAmount] = useState(0);
//   const [shipingTitle, setShipingTitle] = useState("");
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log(bookings);
//   const cartProducts = useSelector(
//     (state: RootState) => state.cart.cartProducts
//   );
//   const totalPrice = cartProducts.reduce(
//     (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
//     0
//   );
//   const handleExtraMoney = (extra: number, text: string) => {
//     setTotal(totalPrice + extra);
//     setShipingTitle(text);
//     setShipingAmount(extra);
//   };
//   const handleSubmit = () => {
//     const shipingInfo = `${shipingTitle} ${shipingAmount}`;
//     localStorage.setItem("Shiping Info", shipingInfo);
//     router.push("/order");
//   };
//   return (
//     <>
//       <div className="col-lg-5">
//         <div className="checkout-place sidebar-sticky">
//           <h3 className="checkout-place-title">Your Order</h3>
//           <div className="order-info-list">
//             <ul>
//               <li className="order-info-list-header">
//                 <h4>Product</h4>
//                 <h4>Total</h4>
//               </li>

//               {cartProducts?.length ? (
//                 <>
//                   {cartProducts?.map((item, index) => {
//                     const totalAmount = item?.price * item?.quantity;
//                     return (
//                       <li key={index} className="order-info-list-desc">
//                         <p>
//                           {item?.title} <span> x {item?.quantity}</span>
//                         </p>
//                         <span>${totalAmount}</span>
//                       </li>
//                     );
//                   })}
//                 </>
//               ) : (
//                 <>
//                   <li className="order-info-list-desc">
//                     <p>
//                       Saltstayz Short sleeve t-shirts <span> x 1</span>
//                     </p>
//                     <span>$499:00</span>
//                   </li>
//                   <li className="order-info-list-desc">
//                     <p>
//                       Saltstayz Backpack - 21L <span> x 1</span>
//                     </p>
//                     <span>$999:00</span>
//                   </li>
//                 </>
//               )}

//               <li className="order-info-list-subtotal">
//                 <span>Subtotal</span>
//                 <span>${totalPrice.toFixed(2)}</span>
//               </li>

//               <li className="order-info-list-shipping">
//                 <span>Shipping</span>
//                 <div className="order-info-list-shipping-item d-flex flex-column align-items-start">
//                   <span>
//                     <input
//                       id="flat_rate"
//                       type="radio"
//                       name="shipping"
//                       onChange={() => handleExtraMoney(20, "Flat Rate")}
//                     />
//                     <label htmlFor="flat_rate">
//                       Flat rate: <span>$20.00</span>
//                     </label>
//                   </span>
//                   <span>
//                     <input
//                       id="local_pickup"
//                       type="radio"
//                       name="shipping"
//                       onChange={() => handleExtraMoney(25, "Local Pickup")}
//                     />
//                     <label htmlFor="local_pickup">
//                       Local pickup: <span>$25.00</span>
//                     </label>
//                   </span>
//                   <span>
//                     <input
//                       id="free_shipping"
//                       type="radio"
//                       name="shipping"
//                       onChange={() => handleExtraMoney(0, "Free Shipping")}
//                     />
//                     <label htmlFor="free_shipping">Free shipping</label>
//                   </span>
//                 </div>
//               </li>

//               <li className="order-info-list-total">
//                 <span>Total</span>
//                 <span>
//                   ${total > 0 ? total.toFixed(2) : totalPrice.toFixed(2)}
//                 </span>
//               </li>
//             </ul>
//           </div>
//           <div className="checkout-payment">
//             <SelectPaymentType />
//           </div>
//           <div className="checkout-agree">
//             <div className="checkout-option mb-15">
//               <input id="read_all" type="checkbox" />
//               <label htmlFor="read_all">
//                 I have read and agree to the website.
//               </label>
//             </div>
//           </div>
//           <div className="checkout-btn-wrapper">
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="bd-primary-btn btn-style is-bg radius-60 w-100"
//             >
//               <span className="bd-primary-btn-text">Place Order</span>
//               <span className="bd-primary-btn-circle"></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderDetails;

"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import SelectPaymentType from "./SelectPaymentType";

interface OrderDetailsProps {
  onSubmit: (shippingTitle: string, shippingAmount: number) => void;
  isFormValid: boolean;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ onSubmit, isFormValid }) => {
  const [total, setTotal] = useState(0);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [shippingTitle, setShippingTitle] = useState("");
  const rooms = useSelector((state: RootState) => state.room.rooms);

  useEffect(() => {
    if (rooms.length > 0) {
      const roomRate = parseFloat(rooms[0].room_rates_info.avg_per_night_after_discount);
      const numNights = calculateNights(rooms[0].check_in_date, rooms[0].check_out_date);
      setTotal(roomRate * numNights);
    }
  }, [rooms]);

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const handleExtraMoney = (extra: number, text: string) => {
    setTotal(prevTotal => prevTotal + extra);
    setShippingTitle(text);
    setShippingAmount(extra);
  };

  // const handleSubmit = async () => {
  //   const shippingInfo = `${shippingTitle} ${shippingAmount}`;
  //   localStorage.setItem("Shipping Info", shippingInfo);

  //   const bookingData = {
  //     Room_Details: {
  //       Room_1: {
  //         Rateplan_Id: rooms[0].roomrateunkid,
  //         Ratetype_Id: rooms[0].ratetypeunkid,
  //         Roomtype_Id: rooms[0].roomtypeunkid,
  //         baserate: rooms[0].room_rates_info.avg_per_night_after_discount,
  //         extradultrate: rooms[0].extra_adult_rates_info.inclusive_tax_adjustment['2024-09-09'],
  //         extrachildrate: rooms[0].extra_child_rates_info.inclusive_tax_adjustment['2024-09-09'],
  //         number_adults: rooms[0].base_adult_occupancy.toString(),
  //         number_children: rooms[0].base_child_occupancy.toString(),
  //         ExtraChild_Age: "2",
  //         Title: "Mr",
  //         First_Name: formData.fName,
  //         Last_Name: formData.lName,
  //         Gender: "Male",
  //         SpecialRequest: formData.note,
  //       },
  //     },
  //     check_in_date: rooms[0].available_rooms['2024-09-09'],
  //     check_out_date: rooms[0].available_rooms['2024-09-09'], // You might need to calculate this based on the number of nights
  //     Booking_Payment_Mode: "",
  //     Email_Address: formData.email,
  //     Source_Id: "",
  //     MobileNo: formData.phone,
  //     Address: formData.streetAddress,
  //     State: formData.state,
  //     Country: formData.country,
  //     City: formData.city,
  //     Zipcode: formData.zip,
  //     Fax: "",
  //     Device: "",
  //     Languagekey: "en",
  //     paymenttypeunkid: "",
  //   };

  //   try {
  //     const queryParams = new URLSearchParams({
  //       request_type: "InsertBooking",
  //       HotelCode: "35554",
  //       APIKey: "1189076249bb54f995-cd1c-11ed-b",
  //     }).toString();

  //     const response = await fetch(`/api/booking?${queryParams}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(bookingData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Booking failed');
  //     }

  //     const result = await response.json();
  //     console.log('Booking successful:', result);
  //     router.push("/order-confirmation");
  //   } catch (error) {
  //     console.error('Booking error:', error);
  //     // Handle error (e.g., show error message to user)
  //   }
  // };


  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(shippingTitle, shippingAmount);
    } else {
      console.log("Form is not valid. Please check all required fields.");
      // Optionally, you can show an error message to the user
    }
  };
  return (
    <div className="col-lg-5">
      <div className="checkout-place sidebar-sticky">
        <h3 className="checkout-place-title">Your Order</h3>
        <div className="order-info-list">
          <ul>
            <li className="order-info-list-header">
              <h4>Product</h4>
              <h4>Total</h4>
            </li>
            {rooms.length > 0 && (
              <li className="order-info-list-desc">
                <p>
                  {rooms[0].Room_Name}{" "}
                  <span> x {calculateNights(rooms[0].available_rooms['2024-09-09'], rooms[0].available_rooms['2024-09-09'])} nights</span>
                </p>
                <span>${total.toFixed(2)}</span>
              </li>
            )}
            <li className="order-info-list-subtotal">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </li>
            <li className="order-info-list-shipping">
              <span>Shipping</span>
              <div className="order-info-list-shipping-item d-flex flex-column align-items-start">
                {/* Shipping options */}
                {/* ... */}
              </div>
            </li>
            <li className="order-info-list-total">
              <span>Total</span>
              <span>${(total + shippingAmount).toFixed(2)}</span>
            </li>
          </ul>
        </div>
        <div className="checkout-payment">
          <SelectPaymentType />
        </div>
        <div className="checkout-agree">
          <div className="checkout-option mb-15">
            <input id="read_all" type="checkbox" />
            <label htmlFor="read_all">
              I have read and agree to the website.
            </label>
          </div>
        </div>
        <div className="checkout-btn-wrapper">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bd-primary-btn btn-style is-bg radius-60 w-100"
          >
            <span className="bd-primary-btn-text">Place Order</span>
            <span className="bd-primary-btn-circle"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
