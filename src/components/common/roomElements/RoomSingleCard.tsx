// import React from "react";
// import Image from "next/image";
// import { imageLoader } from "@/hooks/image-loader";
// import useGlobalContext from "@/hooks/use-context";

// interface ItourPropsType {
//   tour: any;
// }

// const RoomSingleCard: React.FC<ItourPropsType> = ({ tour }) => {
//   const { setModalData } = useGlobalContext();
//   const rating = tour.tourRating ? parseFloat(tour.tourRating) : 1;

//   const thumbnails = Array(4).fill(tour.img);

//   return (
//     <div className="room-card">
//       <div className="room-card-wrapper">
//         <div className="room-image-section">
//           <div className="room-main-image">
//             <Image
//               src={tour.img}
//               loader={imageLoader}
//               alt={tour.tourTitle}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="room-thumbnail-images">
//             {thumbnails.map((thumb, index) => (
//               <div key={index} className="thumbnail">
//                 <Image
//                   src={thumb}
//                   loader={imageLoader}
//                   alt={`Thumbnail ${index + 1}`}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             ))}
//           </div>
//           <button className="view-all-btn">View All</button>
//         </div>
//         <div className="room-details-section">
//           <h2 className="room-title">
//             {tour.tourTitle} 
//             {/* {Array(Math.floor(rating)).fill("★").join("")}
//             {Array(5 - Math.floor(rating))
//               .fill("☆")
//               .join("")} */}
//           </h2>
//           <p className="room-location">
//             {tour.tourLocation} | {tour.distanceFromLandmark}
//           </p>
//           <div className="room-tags">
//             <span className="tag">{tour.tourType}</span>
//           </div>
//           <p className="room-feature">
//             <span className="feature-icon">🏆</span> {tour.highlightFeature}
//           </p>
//           <div className="room-rating">
//             {/* <span className="rating-label">{tour.ratingLabel}</span> */}
//             {/* <span className="rating-score">{rating.toFixed(1)}</span> */}
//             <span className="rating-count">
//               {/* ({tour.tourRatingCount} Ratings) */}
//             </span>
//           </div>
//           <div className="room-price-booking">
//             <div className="price-section">
//               <span className="current-price">
//                 ₹{tour.tourPrice?.toLocaleString("en-IN")}
//               </span>
//               {tour.originalPrice && (
//                 <span className="original-price">
//                   ₹{tour.originalPrice.toLocaleString("en-IN")}
//                 </span>
//               )}
//               <p className="price-detail">
//                 + ₹{tour.taxesAndFees} taxes & fees
//               </p>
//               <p className="per-night">Per Night</p>
//             </div>
//             <button
//               onClick={() => setModalData(tour)}
//               className="booking-btn"
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#popUpBookingForm"
//             >
//               Login to Book Now & Pay Later!
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomSingleCard;

import React from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/image-loader";
import useGlobalContext from "@/hooks/use-context";
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRooms } from "@/redux/slices/roomSlice";
import axios from "axios";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
interface ItourPropsType {
  tour: any;
}

interface Booking {
    city: string;
    checkIn: string;
    checkOut: string;
    room: number;
    adult: number;
    children: number;
  }
  

const RoomSingleCard: React.FC<ItourPropsType> = ({ tour }) => {
  const { setModalData } = useGlobalContext();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };
  console.log("bookings", bookings);
  const { rooms } = useAppSelector((state: RootState) => state.room);
  console.log("rooms", rooms);


  const rating = tour.tourRating ? parseFloat(tour.tourRating) : 1;
  const thumbnails = Array(4).fill(tour.img);

  const handleClick = async () => {
    try {
      if (!bookings || bookings.length === 0) {
        toast.error("Please select booking details first");
        return;
      }

      const currentBooking = bookings[0];
      const queryParams = new URLSearchParams({
        request_type: "RoomList",
        HotelCode: "35554",
        APIKey: "1189076249bb54f995-cd1c-11ed-b",
        check_in_date: currentBooking.checkIn,
        check_out_date: currentBooking.checkOut,
        number_adults: currentBooking.adult.toString(),
        number_children: currentBooking.children.toString(),
        // promotion_code:"SALT60",
      }).toString();

      const response = await axios.get(`/api/booking?${queryParams}`);
      console.log("Room data:", response.data);
      
      dispatch(setRooms({ rooms: response.data }));
      router.push(`/hotel-details/1`);
    } catch (error) {
      console.error("Error fetching room data:", error);
      toast.error("Failed to fetch room data. Please try again.");
    }
  };

  return (
    <div className="room-card" onClick={handleClick}>
      <div className="room-card-wrapper">
        <div className="room-image-section">
          <div className="room-main-image" onClick={handleClick} style={{ cursor: "pointer" }}>
            <Image
              src={tour.img}
              loader={imageLoader}
              alt={tour.tourTitle}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="room-thumbnail-images">
            {thumbnails.map((thumb, index) => (
              <div key={index} className="thumbnail">
                <Image
                  src={thumb}
                  loader={imageLoader}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="room-details-section">
          <h2 className="room-title">{tour.tourTitle}</h2>
          <p className="room-location">
            {tour.tourLocation} | {tour.distanceFromLandmark}
          </p>
          <div className="room-tags">
            <span className="tag">{tour.tourType}</span>
          </div>
          <p className="room-feature">
            <span className="feature-icon">🏆</span> {tour.highlightFeature}
          </p>
          <div className="room-rating">
            <span className="rating-count"></span>
          </div>
          <div className="room-price-booking">
            <div className="price-section">
              <span className="current-price">
                ₹{tour.tourPrice?.toLocaleString("en-IN")}
              </span>
              {tour.originalPrice && (
                <span className="original-price">
                  ₹{tour.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              <p className="price-detail">
                + ₹{tour.taxesAndFees} taxes & fees
              </p>
              <p className="per-night">Per Night</p>
            </div>
            <button
              // onClick={(e) => {
              //   e.stopPropagation();
              //   setModalData(tour);
              // }}
              onClick={handleClick}
              className="booking-btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#popUpBookingForm"
            >
             Book Now & Pay Later!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSingleCard;