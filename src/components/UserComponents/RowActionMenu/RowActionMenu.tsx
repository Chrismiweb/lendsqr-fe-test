import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FaUserSlash, FaUserCheck } from "react-icons/fa";
import "./RowActionMenu.scss";

type Props = {
  user: any;
  onClose: () => void;
};

const RowActionMenu = ({ user, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const handleViewDetails = () => {
    localStorage.setItem("lendsqr:selectedUser", JSON.stringify(user));
    navigate(`/users/${user.username}`);
  };

  return (
    <div className="row-action-menu" ref={ref}>
      <button onClick={handleViewDetails}>
        <FiEye />
        <span>View Details</span>
      </button>

      <button>
        <FaUserSlash />
        <span>Blacklist User</span>
      </button>

      <button>
        <FaUserCheck />
        <span>Activate User</span>
      </button>
    </div>
  );
};

export default RowActionMenu;
