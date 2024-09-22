// "use client";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { RootState } from "@/redux/store";
// import CheckoutForm from "@/forms/CheckoutForm";
// import OrderDetails from "./OrderDetails";
// import CheckoutLogin from "./CheckoutLogin";
// import AddCuponMain from "./AddCuponMain";

// const CheckoutArea = () => {
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [paymentMode, setPaymentMode] = useState("");
//   const formData = useSelector((state: RootState) => state.formData);
//   // const rooms = useSelector((state: RootState) => state.room.rooms);
//   // console.log(rooms);
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log(bookings);
//   const bookingData:any = useSelector((state: RootState) => state.app.bookings);
//   console.log(bookingData);
//   // [
//   //   {
//   //     city: 'Gurugram',
//   //     checkIn: '2024-09-09',
//   //     checkOut: '2024-09-10',
//   //     room: 1,
//   //     adult: 1,
//   //     children: 0
//   //   }
//   // ]
//   const router = useRouter();

//   const handleFormValidation = (valid: boolean) => {
//     setIsFormValid(valid);
//   };
//   console.log(formData);
//   console.log(isFormValid);

//   const handleSubmit = async (shippingTitle: string, shippingAmount: number) => {
//     console.log("Form submitted with shipping:", shippingTitle, shippingAmount);
//     if (!isFormValid) {
//       console.log("Form is not valid. Please check all required fields.");
//       return;
//     }

//     const shippingInfo = `${shippingTitle} ${shippingAmount}`;
//     localStorage.setItem("Shipping Info", shippingInfo);

//     const body = {
//       Room_Details: {
//         Room_1: {
//           Rateplan_Id: bookings[0].roomrateunkid,
//           Ratetype_Id: bookings[0].ratetypeunkid,
//           Roomtype_Id: bookings[0].roomtypeunkid,
//           baserate: bookings[0].room_rates_info.avg_per_night_after_discount,
//           extradultrate: bookings[0].extra_adult_rates_info.inclusive_tax_adjustment[bookingData[0].checkIn],
//           extrachildrate: bookings[0].extra_child_rates_info.inclusive_tax_adjustment[bookingData[0].checkIn],
//           number_adults: bookingData[0].adult,
//           number_children: bookingData[0].children,
//           // ExtraChild_Age: "2",
//           // Title: formData.title,
//           Title: "Mr",
//           First_Name: formData.fName,
//           Last_Name: formData.lName,
//           Gender: formData.gender,
//           // SpecialRequest: formData.note,
//         },
//       },
//       check_in_date: bookingData[0].checkIn,
//       check_out_date: bookingData[0].checkOut,
//       Booking_Payment_Mode: "",
//       Email_Address: formData.email,
//       Source_Id: "",
//       MobileNo: formData.phone,
//       Address: formData.streetAddress,
//       State: formData.state,
//       Country: formData.country,
//       City: formData.city,
//       Zipcode: formData.zip,
//       // Fax: "",
//       // Device: "",
//       Languagekey: "en",
//       paymenttypeunkid: "",
//     };
//     console.log(body);

//     try {
//       const queryParams = new URLSearchParams({
//         request_type: "InsertBooking",
//         HotelCode: "35554",
//         APIKey: "1189076249bb54f995-cd1c-11ed-b",
//       }).toString();

//       const response = await fetch(`/api/booking?${queryParams}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       if (!response.ok) {
//         throw new Error('Booking failed');
//       }

//       const result = await response.json();
//       console.log('Booking Result:', result);
//       // router.push("/order");
//     } catch (error) {
//       console.error('Booking error:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   return (
//     <section className="checkout-area section-space">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7">
//             <div className="checkout-verify mb-24">
//               <CheckoutLogin />
//               <AddCuponMain />
//             </div>
//             <div className="checkout-bill-area">
//               <h3 className="checkout-bill-title">Billing Details</h3>
//               <div className="checkout-bill-form">
//                 <CheckoutForm onValidationChange={handleFormValidation} />
//               </div>
//             </div>
//           </div>
//           <OrderDetails onSubmit={handleSubmit} isFormValid={isFormValid} paymentMode={paymentMode} setPaymentMode={setPaymentMode} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CheckoutArea;

"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import CheckoutForm from "@/forms/CheckoutForm";
import OrderDetails from "./OrderDetails";
import CheckoutLogin from "./CheckoutLogin";
import AddCuponMain from "./AddCuponMain";
import CustomSwal from "../swal/CustomSwal";
import { setBookingNumber } from "@/redux/slices/bookingSlice";

