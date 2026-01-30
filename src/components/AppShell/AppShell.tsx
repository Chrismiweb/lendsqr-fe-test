import "./AppShell.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const AppShell = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app">
      {/* Topbar */}
      <header className="topbar">
        {/* ✅ MENU BUTTON (mobile only via CSS) */}
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        <div className="topbar__left">
          <img src="/images/logo.svg" alt="Lendsqr" className="logo" />
        </div>

        <div className="topbar__center">
          <div className="search">
            <input placeholder="Search for anything" />
            <button>
              {/* <img src="/icons/search.svg" alt="search" /> */}
              <IoIosSearch/>
            </button>
          </div>
        </div>

        <div className="topbar__right">
          <a className="docs">Docs</a>
          <FaRegBell className="icon" />
          <div className="profile">
            <img src="/images/avatar.svg" />
            <span>Adedeji</span>
            <IoMdArrowDropdown/>
          </div>
        </div>
      </header>

      <div className="body">
          {/* {sidebarOpen && (
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>
          )} */}

          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="content">
            <Outlet />
          </main>
        </div>
    </div>
  );
};

export default AppShell;
