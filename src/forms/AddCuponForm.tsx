"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSelector, useDispatch } from "react-redux";
import { setRooms } from "@/redux/slices/roomSlice";
import { setDiscountedBookings } from "@/redux/slices/bookingSlice";
import axios from "axios";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
interface Booking {
  city: string;
  checkIn: string;
  checkOut: string;
  room: number;
  adult: number;
  children: number;
}
const AddCuponForm = () => {
  const dispatch = useAppDispatch();
  const [coupon, setCoupon] = useState<string>("");
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  console.log("bookings", bookings);
  const bookingData: any = useSelector(
    (state: RootState) => state.app.bookings
  );
  console.log("bookingData", bookingData);

  const discountBookings = useSelector( (state: RootState) => state.booking.discountedBookings);
  console.log("discountBookings", discountBookings);
  const handleClick = async () => {
    if (!bookingData || bookingData.length === 0) {
      toast.error("Please select booking details first");
      return;
    }

    try {
      if (coupon === "") {
        toast.error("Please enter a coupon code");
        return;
      }

      const currentBooking = bookingData[0];
      const queryParams = new URLSearchParams({
        request_type: "RoomList",
        HotelCode: "35554",
        APIKey: "1189076249bb54f995-cd1c-11ed-b",
        check_in_date: currentBooking.checkIn,
        check_out_date: currentBooking.checkOut,
        number_adults: currentBooking.adult.toString(),
        number_children: currentBooking.children.toString(),
        promotion_code: coupon,
        num_rooms: "1",
        show_only_available_rooms: "1",
      }).toString();

      const response = await axios.get(`/api/booking?${queryParams}`);

      if (
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        response.data[0]["Error Details"]
      ) {
        const errorMessage = response.data[0]["Error Details"].Error_Message;
        toast.error(
          errorMessage || "An error occurred while fetching room data."
        );
      } else {
        // Process successful response
        const discountedBookings = response.data.map((room: any) => {
          const existingBooking = bookings.find(
            (booking) => booking.Room_Name === room.Room_Name
          );

          if (existingBooking) {
            const originalPrice = existingBooking.room_rates_info.totalprice_inclusive_all;
            console.log("originalPrice", originalPrice);
            const discountedPrice = room.room_rates_info.totalprice_inclusive_all;
            console.log("discountedPrice", discountedPrice);

            if (discountedPrice < originalPrice) {
              return {
                ...existingBooking,
                discountedPrice,
                couponCode: coupon,
                discount: originalPrice - discountedPrice,
                price: room.room_rates_info.avg_per_night_without_tax,
              };
            }
          }
          return null;
        }).filter(Boolean);
        console.log("discountedBookings", discountedBookings);

        if (discountedBookings.length > 0) {
          dispatch(setDiscountedBookings(discountedBookings));
          toast.success("Coupon applied successfully!");
        } else {
          toast.info("No discounts available with this coupon.");
        }
      }
    } catch (error) {
      console.error("Error fetching room data:", error);
      toast.error("Failed to fetch room data. Please try again.");
    }
  };
  return (
    <>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="return-customer-input">
          <label>Coupon Code :</label>
          <input
            type="text"
            placeholder="Coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bd-primary-btn btn-style is-bg radius-60"
        >
          <span className="bd-primary-btn-text">Apply Coupon</span>
          <span className="bd-primary-btn-circle"></span>
        </button>
      </form>
    </>
  );
};

export default AddCuponForm;
