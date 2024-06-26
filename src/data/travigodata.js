import dashboard from "../assets/Images/dashboard.png";
import memoryimg from "../assets/Images/memory.png";

import brand1 from "../assets/Images/brand1.png";
import brand2 from "../assets/Images/brand2.png";
import brand3 from "../assets/Images/brand3.png";
import brand4 from "../assets/Images/brand4.png";
import brand5 from "../assets/Images/brand5.png";

import place1 from "../assets/Images/img1.webp";
import place2 from "../assets/Images/img2.webp";
import place3 from "../assets/Images/img3.webp";
import place4 from "../assets/Images/img4.webp";
import place5 from "../assets/Images/img5.jpg";
import place6 from "../assets/Images/img6.webp";
import place7 from "../assets/Images/img7.webp";
import place8 from "../assets/Images/img8.webp";
import place9 from "../assets/Images/img9.webp";
import place10 from "../assets/Images/img10.webp";

import standardicon from "../assets/Images/standardicon.png";
import preminumicon from "../assets/Images/preminum.png";
import checkbox from "../assets/Images/checkbox.svg";
import uncheckbox from "../assets/Images/uncheckbox.svg";

import facebook from '../assets/Images/facebook.svg';
import instagram from '../assets/Images/instagram.svg';
import twitter from '../assets/Images/twitter.svg';
import youtube from '../assets/Images/youtube.svg';

import banner from '../assets/Images/banner.webp';

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  "title": "Its a Gig World Out",
  "subtitle": "Then, Go Explore",
  "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};

export const memory = {
  "title": "Sweet Memories",
  "subtitle": "Come To Life Again",
  "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  "img": memoryimg,
  "experience": [
    { "number": "10+", "title": "Year Experience" },
    { "number": "400+", "title": "Year Collaboration" },
    { "number": "30k+", "title": "Happy Customer" },
  ],
};

export const placesAPI = [
  { "placeImg": place1, "location": "Lahore", "distance": "3.0 hour dirve" },
  { "placeImg": place2, "location": "Faisalabad", "distance": "2.5 hour dirve" },
  { "placeImg": place3, "location": "Multan", "distance": "4.7 hour drive" },
  { "placeImg": place4, "location": "Rawalpindi", "distance": "4 hour drive" },
  { "placeImg": place5, "location": "Islamabad", "distance": "4.9 hour drive" },
  { "placeImg": place6, "location": "Muree", "distance": "4.5 hour drive" },
  { "placeImg": place7, "location": "Nathia Gali", "distance": "5.5 hour drive" },
  { "placeImg": place8, "location": "Ayubia Gali", "distance": "5.1 hour drive" },
  { "placeImg": place9, "location": "Bhurban", "distance": "5.1 hour drive" },
  { "placeImg": place10, "location": "Gilgit", "distance": "5.1 hour drive" },
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becomming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "$60 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};

export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whislist Curated By Travigo.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "Contact Us"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why Travigo?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ],
  "sociallinks": [
    {"icon": facebook},{"icon": instagram},{"icon": twitter},{"icon": youtube},
  ]
};
