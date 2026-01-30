import "./FilterPanel.scss";
import { useState } from "react";

type Filters = {
  orgName?: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  status?: string;
};

type Props = {
  onApply: (filters: Filters) => void;
  onClose: () => void;
};

const FilterPanel = ({ onApply, onClose }: Props) => {
  const [filters, setFilters] = useState<Filters>({});

  const handleChange = (
    field: keyof Filters,
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="filter-panel">
      {/* Organization */}
      <label>
        Organization
        <input
          placeholder="Select"
          onChange={(e) =>
            handleChange("orgName", e.target.value)
          }
        />
      </label>

      <label>
        Username
        <input
          placeholder="User"
          onChange={(e) =>
            handleChange("username", e.target.value)
          }
        />
      </label>

      <label>
        Email
        <input
          placeholder="Email"
          onChange={(e) =>
            handleChange("email", e.target.value)
          }
        />
      </label>

      <label>
        Phone Number
        <input
          placeholder="Phone Number"
          onChange={(e) =>
            handleChange("phoneNumber", e.target.value)
          }
        />
      </label>

      <label>
        Status
        <select
          onChange={(e) =>
            handleChange("status", e.target.value)
          }
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </label>

      <div className="actions">
        <button
          className="reset"
          onClick={() => setFilters({})}
        >
          Reset
        </button>
        <button
          className="apply"
          onClick={() => {
            onApply(filters);
            onClose();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
