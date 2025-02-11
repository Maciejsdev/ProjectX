type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/channel", label: "channel" },
  { href: "/dashboard", label: "dashboard" },
  { href: "/settings", label: "settings" },
  { href: "/subscriptions", label: "subscriptions" },
  { href: "/admin/dashboard", label: "AdminBoard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/admin-dashboard", label: "AdminBoard" },
];
