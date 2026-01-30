type User = {
  id: number;
  orgName: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  profile: {
    firstName: string;
    lastName: string;
    gender: string;
    bvn: number;
  };
  account: {
    accountNumber: number;
    bankName: string;
    balance: number;
  };
};



import "./UserDetails.scss";
import { useNavigate } from "react-router-dom";
import DetailsBlock from "./DetailsBlock";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const UserDetails = () => {
  const navigate = useNavigate();
const user = JSON.parse(
  localStorage.getItem("lendsqr:selectedUser") || "{}"
) as Partial<User>;

  return (
    <section className="user-details">
      {/* Back */}
      <button className="back-btn" onClick={() => navigate("/users")}>
        <BsArrowLeft />
        <span>Back to Users</span>
      </button>

      {/* Header */}
      <div className="page-header">
        <h2>User Details</h2>

        <div className="actions">
          <button className="danger">Blacklist User</button>
          <button className="primary">Activate User</button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="user-summary">
        <div className="user-summary_top">

        <div className="profile">
          <div className="avatar"><LuUserRound/></div>

          {/* <div className="info">
            <h3>{user?.username || "—"}</h3>
            <p>{user?.id || "—"}</p>
          </div> */}
          <div className="info">
                <h3>
                    {user?.profile
                    ? `${user.profile.firstName} ${user.profile.lastName}`
                    : "—"}
                </h3>
                <p>{user?.id ?? "—"}</p>
            </div>
        </div>

        <div className="divider" />

        <div className="tier">
          <p className="tier_user">User’s Tier</p>
          <div className="stars">
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
          </div>
        </div>

        <div className="divider" />

        <div className="balance">
            <p className="balance_No">₦{user?.account?.balance?.toLocaleString() ?? "0.00"}</p>
            <p className="bank_name">
                {user?.account?.accountNumber ?? "—"}/
                {user?.account?.bankName ?? "—"}
            </p>
        </div>
        </div>

        <div className="tabs">
            {[
            "General Details",
            "Documents",
            "Bank Details",
            "Loans",
            "Savings",
            "App and System",
            ].map((tab, i) => (
            <button
                key={tab}
                className={i === 0 ? "active" : ""}
            >
                {tab}
            </button>
            ))}
        </div>
      </div>

      {/* Tabs */}

      {/* Details Sections */}
    <div className="details-blocks-container">
      <DetailsBlock
        title="Personal Information"
        items={[
            [
            "Full Name",
            user?.profile
                ? `${user.profile.firstName} ${user.profile.lastName}`
                : "—",
            ],
            ["Phone Number", user?.phoneNumber ?? "—"],
            ["Email Address", user?.email ?? "—"],
            ["BVN", user?.profile?.bvn?.toString() ?? ""],
            ["Gender", user?.profile?.gender ?? "Male"],
            ["Marital Status", "Single"],
            ["Children", "2"],
            ["Type of Residence", "Lagos Apartment"],
        ]}
        />

        <DetailsBlock
            title="Education and Employment"
            items={[
                ["Level of Education", "B.Sc"],
                ["Employment Status", " Employed"],
                ["Sector of Employment", user?.orgName ?? ""],
                ["Duration of Employment", "2 Years"],
                ["Office Email", user?.email ?? ""],
                [
                "Monthly Income",
                `₦${user?.account?.balance?.toLocaleString() ?? "—"}`,
                ],
                ["Loan Repayment", "₦40,000"],
            ]}
            />
            <DetailsBlock
            title="Socials"
            items={[
                ["Twitter", "@simisola"],
                ["Facebook", "@simisola"],
                ["Instagram", "@simisola"],
            ]}
            />
            <DetailsBlock
            title="Guarantor"
            items={[
                ["Full Name", "Adeyemi Joshua"],
                ["Phone Number", "08023456789"],
                ["Email Address", "adeyemi.joshua@example.com"],
                ["Relationship", "Brother"],
            ]}
            />
    </div>


    </section>
  );
};

export default UserDetails;
