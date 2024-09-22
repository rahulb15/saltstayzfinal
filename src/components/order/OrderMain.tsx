// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import Breadcrumb from "../common/breadcrumb/BreadCrumb";
// import OrderConfirmIcon from "@/svg/OrderConfirmIcon";
// import { setConfirmedBooking } from "@/redux/slices/confirmedBookingSlice";
// import { clearBookings } from "@/redux/slices/bookingSlice";
// import { setBookings } from "@/redux/slices/appSlice";
// import { resetFormData } from "@/redux/slices/formDataSlice";
// import { setRooms } from "@/redux/slices/roomSlice";
// const OrderMain = () => {
//   const dispatch = useDispatch();
//   const confirmedBooking = useSelector((state: RootState) => state.confirmedBooking.bookingDetails);
//   const bookingNumber = useSelector((state: RootState) => state.booking.bookingNumber);
//   console.log("confirmedBooking", confirmedBooking);
//   console.log("bookingNumber", bookingNumber);
//   const bookings = useSelector((state: RootState) => state.booking.bookings);
//   console.log("bookings", bookings);
//   const bookingData = useSelector((state: RootState) => state.app.bookings);
//   console.log("bookingData", bookingData);

//   useEffect(() => {
//     if (bookings.length > 0 && bookingData.length > 0) {
//       const confirmedBookingData = {
//         bookingNumber,
//         bookings,
//         bookingData,
//       };
//       console.log("confirmedBookingData", confirmedBookingData);
//       dispatch(setConfirmedBooking(confirmedBookingData));
//       dispatch(clearBookings());
//       dispatch(setBookings([]));
//       dispatch(resetFormData());
//       dispatch(setRooms({ rooms: [] }));
//     }
//   }, [confirmedBooking, bookings, bookingData, bookingNumber, dispatch]);

//   // useEffect(() => {
//   //   return () => {
//   //     // Cleanup function to reset other slices when component unmounts
//   //     dispatch(clearBookings());
//   //     dispatch(setBookings([]));
//   //     dispatch(resetFormData());
//   //     dispatch(setRooms({ rooms: [] }));
//   //   };
//   // }, [confirmedBooking]);

//   const calculateNights = (checkIn: string, checkOut: string) => {
//     const start = new Date(checkIn);
//     const end = new Date(checkOut);
//     const diff = end.getTime() - start.getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   if (!confirmedBooking) {
//     return <div>Loading...</div>;
//   }

//   const { bookingNumber: confirmedBookingNumber, bookings: confirmedBookings, bookingData: confirmedBookingData } = confirmedBooking;

//   const total = confirmedBookings[0]?.room_rates_info.totalprice_inclusive_all || 0;

//   return (
//     <>
//       <style jsx global>{`
//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           .print-section, .print-section * {
//             visibility: visible;
//           }
//           .print-section {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }
//           .no-print {
//             display: none;
//           }
//         }
//       `}</style>
//       <div className="no-print">
//         <Breadcrumb titleOne="Booking Confirm" titleTwo="Booking" />
//       </div>
//       <section className="order-area section-space print-section">
//         <div className="container">
//           <div className="row gx-0 justify-content-center">
//             <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12">
//               <div className="order-inner">
//                 <div className="order-details mb-35">
//                   <div className="order-details-top text-center mb-70">
//                     <div className="order-details-icon">
//                       <span>
//                         <OrderConfirmIcon />
//                       </span>
//                     </div>
//                     <div className="order-details-content">
//                       <h3 className="order-details-title mb-15">
//                         Your Hotel Booking is Confirmed
//                       </h3>
//                       <p>
//                         We're excited to welcome you to our hotel! Your booking has been confirmed and we look forward to providing you with a comfortable stay.
//                       </p>
//                       <p>
//                         If you need to make any changes or have any questions, please don't hesitate to contact us.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="order-details-item-wrapper">
//                     <div className="row justify-content-start gy-24">
//                       <div className="col-xl-3 col-lg-6 col-sm-6">
//                         <div className="order-details-item">
//                           <h4>Booking Date:</h4>
//                           <p>{formatDate(new Date().toISOString())}</p>
//                         </div>
//                       </div>
//                       <div className="col-xl-3 col-lg-6 col-sm-6">
//                         <div className="order-details-item">
//                           <h4>Check-in Date:</h4>
//                           <p>{formatDate(confirmedBookingData[0]?.checkIn)}</p>
//                         </div>
//                       </div>
//                       <div className="col-xl-3 col-lg-6 col-sm-6">
//                         <div className="order-details-item">
//                           <h4>Check-out Date:</h4>
//                           <p>{formatDate(confirmedBookingData[0]?.checkOut)}</p>
//                         </div>
//                       </div>
//                       <div className="col-xl-3 col-lg-6 col-sm-6">
//                         <div className="order-details-item">
//                           <h4>Booking Number:</h4>
//                           <p>{confirmedBookingNumber}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="order-info-wrapper">
//                   <h4 className="order-info-title">Booking Details</h4>
//                   <div className="order-info-list">
//                     <ul>
//                       <li className="order-info-list-header">
//                         <h4>Room</h4>
//                         <h4>Total</h4>
//                       </li>
//                       <li className="order-info-list-desc">
//                         <p>
//                         {confirmedBookings[0]?.Room_Name} <span> x {confirmedBookingData[0]?.room}</span>
//                         </p>
//                         <span>{confirmedBookings[0]?.currency_sign}{total.toFixed(2)}</span>
//                       </li>
//                       <li className="order-info-list-subtotal">
//                         <span>Subtotal</span>
//                         <span>{bookings[0]?.currency_sign}{total.toFixed(2)}</span>
//                       </li>
//                       <li className="order-info-list-shipping">
//                         <span>Taxes</span>
//                         <div className="order-info-list-shipping-item d-flex flex-column align-items-end">
//                           <span>
//                             <input id="shipping_info" type="checkbox" checked readOnly />
//                             <label htmlFor="shipping_info">
//                               Included in price
//                             </label>
//                           </span>
//                         </div>
//                       </li>
//                       <li className="order-info-list-total">
//                         <span>Total</span>
//                         <span>{bookings[0]?.currency_sign}{total.toFixed(2)}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="print-button-wrapper no-print" style={{ textAlign: 'center', marginTop: '20px' }}>
//                   <button onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
//                     Print Booking Confirmation
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OrderMain;


