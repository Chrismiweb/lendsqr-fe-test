import "./StatusPill.scss";

type Status = "Active" | "Inactive" | "Pending" | "Blacklisted";

const StatusPill = ({ status }: { status: Status }) => {
  return <span className={`status ${status.toLowerCase()}`}>{status}</span>;
};

export default StatusPill;
