// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Heart } from "lucide-react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const RoomSingleCard2 = ({ room, className, tourWrapperClass }:any) => {
//   console.log(room);
//   const discount = room.deals ? parseInt(room.deals.split('|')[1]) : 0;

//   return (
//     <div className={className}>
//       <div className={tourWrapperClass}>
//         <div className="p-relative">
//           <div className="tour-thumb image-overly">
//             <Carousel
//               autoPlay={true}
//               infiniteLoop={true}
//               showArrows={false}
//               showStatus={false}
//               showThumbs={false}
//               interval={3000}
//             >
//               {room?.RoomImages && room.RoomImages.length > 0 ? (
//                 room.RoomImages.map((img:any, index:any) => (
//                   <div key={index}>
//                     <Image
//                       src={img.image}
//                       width={400}
//                       height={300}
//                       alt={`${room.Room_Name} - Image ${index + 1}`}
//                       style={{ width: "100%", height: "auto" }}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div>
//                   <Image
//                     src="/assets/images/tour/tour-1.jpg"
//                     width={400}
//                     height={300}
//                     alt={room.Room_Name}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                 </div>
//               )}
//             </Carousel>
//           </div>
//         </div>
//         <div className="tour-content">
//           <h5 className="tour-title fw-5 underline custom_mb-5">
//             <Link href={`/room-details/${room.Package_Id}`}>{room.Room_Name}</Link>
//           </h5>
//           <span className="tour-price b3">
//             Best Price Guaranteed
//           </span>
//           <div className="tour-divider"></div>

//           <div className="tour-meta d-flex align-items-center justify-content-between">
//             <div className="time d-flex align-items-center gap--5">
//               <span>{room.specialhighlightinclusion}</span>
//             </div>
//             <div className="tour-btn">
//               <Link href={room.BookingEngineURL}>
//                 <button
//                   className="bd-text-btn style-two"
//                   type="button"
//                 >
//                   Book Now
//                   <span className="icon__box">
//                     <i className="fa-regular fa-arrow-right-long icon__first"></i>
//                     <i className="fa-regular fa-arrow-right-long icon__second"></i>
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, Users, Moon } from "lucide-react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./RoomSingleCard2.module.css";

// const CustomArrow = ({ onClick, direction }: any) => (
//   <button
//     onClick={onClick}
//     className={`${styles.carouselArrow} ${
//       direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
//     }`}
//   >
//     {direction === "prev" ? (
//       <ChevronLeft size={16} />
//     ) : (
//       <ChevronRight size={16} />
//     )}
//   </button>
// );

// const RoomSingleCard2 = ({ room, className, tourWrapperClass }: any) => {
//   console.log(room);
//   const discount = room.deals ? parseInt(room.deals.split("|")[1]) : 0;
//   const maxGuests = Math.max(room.max_adult_occupancy, room.Room_Max_adult) || "N/A";
//   const minNights = room.Avg_min_nights || 1;

//   return (
//     <div className={className}>
//       <div className={tourWrapperClass}>
//         <div className="p-relative">
//           <div
//             className={`tour-thumb image-overly ${styles.carouselContainer}`}
//           >
//             <Carousel
//               autoPlay={true}
//               infiniteLoop={true}
//               showStatus={false}
//               showThumbs={false}
//               interval={3000}
//               renderArrowPrev={(onClickHandler, hasPrev) =>
//                 hasPrev && (
//                   <CustomArrow onClick={onClickHandler} direction="prev" />
//                 )
//               }
//               renderArrowNext={(onClickHandler, hasNext) =>
//                 hasNext && (
//                   <CustomArrow onClick={onClickHandler} direction="next" />
//                 )
//               }
//             >
//               {room?.RoomImages && room.RoomImages.length > 0 ? (
//                 room.RoomImages.map((img: any, index: any) => (
//                   <div key={index}>
//                     <Image
//                       src={img.image}
//                       width={400}
//                       height={300}
//                       alt={`${room.Room_Name} - Image ${index + 1}`}
//                       style={{ width: "100%", height: "auto" }}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div>
//                   <Image
//                     src="/assets/images/tour/tour-1.jpg"
//                     width={400}
//                     height={300}
//                     alt={room.Room_Name}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                 </div>
//               )}
//             </Carousel>
//           </div>
//           {discount > 0 && (
//             <div className={styles.discountBadge}>{discount}% OFF</div>
//           )}
//         </div>
//         <div className="tour-content">
//           <h5 className="tour-title fw-5 underline custom_mb-5">
//             <Link href={`/room-details/${room.Package_Id}`}>
//               {room.Room_Name}
//             </Link>
//           </h5>
//           <div className={styles.roomDetails}>
//             <div className={styles.detailItem}>
//               <Users size={16} />
//               <span>Max Guests: {maxGuests}</span>
//             </div>
//             <div className={styles.detailItem}>
//               <Moon size={16} />
//               <span>Min Nights: {minNights}</span>
//             </div>
//           </div>
//           <div className={styles.priceSection}>
//             <span className="tour-price b3">Best Price Guaranteed</span>
//             {room.room_rates_info.avg_per_night_after_discount > 0 && (
//               <span className={styles.actualPrice}>
//                 {room.currency_sign || "$"}
//                 {room.room_rates_info.avg_per_night_after_discount.toFixed(2)} / night
//               </span>
//             )}
//           </div>
//           <div className="tour-divider"></div>

