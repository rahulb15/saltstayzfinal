"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeCoupon } from "@/redux/slices/bookingSlice";
import SelectPaymentType from "./SelectPaymentType";
import CustomSwal from "../swal/CustomSwal";

interface OrderDetailsProps {
  onSubmit: (shippingTitle: string, shippingAmount: number) => void;
  isFormValid: boolean;
  paymentMode: string;
  setPaymentMode: (mode: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ 
  onSubmit, 
  isFormValid,
  paymentMode, 
  setPaymentMode 
}) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [shippingAmount] = useState(0);
  const [shippingTitle] = useState("");

  const [swalProps, setSwalProps] = useState<any>({
    title: "",
    text: "",
    icon: "success" as const,
  });
  const [showSwal, setShowSwal] = useState(false);

  const bookings = useSelector((state: RootState) => state.booking.bookings);
  console.log("bookings", bookings);
  const bookingData: any = useSelector((state: RootState) => state.app.bookings);
  const discountedBookings = useSelector((state: RootState) => state.booking.discountedBookings);

  useEffect(() => {
    if (bookings.length > 0 && bookingData.length > 0) {
      const roomRate = parseFloat(bookings[0].room_rates_info.avg_per_night_after_discount);
      const numNights = calculateNights(bookingData[0].checkIn, bookingData[0].checkOut);
      setTotal(roomRate * numNights);
    }
  }, [bookings, bookingData]);

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(shippingTitle, shippingAmount);
    } else {
      // console.log("Form is not valid. Please check all required fields.");
      setSwalProps({
        title: "Form is not valid",
        text: "Please check all required fields.",
        icon: "error",
      });
      setShowSwal(true);
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
  };

  return (
    <>
    <div className="col-lg-5">
      <div className="checkout-place sidebar-sticky">
        <h3 className="checkout-place-title">Your Order</h3>
        <OrderSummary 
          bookings={bookings} 
          bookingData={bookingData} 
          discountedBookings={discountedBookings}
          total={total} 
          calculateNights={calculateNights}
          shippingAmount={shippingAmount}
          onRemoveCoupon={handleRemoveCoupon}
        />
        <div className="checkout-payment">
          <SelectPaymentType 
            paymentMode={paymentMode} 
            setPaymentMode={setPaymentMode} 
          />
        </div>
        <TermsAgreement />
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
    </div>
          {showSwal && <CustomSwal {...swalProps} />}
          </>

  );
};

// const OrderSummary = ({ bookings, bookingData, discountedBookings, total, calculateNights, shippingAmount, onRemoveCoupon } : any) => {
//   const hasDiscount = discountedBookings && discountedBookings.length > 0;
//   const discountedBooking = hasDiscount ? discountedBookings[0] : null;
//   const nights = bookingData.length > 0 ? calculateNights(bookingData[0].checkIn, bookingData[0].checkOut) : 0;
//   const originalTotal = total;
//   const discountedTotal = hasDiscount ? discountedBooking.discountedPrice * nights : total;

//   return (
//     <div className="order-info-list">
//       <ul>
//         <li className="order-info-list-header">
//           <h4>Product</h4>
//           <h4>Total</h4>
//         </li>
//         {bookings.length > 0 && bookingData.length > 0 && (
//           <>
//             <li className="order-info-list-desc">
//               <p>
//                 {bookings[0].Room_Name}{" "}
//                 <span> x {nights} nights</span>
//               </p>
//               <span>${originalTotal.toFixed(2)}</span>
//             </li>
//             {hasDiscount && (
//               <li className="order-info-list-desc text-success">
//                 <p>Discounted Price *</p>
//                 <span>${discountedTotal.toFixed(2)}</span>
//               </li>
//             )}
//           </>
//         )}
//         <li className="order-info-list-subtotal">
//           <span>Subtotal</span>
//           <span>${(hasDiscount ? discountedTotal : originalTotal).toFixed(2)}</span>
//         </li>
//         {hasDiscount && (
//           <li className="order-info-list-discount text-success">
//             <span>Discount Applied</span>
//             <span>-${(originalTotal - discountedTotal).toFixed(2)}</span>
//           </li>
//         )}
//         <li className="order-info-list-total">
//           <span>Total</span>
//           <span>${((hasDiscount ? discountedTotal : originalTotal) + shippingAmount).toFixed(2)}</span>
//         </li>
//       </ul>
//       {hasDiscount && (
//         <div className="mt-2">
//           <p className="text-success">
//             * Coupon {discountedBooking.couponCode} applied successfully!
//           </p>
//           <button 
//             onClick={onRemoveCoupon}
//             className="btn btn-sm btn-outline-danger"
//           >
//             Remove Coupon
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