"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Breadcrumb from "../common/breadcrumb/BreadCrumb";
import OrderConfirmIcon from "@/svg/OrderConfirmIcon";
import { setConfirmedBooking } from "@/redux/slices/confirmedBookingSlice";
import { clearBookings } from "@/redux/slices/bookingSlice";
import { setBookings } from "@/redux/slices/appSlice";
import { resetFormData } from "@/redux/slices/formDataSlice";
import { setRooms } from "@/redux/slices/roomSlice";

const OrderMain = () => {
  const dispatch = useDispatch();
  const confirmedBooking = useSelector((state: RootState) => state.confirmedBooking.bookingDetails);
  console.log("confirmedBooking", confirmedBooking);
  const bookingNumber = useSelector((state: RootState) => state.booking.bookingNumber);
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  const bookingData:any = useSelector((state: RootState) => state.app.bookings);

  useEffect(() => {
    if (bookings.length > 0 && bookingData.length > 0) {
      const confirmedBookingData = {
        bookingNumber,
        bookings,
        bookingData,
      };
      dispatch(setConfirmedBooking(confirmedBookingData));
      dispatch(clearBookings());
      dispatch(setBookings([]));
      dispatch(resetFormData());
      dispatch(setRooms({ rooms: [] }));
    }
  }, [confirmedBooking, bookings, bookingData, bookingNumber, dispatch]);

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!confirmedBooking) {
    return <div>Loading...</div>;
  }

  const { bookingNumber: confirmedBookingNumber, bookings: confirmedBookings, bookingData: confirmedBookingData } = confirmedBooking;

  // Calculate the total price, tax, and exclusive tax
  const total = confirmedBookings[0]?.room_rates_info.totalprice_inclusive_all || 0;
  const tax = confirmedBookings[0]?.room_rates_info.tax[confirmedBooking?.bookingData[0]?.checkIn] || 0;
  const exclusiveTax = confirmedBookings[0]?.room_rates_info.exclusive_tax['2024-09-23'] || 0;
  const totalWithTax = total + tax + exclusiveTax;

  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-section, .print-section * {
            visibility: visible;
          }
          .print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none;
          }
        }
      `}</style>
      <div className="no-print">
        <Breadcrumb titleOne="Booking Confirm" titleTwo="Booking" />
      </div>
      <section className="order-area section-space print-section">
        <div className="container">
          <div className="row gx-0 justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12">
              <div className="order-inner">
                <div className="order-details mb-35">
                  <div className="order-details-top text-center mb-70">
                    <div className="order-details-icon">
                      <span>
                        <OrderConfirmIcon />
                      </span>
                    </div>
                    <div className="order-details-content">
                      <h3 className="order-details-title mb-15">
                        Your Hotel Booking is Confirmed
                      </h3>
                      <p>
                        We're excited to welcome you to our hotel! Your booking has been confirmed and we look forward to providing you with a comfortable stay.
                      </p>
                      <p>
                        If you need to make any changes or have any questions, please don't hesitate to contact us.
                      </p>
                    </div>
                  </div>
                  <div className="order-details-item-wrapper">
                    <div className="row justify-content-start gy-24">
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="order-details-item">
                          <h4>Booking Date:</h4>
                          <p>{formatDate(new Date().toISOString())}</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="order-details-item">
                          <h4>Check-in Date:</h4>
                          <p>{formatDate(confirmedBookingData[0]?.checkIn)}</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="order-details-item">
                          <h4>Check-out Date:</h4>
                          <p>{formatDate(confirmedBookingData[0]?.checkOut)}</p>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="order-details-item">
                          <h4>Booking Number:</h4>
                          <p>{confirmedBookingNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-info-wrapper">
                  <h4 className="order-info-title">Booking Details</h4>
                  <div className="order-info-list">
                    <ul>
                      <li className="order-info-list-header">
                        <h4>Room</h4>
                        <h4>Total</h4>
                      </li>
                      <li className="order-info-list-desc">
                        <p>
                        {confirmedBookings[0]?.Room_Name} <span> x {confirmedBookingData[0]?.room}</span>
                        </p>
                        <span>{confirmedBookings[0]?.currency_sign}{total.toFixed(2)}</span>
                      </li>
                      <li className="order-info-list-subtotal">
                        <span>Subtotal</span>
                        <span>{confirmedBookings[0]?.currency_sign}{total.toFixed(2)}</span>
                      </li>
                      <li className="order-info-list-shipping">
                        <span>Tax</span>
                        <span>{confirmedBookings[0]?.currency_sign}{tax.toFixed(2)}</span>
                      </li>
                      <li className="order-info-list-shipping">
                        <span>Exclusive Tax</span>
                        <span>{confirmedBookings[0]?.currency_sign}{exclusiveTax.toFixed(2)}</span>
                      </li>
                      <li className="order-info-list-total">
                        <span>Total (with taxes)</span>
                        <span>{confirmedBookings[0]?.currency_sign}{totalWithTax.toFixed(2)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="print-button-wrapper no-print" style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Print Booking Confirmation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderMain;
