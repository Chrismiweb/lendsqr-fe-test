import { useEffect, useState, type SetStateAction } from "react";
import "./UsersTable.scss";
import StatusPill from "../StatusPill/StatusPill";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import RowActionMenu from "../RowActionMenu/RowActionMenu";
import { fetchUsers} from "../../../services/usersApi";
import { useNavigate } from "react-router-dom"; 
import type { User } from "../../../services/usersApi";
import FilterPanel from "./FilterPanel";


const headers = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];

// const rows = Array.from({ length: 9 }).map((_, i) => ({
//   org: ["Lendsqr", "Irorun", "Lendstar"][i % 3],
//   username: ["Adedeji", "Debby Ogana", "Grace Effiom", "Tosin Dokunmu"][i % 4],
//   email: "user@lendsqr.com",
//   phone: "08067809000",
//   date: "Apr 30, 2020 10:00 AM",
//   status: ["Inactive", "Pending", "Blacklisted", "Active"][i % 4] as any,
// }));

const UsersTable = () => {
    const [users, setUsers] = useState<User[]>([]); // NEW: users from mock API
    const [loading, setLoading] = useState(true); // NEW: loading state
    // const navigate = useNavigate(); // NEW: router navigation
    const [openRow, setOpenRow] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1); // NEW
    const [rowsPerPage, setRowsPerPage] = useState(10); // NEW
    const [openFilter, setOpenFilter] = useState<string | null>(null); // NEW
    const [allUsers, setAllUsers] = useState<User[]>([]); // NEW
    const [filtersApplied, setFiltersApplied] = useState(false); // NEW


    

useEffect(() => {
  fetchUsers()
    .then((data) => {
      setAllUsers(data); // NEW
      setUsers(data);
    })
    .finally(() => setLoading(false));
}, []);



    if (loading) {
    return <p className="loading">Loading users...</p>;
  }

    const totalUsers = users.length; // NEW
    const totalPages = Math.ceil(totalUsers / rowsPerPage); // NEW
    const startIndex = (currentPage - 1) * rowsPerPage; // NEW
    const endIndex = startIndex + rowsPerPage; // NEW
    const paginatedUsers = users.slice(startIndex, endIndex); // NEW

    const isEmpty = users.length === 0;

        const applyFilters = (filters: any) => {
        const filtered = allUsers.filter((user) => {
            return (
            (!filters.orgName ||
                user.orgName
                .toLowerCase()
                .includes(filters.orgName.toLowerCase())) &&
            (!filters.username ||
                user.username
                .toLowerCase()
                .includes(filters.username.toLowerCase())) &&
            (!filters.email ||
                user.email
                .toLowerCase()
                .includes(filters.email.toLowerCase())) &&
            (!filters.phoneNumber ||
                user.phoneNumber.includes(filters.phoneNumber)) &&
            (!filters.status ||
                user.status === filters.status)
            );
        });

        setUsers(filtered);
        setCurrentPage(1);
        setFiltersApplied(true); // NEW
        };

const resetTable = () => {
  setUsers(allUsers);
  setCurrentPage(1);
  setFiltersApplied(false);
  setOpenFilter(null);
};


  return (
    <section className="users-table">
      <div className="table-wrapper">
        {filtersApplied && (
        <div className="table-reset">
            <button onClick={resetTable}>
            Back to Users
            </button>
        </div>
        )}
        <table>
          <thead>
            <tr>
              {headers.map((head) => (
                <th key={head}>
                  <div className="th-content">
                    <span>{head}</span>
                    {/* <BsFilter className="filter-icon" /> */}
                    <BsFilter
                    className="filter-icon"
                    onClick={() =>
                        setOpenFilter(openFilter === head ? null : head)
                    }
                    />
                  </div>

                    {openFilter === head && (
                        <FilterPanel
                        onClose={() => setOpenFilter(null)}
                        onApply={(filters) => applyFilters(filters)}
                        />
                    )}

                </th>
              ))}
              <th />
            </tr>
          </thead>

<tbody>
  {isEmpty ? (
    <tr>
      <td colSpan={7}>
        <div className="empty-state">
          <p>No users found</p>
          <span>
            Try adjusting your filters or reset to view all users.
          </span>

            <button onClick={resetTable}>
            Back to Users
            </button>
        </div>
      </td>
    </tr>
  ) : (
    paginatedUsers.map((user) => (
      <tr key={user.id}>
        <td>{user.orgName}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.createdAt}</td>
        <td>
          <StatusPill status={user.status} />
        </td>
        <td className="actions">
          <button
            className="dots-btn"
            onClick={() =>
              setOpenRow(openRow === user.id ? null : user.id)
            }
          >
            <HiOutlineDotsVertical />
          </button>

          {openRow === user.id && (
            <RowActionMenu
              user={user}
              onClose={() => setOpenRow(null)}
            />
          )}
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination__left">
          <span>Showing</span>
          {/* <select>
            <option>100</option>
          </select> */}
          <select
                value={rowsPerPage}
                onChange={(e) => {
                    setRowsPerPage(Number(e.target.value)); // NEW
                    setCurrentPage(1); // reset to first page
                }}
                >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <span>out of {totalUsers}</span>

        </div>

        <div className="pagination__right">
            <button
            className="nav-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
            <FiChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
                (page) =>
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
            )
            .map((page, idx, arr) => (
                <span
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(page)}
                >
                {page}
                </span>
            ))}
            <button
            className="nav-btn"
            disabled={currentPage === totalPages}
            onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            >
            <FiChevronRight />
            </button>
        </div>
      </div>
    </section>
  );
};

export default UsersTable;
