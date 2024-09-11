import { StaticImageData } from "next/image";
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  niceSelectData: string | number;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string | number>>;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
  toggleSideMenu: () => void;
  handleInfoSidebar: () => void;
  setIsOpenInfoSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenInfoSidebar: boolean;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterRange: number[];
  setFilterRange: React.Dispatch<React.SetStateAction<number[]>>;
  setModalData: any;
  modalData: any;
}

export interface IhomeDemoPageDataType {
  id: number;
  img: StaticImageData;
  title: string;
  route: string;
  timeDelay: string;
  blurStyle: string;
}

export interface IhomeInnerPageDataType {
  id: number;
  img: StaticImageData;
  title: string;
  route: string;
}

export interface IhomeTopFeaturesDataType {
  id: number;
  img: StaticImageData;
  featureTitle: string;
  description: string;
  featureTag: string;
  timeDelay: string;
  hoverColor: string;
}

export interface IhomeReviewDataType {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  info: string;
}

export interface IActivityDataType {
  id: number;
  img: StaticImageData;
  title: string;
  count?: number;
  rating?: string;
  delay?: string;
}

export interface ITourDataType {
  id: number;
  img: StaticImageData;
  tourLocation: string;
  tourTitle: string;
  tourRating?: string;
  tourRatingCount?: number;
  tourPrice?: number;
  days?: string;
  currentPrice?: string;
  oldPrice?: string;
  discount?: string;
  status?: string;
  fromPrice?: string;
  tourImage?: StaticImageData[];
  tourDuration: string;
  startDate?: string;
  endDate?: string;
  adult?: number;
  infant?: number;
  infantAge?: string;
  quantity?: number;
}

export interface IOfferDataType {
  id: number;
  img: StaticImageData;
  offerTitle: string;
  offerTitleTwo: string;
  offerSubTitle: string;
  desctiption: string;
}

export interface ITripDataType {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
  tripCount: number;
  tripLocation: string;
}

export interface ICounterDataType {
  id: number;
  icon?: string;
  counterNumber: number;
  counterTitle: string;
  description: string;
}
export interface IChooseDataType {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
}
export interface ITestimonialDataType {
  id: number;
  avatarImg: StaticImageData;
  avatarTitle: string;
  info: string;
  description: string;
  rating?: number;
}

export interface IBlogDataType {
  id: number;
  img: StaticImageData;
  blogTag?: string;
  author: string;
  calender: string;
  detail: string;
  description?: string;
}

export interface ITravelDataType {
  id: number;
  travelIcon: string;
  travelTitle: string;
}

export interface IChooseUsDataType {
  id: number;
  choseIcon: string;
  chooseTitle: string;
  chooseDesc: string;
  delay: string;
}
export interface IDestinationDataType {
  id: number;
  img: StaticImageData;
  destination: string;
  tourCount?: number;
  title?: string;
  delay?: string;
}

export interface TNiceSelectData {
  id: number;
  option: string;
}

export interface IHomeTwoSliderData {
  id: number;
  bgImg: StaticImageData;
  tagOne: string;
  tagTwo: string;
  tagThree: string;
  description: string;
}

export interface ITeamDataType {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
}

export interface IDayTourDataType {
  id: number;
  img: StaticImageData;
  tourTitle: string;
  tourLocation: string;
  tourTime: number;
  description: string;
}

export interface IInstagramData {
  id: number;
  img: StaticImageData;
}

export interface IBannerData {
  id: number;
  img: StaticImageData;
  subTitle: string;
  title: string;
  description: string;
  warningText: string;
}

export interface PopularActivity {
  id: string;
  title: string;
  icon: string;
  image: StaticImageData;
  linkTitle: string;
  description: string;
  clients: StaticImageData[];
  clientCount: string;
}
export interface IClientReviewData {
  id: number;
  img: StaticImageData;
  name: string;
  date: string;
  description: string;
}

export interface IContactData {
  id: number;
  title: string;
  subTitleOne: string;
  subTitleTwo: string;
}

export interface IBlogDataTypedemo {
  id: number;
  img: StaticImageData;
  smallImg: StaticImageData;
  largeImg: StaticImageData;
  isModal?: boolean;
  date: number;
  month: string;
  author: string;
  comment: number;
  blogTitle: string;
  details: string;
}

// pricing data
interface PricingItem {
  person: number;
  duration: string;
  dinner: string;
  lunch: string;
  travelSpot: number;
}

export interface IPricingPlan {
  id: number;
  class?: string;
  img: StaticImageData;
  plan: string;
  price: number;
  pricingContent: PricingItem;
}

export interface IFaqInterface {
  id: string;
  question: string;
  answer: string;
}

export interface ProductsType {
  id: number;
  title: string;
  rating?: number;
  price: number;
  image: StaticImageData;
  imageTwo?: StaticImageData;
  quantity: number;
  label?: string;
  discount?: number;
  labelColor?: string;
  totalCart?: number;
  shiping?: number;
}
// menu data type
// menu-data type
export interface MenuType {
  id: number;
  hasDropdown?: boolean;
  megaMenu?: boolean;
  lastDropdown?: boolean;
  active?: boolean;
  children?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  previewImg?: boolean;
  pageLayout?: boolean;
  submenus?: any[];
  pages?: boolean;
}

//dashboard card data
export interface IDashCardDataType {
  id: number;
  subTitle: string;
  price: number;
  priceState: string;
}

//dashboard recent activity data
export interface IDashRecentActivityType {
  id: number;
  img: StaticImageData;
  day: string;
  month: string;
  title: string;
  location: string;
  adult: number;
  infant?: number;
  price: number;
  tripId: string;
  tripDate: string;
}

// files

export interface File {
  src: string;
  name: string;
  size: string;
}

export interface idType {
  id: string | number;
}
