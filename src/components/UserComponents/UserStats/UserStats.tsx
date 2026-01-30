import "./UserStats.scss";


type StatItem = {
  label: string;
  value: string;
  icon: string;
  iconBg: string;
};

const stats: StatItem[] = [
  {
    label: "USERS",
    value: "50",
    icon: "/images/users.svg",
    iconBg: "#ecaef5",
  },
  {
    label: "ACTIVE USERS",
    value: "39",
    icon: "/images/activeUser.svg",
    iconBg: "#ddd2f9",
  },
  {
    label: "USERS WITH LOANS",
    value: "28",
    icon: "/images/userWithLoan.svg",
    iconBg: "#ffe1dc",
  },
  {
    label: "USERS WITH SAVINGS",
    value: "32",
    icon: "/images/userwithsavings.svg",
    iconBg: "#fddee6",
  },
];

const UserStats = () => {
  return (
    <section className="user-stats">
      {stats.map(({ label, value, icon, iconBg }) => (
        <div className="user-stats__card" key={label}>
          <div
            className="user-stats__icon"
            style={{ backgroundColor: iconBg }}
          >
            <img src={icon} alt={label} />
          </div>

          <p className="user-stats__label">{label}</p>
          <p className="user-stats__value">{value}</p>
        </div>
      ))}
    </section>
  );
};

export default UserStats;   