const OrderSummary = ({ bookings, bookingData, discountedBookings, total, calculateNights, shippingAmount, onRemoveCoupon }:any) => {
  const hasDiscount = discountedBookings && discountedBookings.length > 0;
  const discountedBooking = hasDiscount ? discountedBookings[0] : null;
  const nights = bookingData.length > 0 ? calculateNights(bookingData[0].checkIn, bookingData[0].checkOut) : 0;
  const originalTotal = total;
  const discountedTotal = hasDiscount ? discountedBooking.discountedPrice * nights : total;

  const booking = bookings[0];
  console.log("bookingData", bookingData);
  const roomRatesInfo = booking.room_rates_info;
  console.log("roomRatesInfo", roomRatesInfo);
  const subtotal = roomRatesInfo.totalprice_room_only;
  const taxAmount = roomRatesInfo.tax[bookingData[0]?.checkIn];
  const totalWithTax = roomRatesInfo.totalprice_inclusive_all;

  return (
    <div className="order-info-list">
      <ul>
        <li className="order-info-list-header">
          <h4>Product</h4>
          <h4>Total</h4>
        </li>
        {bookings.length > 0 && bookingData.length > 0 && (
          <>
            <li className="order-info-list-desc">
              <p>
                {booking.Room_Name}{" "}
                <span> x {nights} nights</span>
              </p>
              <span>${subtotal.toFixed(2)}</span>
            </li>
            <li className="order-info-list-desc">
              <p>Taxes (CGST + SGST)</p>
              <span>${taxAmount?.toFixed(2)}</span>
            </li>
            {hasDiscount && (
              <li className="order-info-list-desc text-success">
                <p>Discounted Price *</p>
                <span>${discountedTotal.toFixed(2)}</span>
              </li>
            )}
          </>
        )}
        <li className="order-info-list-subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </li>
        {hasDiscount && (
          <li className="order-info-list-discount text-success">
            <span>Discount Applied</span>
            <span>-${(originalTotal - discountedTotal).toFixed(2)}</span>
          </li>
        )}
        <li className="order-info-list-tax">
          <span>Taxes</span>
          <span>${taxAmount?.toFixed(2)}</span>
        </li>
        <li className="order-info-list-total">
          <span>Total (including taxes)</span>
          <span>${totalWithTax?.toFixed(2)}</span>
        </li>
      </ul>
      {hasDiscount && (
        <div className="mt-2">
          <p className="text-success">
            * Coupon {discountedBooking.couponCode} applied successfully!
          </p>
          <button 
            onClick={onRemoveCoupon}
            className="btn btn-sm btn-outline-danger"
          >
            Remove Coupon
          </button>
        </div>
      )}
    </div>
  );
};

const TermsAgreement = () => (
  <div className="checkout-agree">
    <div className="checkout-option mb-15">
      <input id="read_all" type="checkbox" />
      <label htmlFor="read_all">
        I have read and agree to the website.
      </label>
    </div>
  </div>
);

const SubmitButton = ({ handleSubmit } : any) => (
  <div className="checkout-btn-wrapper">
    <button
      type="submit"
      onClick={handleSubmit}
      className="bd-primary-btn btn-style is-bg radius-60 w-100"
    >
      <span className="bd-primary-btn-text">Place Booking</span>
      <span className="bd-primary-btn-circle"></span>
    </button>
  </div>
);

export default OrderDetails;