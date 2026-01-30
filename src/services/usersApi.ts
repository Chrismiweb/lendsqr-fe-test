export type User = {
  id: number;
  orgName: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
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

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("/users.json");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
