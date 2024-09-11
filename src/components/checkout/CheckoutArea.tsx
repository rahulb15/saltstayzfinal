"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import CheckoutForm from "@/forms/CheckoutForm";
import OrderDetails from "./OrderDetails";
import CheckoutLogin from "./CheckoutLogin";
import AddCuponMain from "./AddCuponMain";

const CheckoutArea = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const formData = useSelector((state: RootState) => state.formData);
  // const rooms = useSelector((state: RootState) => state.room.rooms);
  // console.log(rooms);
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  console.log(bookings);
  const bookingData:any = useSelector((state: RootState) => state.app.bookings);
  console.log(bookingData);
  // [
  //   {
  //     city: 'Gurugram',
  //     checkIn: '2024-09-09',
  //     checkOut: '2024-09-10',
  //     room: 1,
  //     adult: 1,
  //     children: 0
  //   }
  // ]
  const router = useRouter();

  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };
  console.log(formData);
  console.log(isFormValid);

  const handleSubmit = async (shippingTitle: string, shippingAmount: number) => {
    console.log("Form submitted with shipping:", shippingTitle, shippingAmount);
    if (!isFormValid) {
      console.log("Form is not valid. Please check all required fields.");
      return;
    }

    const shippingInfo = `${shippingTitle} ${shippingAmount}`;
    localStorage.setItem("Shipping Info", shippingInfo);

    const body = {
      Room_Details: {
        Room_1: {
          Rateplan_Id: bookings[0].roomrateunkid,
          Ratetype_Id: bookings[0].ratetypeunkid,
          Roomtype_Id: bookings[0].roomtypeunkid,
          baserate: bookings[0].room_rates_info.avg_per_night_after_discount,
          extradultrate: bookings[0].extra_adult_rates_info.inclusive_tax_adjustment['2024-09-09'],
          extrachildrate: bookings[0].extra_child_rates_info.inclusive_tax_adjustment['2024-09-09'],
          number_adults: bookingData[0].adult,
          number_children: bookingData[0].children,
          ExtraChild_Age: "2",
          Title: formData.title,
          First_Name: formData.fName,
          Last_Name: formData.lName,
          Gender: formData.gender,
          SpecialRequest: formData.note,
        },
      },
      check_in_date: bookingData[0].checkIn,
      check_out_date: bookingData[0].checkOut,
      Booking_Payment_Mode: "",
      Email_Address: formData.email,
      Source_Id: "",
      MobileNo: formData.phone,
      Address: formData.streetAddress,
      State: formData.state,
      Country: formData.country,
      City: formData.city,
      Zipcode: formData.zip,
      Fax: "",
      Device: "",
      Languagekey: "en",
      paymenttypeunkid: "",
    };
    console.log(body);

    try {
      const queryParams = new URLSearchParams({
        request_type: "InsertBooking",
        HotelCode: "35554",
        APIKey: "1189076249bb54f995-cd1c-11ed-b",
      }).toString();

      const response = await fetch(`/api/booking?${queryParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      const result = await response.json();
      console.log('Booking successful:', result);
      // router.push("/order");
    } catch (error) {
      console.error('Booking error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <section className="checkout-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="checkout-verify mb-24">
              <CheckoutLogin />
              <AddCuponMain />
            </div>
            <div className="checkout-bill-area">
              <h3 className="checkout-bill-title">Billing Details</h3>
              <div className="checkout-bill-form">
                <CheckoutForm onValidationChange={handleFormValidation} />
              </div>
            </div>
          </div>
          <OrderDetails onSubmit={handleSubmit} isFormValid={isFormValid} />
        </div>
      </div>
    </section>
  );
};

export default CheckoutArea;