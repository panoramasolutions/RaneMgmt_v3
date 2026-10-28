import {
  Anchor,
  Building2,
  Factory,
  Landmark,
  Map,
  Route,
  Train,
  Waves,
} from "lucide-react";

export const BRAND = {
  name: "RMCPL",
  legal: "Rane Management Consultant Pvt. Ltd.",
  tagline: "Expert Land Surveyor & Acquisition Services",
  established: 1995,
  city: "Navi Mumbai",
  country: "India",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", megaMenu: true },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

// Published contact information from the current Rane website.
export const CONTACT = {
  phones: ["+91 9820536562", "+91 8104280569"],
  landline: "022 27795812",
  emails: ["rmcpl_ltd@yahoo.com", "ranemanagementconsultant@gmail.com"],
  hours: "09:00–18:00, Monday–Saturday",
};

export const OFFICES = [
  {
    label: "Registered Office",
    address: "Shubhangi Niwas, Row House No. C-17, Sector-4, Airoli, Navi Mumbai – 400708.",
    phone: "+91 9820536562",
    secondaryPhone: "022 27795812",
    email: "rmcpl_ltd@yahoo.com",
    secondaryEmail: "ranemanagementconsultant@gmail.com",
  },
  {
    label: "Bhayandar Branch Office",
    address: "Shop No. 07, Kamla Park Building, Phatak Road, Near Post Office, Bhayandar West.",
  },
  {
    label: "Bhayander Branch Office",
    address: "15, Ground Floor, Sahakar Jyot, Chhatrapati Shivaji Marg, Near Main Municipal Office, Bhayander (W).",
  },
  {
    label: "Virar Branch Office",
    address: "Meroo Housing Society Ltd., Flat No. 002, Wing-A, Phase 11, Manvel Pada Road, Virar (East), Dist. Palghar – 401303.",
  },
];

// Metrics published on Rane's current service pages.
export const STATS = [
  { valueText: "30+", label: "Years Since Establishment" },
  { valueText: "75,000 Ha.+", label: "Land Surveyed" },
  { valueText: "5,000 Kms+", label: "Road Survey" },
];

export const TRUST_SECTORS = [
  "Government & Semi-Government",
  "Rail Networks",
  "Road Infrastructure",
  "Municipal Corporations",
  "Urban & Town Planning",
  "Water & Sewer Networks",
  "Ports & Aviation",
  "Real Estate & Redevelopment",
];

// Client marks displayed on the source website, plus institutions named in its About page.
export const TRUST_CLIENTS = [
  { name: "DFCCIL", image: "https://ranemanagementconsultant.com/uploads/Our_client/DFC-Logo-Color-011.webp" },
  { name: "SUEZ", image: "https://ranemanagementconsultant.com/uploads/Our_client/Sues-01-01.png" },
  { name: "MMRDA", image: "https://ranemanagementconsultant.com/uploads/Our_client/MMRD-Logo-Color-011.webp" },
  { name: "Reliance", image: "https://ranemanagementconsultant.com/uploads/Our_client/Reliance_Color_Logo-011.png" },
  { name: "NHAI", image: "https://ranemanagementconsultant.com/uploads/Our_client/NHAI-ColorLogo-0111.webp" },
  { name: "RVNL", image: "https://ranemanagementconsultant.com/uploads/Our_client/RNVL-Color-Logo-011.webp" },
  { name: "MSRDC", image: "https://ranemanagementconsultant.com/uploads/Our_client/MSRDC-ColorLogo-011.webp" },
  { name: "CIDCO", image: "https://ranemanagementconsultant.com/uploads/Our_client/Cidco-Color-Logo-011.webp" },
];

export const TIMELINE = [
  {
    year: "1995",
    title: "Company Established",
    text: "Rane Management Consultant Pvt. Ltd. was established under the leadership of Mr. Manmohan Balkrishna Rane to provide precise land survey and land revenue data.",
  },
  {
    year: "2002",
    title: "Government City Surveys",
    text: "Government consulting began with City Survey projects for municipal corporations in Maharashtra; eight municipal City Survey projects were completed.",
  },
  {
    year: "2008",
    title: "DFCCIL Appointment",
    text: "The company was appointed Land Acquisition Consultant for the Dedicated Freight Corridor Corporation of India Limited.",
  },
  {
    year: "2012",
    title: "Public-Sector Expansion",
    text: "Surveying, land acquisition and revenue consulting expanded across organisations including MMRDA, CIDCO, MCGM and Central Railway.",
  },
  {
    year: "2016",
    title: "GIS & Application Development",
    text: "An IT cell for GIS solutions and application development was established, and Mr. Viraj Manmohan Rane joined as Joint Director.",
  },
  {
    year: "2019",
    title: "Samruddhi Mahamarg",
    text: "The company completed land acquisition work for the Samruddhi Mahamarg project, described by Rane as the fastest completion for an infrastructure project in India.",
  },
  {
    year: "2022",
    title: "Government Empanelments",
    text: "Empanelled by the Maharashtra State Town Planning Department for development plans and by MIDC as a land acquisition consultant for Konkan Division.",
  },
  {
    year: "2023",
    title: "Expanded Land Services",
    text: "Engineering surveying capabilities expanded alongside property listing and other digital land-service forums.",
  },
];

export const INDUSTRIES = [
  { title: "Rail Networks", icon: Train },
  { title: "Roads & Highways", icon: Route },
  { title: "Municipal Corporations", icon: Landmark },
  { title: "Urban Development", icon: Building2 },
  { title: "Water Supply", icon: Waves },
  { title: "Sewage & Storm Water", icon: Waves },
  { title: "Industrial Development", icon: Factory },
  { title: "Town Planning", icon: Map },
  { title: "Ports & Aviation", icon: Anchor },
  { title: "Real Estate & Redevelopment", icon: Building2 },
];

export const VALUES = [
  { title: "Open & Friendly", text: "A culture built around approachable, constructive working relationships." },
  { title: "Engaging", text: "Team members are encouraged to participate actively and contribute their expertise." },
  { title: "Equality", text: "People are treated fairly and given equal respect across the organisation." },
  { title: "Empathetic", text: "The company values understanding, support and consideration for others." },
];

export const LEADERSHIP = [
  {
    name: "Manmohan Balkrishna Rane",
    role: "Founder",
    bio: "Established Rane Management Consultant Pvt. Ltd. in 1995 with a focus on precise land survey and land revenue data.",
  },
  {
    name: "Viraj Manmohan Rane",
    role: "Joint Director",
    bio: "A qualified civil engineer, licensed surveyor, Government-approved and IBBI-registered land and building valuer who joined as Joint Director in 2016.",
  },
];
