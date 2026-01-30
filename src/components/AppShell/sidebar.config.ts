import {
  MdDashboard,
  MdPeople,
  MdWork,
  MdAccountBalance,
  MdSettings,
  MdOutlineSavings,
  MdOutlineReport,
} from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import {
  FaMoneyBillWave,
  FaUserCheck,
  FaUserTimes,
  FaClipboardList,
} from "react-icons/fa";

import { LuSlidersHorizontal } from "react-icons/lu";
import type { IconType } from "react-icons";
import { FaHouseChimney } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { BsPhoneFlip } from "react-icons/bs";
import { GiCircularSawblade } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";
// import { FaClipboardList } from "react-icons/fa";
import { HiPercentBadge } from "react-icons/hi2";

export type SidebarItem = {
  label: string;
  path?: string;
  icon: IconType;
};

export type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};

export const sidebarConfig: SidebarSection[] = [
  {
    items: [
      {
        label: "Switch Organization",
        icon: IoBriefcase,
      },
      {
        label: "Dashboard",
        icon: FaHouseChimney,
        path: "/",
      },
    ],
  },
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", icon: MdPeople, path: "/users" },
      { label: "Guarantors", icon: FaUsers },
      { label: "Loans", icon: FaSackDollar },
      { label: "Decision Models", icon: FaRegHandshake },
      { label: "Savings", icon: FaPiggyBank },
      { label: "Loan Requests", icon: FaHandHoldingUsd },
      { label: "Whitelist", icon: FaUserCheck },
      { label: "Karma", icon: FaUserTimes },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization", icon: IoBriefcase },
      { label: "Loan Products", icon: FaHandHoldingUsd },
      { label: "Savings Products", icon: BsBank },
      { label: "Fees and Charges", icon: FaCoins },
      { label: "Transactions", icon: BsPhoneFlip },
      { label: "Services", icon: GiCircularSawblade },
      { label: "Service Account", icon: MdAccountBalance },
      { label: "Settlements", icon: FaMoneyBillWave },
      { label: "Reports", icon: FaChartBar },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences", icon: LuSlidersHorizontal },
      { label: "Fees and Pricing", icon: HiPercentBadge },
      { label: "Audit Logs", icon: FaClipboardList },
    ],
  },
];
