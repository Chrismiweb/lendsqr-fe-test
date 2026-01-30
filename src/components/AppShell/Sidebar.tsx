import { NavLink } from "react-router-dom";
import { sidebarConfig } from "./sidebar.config";
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Mobile close button */}
    <div className="sidebar__header">
        <img
            src="/images/logo.svg"
            alt="Lendsqr"
            className="sidebar__logo"
        />

        <button
            className="sidebar__close"
            onClick={onClose}
            aria-label="Close sidebar"
        >
            <IoClose />
        </button>
    </div>

      <nav>
        {sidebarConfig.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <p className="section">{section.title}</p>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;

              return item.path ? (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `link ${isActive ? "active" : ""}`
                  }
                >
                  <Icon />
                  <span>{item.label}</span>
                </NavLink>
              ) : (
                <div className="link" key={item.label}>
                  <Icon />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