//           <div className="tour-meta d-flex align-items-center justify-content-between">
//             <div className="time d-flex align-items-center gap--5">
//               <span>{room.specialhighlightinclusion}</span>
//             </div>
//             <div className="tour-btn">
//               <Link href={room.BookingEngineURL}>
//                 <button className="bd-text-btn style-two" type="button">
//                   Book Now
//                   <span className="icon__box">
//                     <i className="fa-regular fa-arrow-right-long icon__first"></i>
//                     <i className="fa-regular fa-arrow-right-long icon__second"></i>
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomSingleCard2;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, Users, Moon, Coffee, Wifi } from "lucide-react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./RoomSingleCard2.module.css";

// const CustomArrow = ({ onClick, direction }: any) => (
//   <button
//     onClick={onClick}
//     className={`${styles.carouselArrow} ${
//       direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
//     }`}
//   >
//     {direction === "prev" ? (
//       <ChevronLeft size={16} />
//     ) : (
//       <ChevronRight size={16} />
//     )}
//   </button>
// );

// const RoomSingleCard2 = ({ room, className, tourWrapperClass }: any) => {
//   const discount = room.deals ? parseInt(room.deals.split("|")[1]) : 0;
//   const maxGuests = Math.max(room.max_adult_occupancy, room.Room_Max_adult) || "N/A";
//   const minNights = room.Avg_min_nights || 1;

//   const amenities = room.specialhighlightinclusion.split(',').map((item:any) => item.trim());

//   return (
//     <div className={`${className} ${styles.roomCard}`}>
//       <div className={`${tourWrapperClass} ${styles.roomCardInner}`}>
//         <div className={styles.imageContainer}>
//           <Carousel
//             autoPlay={true}
//             infiniteLoop={true}
//             showStatus={false}
//             showThumbs={false}
//             interval={3000}
//             renderArrowPrev={(onClickHandler, hasPrev) =>
//               hasPrev && (
//                 <CustomArrow onClick={onClickHandler} direction="prev" />
//               )
//             }
//             renderArrowNext={(onClickHandler, hasNext) =>
//               hasNext && (
//                 <CustomArrow onClick={onClickHandler} direction="next" />
//               )
//             }
//           >
//             {room?.RoomImages && room.RoomImages.length > 0 ? (
//               room.RoomImages.map((img: any, index: any) => (
//                 <div key={index} className={styles.carouselImageWrapper}>
//                   <Image
//                     src={img.image}
//                     layout="fill"
//                     objectFit="cover"
//                     alt={`${room.Room_Name} - Image ${index + 1}`}
//                   />
//                 </div>
//               ))
//             ) : (
//               <div className={styles.carouselImageWrapper}>
//                 <Image
//                   src="/assets/images/tour/tour-1.jpg"
//                   layout="fill"
//                   objectFit="cover"
//                   alt={room.Room_Name}
//                 />
//               </div>
//             )}
//           </Carousel>
//           {discount > 0 && (
//             <div className={styles.discountBadge}>{discount}% OFF</div>
//           )}
//         </div>
//         <div className={styles.contentContainer}>
//           <h3 className={styles.roomTitle}>
//             <Link href={`/room-details/${room.Package_Id}`}>
//               {room.Room_Name}
//             </Link>
//           </h3>
//           <div className={styles.roomDetails}>
//             <div className={styles.detailItem}>
//               <Users size={16} />
//               <span>{maxGuests} guests</span>
//             </div>
//             <div className={styles.detailItem}>
//               <Moon size={16} />
//               <span>Min {minNights} night{minNights > 1 ? 's' : ''}</span>
//             </div>
//           </div>
//           <div className={styles.amenities}>
//             {amenities.slice(0, 3).map((amenity:any, index:any) => (
//               <span key={index} className={styles.amenity}>
//                 {index === 0 && <Coffee size={14} />}
//                 {index === 1 && <Wifi size={14} />}
//                 {amenity}
//               </span>
//             ))}
//           </div>
//           <div className={styles.priceSection}>
//             <span className={styles.priceLabel}>Best Price Guaranteed</span>
//             {room.room_rates_info.avg_per_night_after_discount > 0 && (
//               <span className={styles.actualPrice}>
//                 {room.currency_sign || "$"}
//                 {room.room_rates_info.avg_per_night_after_discount.toFixed(2)}
//                 <span className={styles.perNight}>/night</span>
//               </span>
//             )}
//           </div>
//           <Link href={room.BookingEngineURL}>
//             <button className={styles.bookNowButton}>
//               Book Now
//               <ChevronRight size={16} />
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomSingleCard2;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Moon,
  Coffee,
  Wifi,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./RoomSingleCard2.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addBooking,
  updateBookingQuantity,
  removeBooking,
} from "@/redux/slices/bookingSlice";
import { RootState } from "@/redux/store";
import { useRouter } from 'next/navigation'