const CheckoutArea: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const router = useRouter();
  const [swalProps, setSwalProps] = useState<any>({
    title: "",
    text: "",
    icon: "success" as const,
  });
  const [showSwal, setShowSwal] = useState(false);
  const dispatch = useDispatch();

  const formData = useSelector((state: RootState) => state.formData);
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const discountedBookings = useSelector((state: RootState) => state.booking.discountedBookings);
  const bookingData: any = useSelector(
    (state: RootState) => state.app.bookings
  );
  console.log(bookings);
  console.log(bookingData);

  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const handleSubmit = async () => {
    console.log("Form submitted");
    if (!isFormValid) {
      console.log("Form is not valid. Please check all required fields.");
      // console.log("Form is not valid. Please check all required fields.");
      setSwalProps({
        title: "Invalid Form",
        text: "Please check all required fields.",
        icon: "error",
      });
      setShowSwal(true);
      return;
    }

    //if no payment mode selected
    if (paymentMode === "") {
      console.log("Please select a payment mode");
      setSwalProps({
        title: "Payment Mode",
        text: "Please select a payment mode.",
        icon: "info",
      });
      setShowSwal(true);
      return;
    }

    if (paymentMode === "pay_on_visit") {
      await processBooking();
    } else if (paymentMode === "online_payment") {
      // console.log("Online payment to be implemented");
      setSwalProps({
        title: "Online Payment",
        text: "Online payment to be implemented",
        icon: "info",
      });
      setShowSwal(true);
    }
  };

  const processBooking = async () => {
    const bookingBody = createBookingBody();
    console.log("Booking Body:", bookingBody);
    try {
      // const result = await sendBookingRequest(bookingBody);
      // console.log("Booking Result:", result);
      const result = {
        ReservationNo: 'SR15369',
        SubReservationNo: [ 'SR15369' ],
        Inventory_Mode: 'REGULAR',
        lang_key: 'en'
      }
      if (result.ReservationNo) {
        dispatch(setBookingNumber(result.ReservationNo));
        router.push("/order");
        // setSwalProps({
        //   title: 'Booking Successful',
        //   text: `Your booking number is ${result.ReservationNo}.`,
        //   icon: 'success',
        // });
        // setShowSwal(true);
      }

      // router.push("/order");
    } catch (error) {
      console.error("Booking error:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const createBookingBody = () => {
    const booking = discountedBookings.length > 0 ? discountedBookings[0] : bookings[0];
    const appBooking = bookingData[0];
    const baseRate = discountedBookings.length > 0 
    ? booking.discountedPrice.toString()
    : booking.room_rates_info.avg_per_night_without_tax.toString();

    return {
      Room_Details: {
        Room_1: {
          Rateplan_Id: booking.roomrateunkid,
          Ratetype_Id: booking.ratetypeunkid,
          Roomtype_Id: booking.roomtypeunkid,
          // baserate:
          //   booking.room_rates_info.avg_per_night_after_discount.toString(),
          baserate: baseRate,
          extradultrate: (
            booking.extra_adult_rates_info.inclusive_tax_adjustment[
              appBooking.checkIn
            ] || "0"
          ).toString(),
          extrachildrate: (
            booking.extra_child_rates_info.inclusive_tax_adjustment[
              appBooking.checkIn
            ] || "0"
          ).toString(),
          number_adults: appBooking.adult.toString(),
          number_children: appBooking.children.toString(),
          Title: formData.title,
          First_Name: formData.fName,
          Last_Name: formData.lName,
          Gender: formData.gender,
        },
      },
      check_in_date: appBooking.checkIn,
      check_out_date: appBooking.checkOut,
      Booking_Payment_Mode: paymentMode,
      Email_Address: formData.email,
      MobileNo: formData.phone,
      Address: formData.streetAddress,
      State: formData.state,
      Country: formData.country,
      City: formData.city,
      Zipcode: formData.zip,
      Languagekey: "en",
      paymenttypeunkid: "",
    };
  };

  const sendBookingRequest = async (body: any) => {
    try {
      const formData = new URLSearchParams();
      formData.append("BookingData", JSON.stringify(body));
      formData.append("HotelCode", "35554");
      formData.append("APIKey", "1189076249bb54f995-cd1c-11ed-b");

      const response = await fetch("/api/booking?request_type=InsertBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      const result = await response.json();
      // console.log('Booking Result:', result);
      // {
      //   ReservationNo: 'SR15325',
      //   SubReservationNo: [ 'SR15325' ],
      //   Inventory_Mode: 'REGULAR',
      //   lang_key: 'en'
      // }
      // const result = {
      //   ReservationNo: "SR15325",
      //   SubReservationNo: ["SR15325"],
      //   Inventory_Mode: "REGULAR",
      //   lang_key: "en",
      // };

      return result;
    } catch (error) {
      console.error("Booking error:", error);
      throw error;
    }
  };
  return (
    <section className="checkout-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <CheckoutVerification />
            <BillingDetails onValidationChange={handleFormValidation} />
          </div>
          <OrderDetails
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
            paymentMode={paymentMode}
            setPaymentMode={setPaymentMode}
          />
        </div>
      </div>
      {showSwal && <CustomSwal {...swalProps} />}
    </section>
  );
};

const CheckoutVerification: React.FC = () => (
  <div className="checkout-verify mb-24">
    <CheckoutLogin />
    <AddCuponMain />
  </div>
);

const BillingDetails: React.FC<{
  onValidationChange: (valid: boolean) => void;
}> = ({ onValidationChange }) => (
  <div className="checkout-bill-area">
    <h3 className="checkout-bill-title">Billing Details</h3>
    <div className="checkout-bill-form">
      <CheckoutForm onValidationChange={onValidationChange} />
    </div>
  </div>
);

export default CheckoutArea;
