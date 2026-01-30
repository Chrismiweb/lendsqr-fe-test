const KEY = "lendsqr:selectedUser";

export function saveSelectedUser(user: unknown) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getSelectedUser<T>() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearSelectedUser() {
  localStorage.removeItem(KEY);
}