const CustomArrow = ({ onClick, direction }: any) => (
  <button
    onClick={onClick}
    className={`${styles.carouselArrow} ${
      direction === "prev" ? styles.carouselArrowPrev : styles.carouselArrowNext
    }`}
  >
    {direction === "prev" ? (
      <ChevronLeft size={16} />
    ) : (
      <ChevronRight size={16} />
    )}
  </button>
);

const RoomSingleCard2 = ({ room, className, tourWrapperClass }: any) => {
  console.log(room);
  const router = useRouter()
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.booking.bookings);
  console.log(bookings);
  const bookedRoom = bookings?.find(
    (booking) => booking?.Package_Id === room?.Package_Id
  );
  console.log(bookedRoom);
  const quantity = bookedRoom ? bookedRoom.quantity : 0;
  console.log(quantity);
  const discount = room.deals ? parseInt(room.deals.split("|")[1]) : 0;
  const maxGuests =
    Math.max(room.max_adult_occupancy, room.Room_Max_adult) || "N/A";
  const minNights = room.Avg_min_nights || 1;

  const amenities = room.specialhighlightinclusion
    .split(",")
    .map((item: any) => item.trim());
  const handleBookNow = () => {
    dispatch(addBooking(room));
  };

  const handleAddRoom = () => {
    dispatch(addBooking(room));
    router.push('/checkout')
  };

  const handleDecrementRoom = () => {
    if (quantity > 1) {
      dispatch(
        updateBookingQuantity({
          Package_Id: room.Package_Id,
          quantity: quantity - 1,
        })
      );
    } else if (quantity === 1) {
      dispatch(removeBooking(room.Package_Id));
    }
  };

  console.log(quantity);
  return (
    <div className={`${className} ${styles.roomCard}`}>
      <div className={`${tourWrapperClass} ${styles.roomCardInner}`}>
        <div className={styles.imageContainer}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={3000}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <CustomArrow onClick={onClickHandler} direction="prev" />
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <CustomArrow onClick={onClickHandler} direction="next" />
              )
            }
          >
            {room?.RoomImages && room.RoomImages.length > 0 ? (
              room.RoomImages.map((img: any, index: any) => (
                <div key={index} className={styles.carouselImageWrapper}>
                  <Image
                    src={img.image}
                    layout="fill"
                    objectFit="cover"
                    alt={`${room.Room_Name} - Image ${index + 1}`}
                  />
                </div>
              ))
            ) : (
              <div className={styles.carouselImageWrapper}>
                <Image
                  src="/assets/images/tour/tour-1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt={room.Room_Name}
                />
              </div>
            )}
          </Carousel>
          {discount > 0 && (
            <div className={styles.discountBadge}>{discount}% OFF</div>
          )}
        </div>
        <div className={styles.contentContainer}>
          <h3 className={styles.roomTitle}>
            <Link href={`/room-details/${room.Package_Id}`}>
              {room.Room_Name}
            </Link>
          </h3>
          <div className={styles.roomDetails}>
            <div className={styles.detailItem}>
              <Users size={16} />
              <span>{maxGuests} guests</span>
            </div>
            <div className={styles.detailItem}>
              <Moon size={16} />
              <span>
                Min {minNights} night{minNights > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className={styles.amenities}>
            {amenities.slice(0, 3).map((amenity: any, index: any) => (
              <span key={index} className={styles.amenity}>
                {index === 0 && <Coffee size={14} />}
                {index === 1 && <Wifi size={14} />}
                {index === 2 && <Star size={14} />}
                {amenity}
              </span>
            ))}
          </div>
          <div className={styles.priceSection}>
            <span className={styles.priceLabel}>Best Price Guaranteed</span>
            {room.room_rates_info.avg_per_night_after_discount > 0 && (
              <span className={styles.actualPrice}>
                {room.currency_sign || "$"}
                {room.room_rates_info.avg_per_night_after_discount.toFixed(2)}
                <span className={styles.perNight}>/night</span>
              </span>
            )}
          </div>
          {quantity > 0 ? (
            <>
              <button
                className={styles.quantityButton}
                onClick={handleDecrementRoom}
              >
                <Minus size={16} />
              </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
              <button className={styles.quantityButton} onClick={handleAddRoom}>
                <Plus size={16} />
              </button>
            </>
          ) : (
            <button className={styles.bookNowButton} onClick={handleAddRoom}>
              Book Now
              <ChevronRight size={18} />
            </button>
          )}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default RoomSingleCard2;
