// import React, { useState } from 'react';
// import { MapPin, Star, Calendar } from 'lucide-react';
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import styles from './HotelDetail.module.css';

// const HotelDetailHeader = ({ hotel }:any) => {
//     console.log(hotel);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

//   return (
//     <div className={styles.hotelHeader}>
//       <div className={styles.hotelInfo}>
//         <div>
//           <h1 className={styles.hotelName}>{hotel.Room_Name}</h1>
//           <div className={styles.hotelLocation}>
//             <MapPin className={styles.icon} />
//             <p>{hotel.localfolder}</p>
//             {/* <p>{"Gurugram"}</p> */}
//           </div>
//         </div>
//         <div className={styles.hotelRating}>
//           <Star className={styles.icon} />
//           <span>{hotel.rating}</span>
//         </div>
//       </div>
//       <div className={styles.hotelBooking}>
//         <div className={styles.hotelPrice}>
//           <p className={styles.price}>₹ {hotel.price}</p>
//           <p className={styles.perNight}>/ night</p>
//           <p className={styles.taxes}>Incl. taxes</p>
//         </div>
//         <div className={styles.datePickerWrapper}>
//           <Calendar className={styles.calendarIcon} />
//           <ReactDatePicker
//             selectsRange={true}
//             startDate={startDate}
//             endDate={endDate}
//             onChange={(update:any) => {
//               setDateRange(update);
//             }}
//             isClearable={true}
//             placeholderText="Select Check-in & Check-out"
//             className={styles.datePicker}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const HotelDetailTabs = () => {
//   const tabs = ['Rooms', 'Amenities', 'Reviews', 'Location', 'Highlights', 'FAQs'];
//   const [activeTab, setActiveTab] = useState('Rooms');

//   return (
//     <div className={styles.hotelTabs}>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
//           onClick={() => setActiveTab(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// const HotelDetailNew = (roomData:any) => {
//     console.log(roomData.rooms[1]);

//   return (
//     <div className={styles.hotelDetail}>
//       <HotelDetailHeader hotel={roomData.rooms[1]} />
//       <HotelDetailTabs />
//       {/* <div className={styles.hotelContent}>
//         <p>Tab content goes here.</p>
//       </div> */}
//     </div>
//   );
// };

// export default HotelDetailNew;

import React, { useState } from "react";
import { MapPin, Star, Calendar, Users, Clock } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./HotelDetail.module.css";
import HotelOverviewArea from "../hotel-detail-component/HotelOverviewArea";

const HotelDetailHeader = ({ hotel }: any) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className={styles.hotelHeader}>
      <div className={styles.hotelInfo}>
        <div className={styles.hotelMainInfo}>
          <h1 className={styles.hotelName}>{hotel.Room_Name}</h1>
          <div className={styles.hotelLocation}>
            <MapPin className={styles.icon} />
            <p>{hotel.localfolder}</p>
          </div>
          {/* <div className={styles.hotelRating}>
            <Star className={styles.icon} />
            <span>4.5</span>
          </div> */}
        </div>
        <div className={styles.hotelDetails}>
          <div className={styles.detailItem}>
            <Users className={styles.icon} />
            <span>
              Max Occupancy: {hotel.Room_Max_adult} Adults,{" "}
              {hotel.Room_Max_child} Children
            </span>
          </div>
          <div className={styles.detailItem}>
            <Clock className={styles.icon} />
            <span>
              Check-in: {hotel.check_in_time}, Check-out: {hotel.check_out_time}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span>
              Size:{" "}
              {hotel.Room_Description.match(/Size: (.*?)<br>/)?.[1] ||
                "Not specified"}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.hotelBooking}>
        <div className={styles.hotelPrice}>
          {/* <p className={styles.price}>₹ {hotel.room_rates_info.totalprice_inclusive_all.toFixed(2)}/ night</p> */}
          <p className={styles.perNight}>
            ₹ {hotel.room_rates_info.totalprice_inclusive_all.toFixed(2)}/ night
          </p>
          <p className={styles.taxes}>Incl. taxes</p>
        </div>
        <div className={styles.datePickerWrapper}>
          <Calendar className={styles.calendarIcon} />
          <ReactDatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Select Check-in & Check-out"
            customInput={
              <input
                style={{
                  border: "none",
                  padding: "0.5rem",
                  width: "100%",
                  textAlign: "center",
                  
                }}
              />
            }
            calendarClassName={styles.customCalendar}
          />
        </div>
      </div>
    </div>
  );
};

const HotelDetailTabs = ({ activeTab, setActiveTab }: any) => {
  const tabs = [
    "Overview",
    "Amenities",
    "Reviews",
    "Location",
    "Highlights",
    "FAQs",
  ];

  return (
    <div className={styles.hotelTabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const HotelDetailNew = ({ rooms, selectedRoomType }: any) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const hotel = selectedRoomType;
  console.log(hotel);

  return (
    <div className={styles.hotelDetail}>
      <HotelDetailHeader hotel={hotel} />
      <HotelDetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Overview" && (
        <div className={styles.hotelContent}>
          <HotelOverviewArea hotelData={hotel} rooms={rooms} />
        </div>
      )}
    </div>
  );
};

export default HotelDetailNew;
