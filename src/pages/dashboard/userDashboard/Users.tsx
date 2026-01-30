import UsersTable from "../../../components/UserComponents/UsersTable/UsersTable";
import UserStats from "../../../components/UserComponents/UserStats/UserStats";
import "./Users.scss";

const Users = () => {
  return (
    <div className="users-page">
      <h2 className="users-page__title">Users</h2>

      {/* SECTION 1: STATS */}
      <UserStats />

      {/* SECTION 2: TABLE */}
      <UsersTable />
    </div>
  );
};

export default Users;
