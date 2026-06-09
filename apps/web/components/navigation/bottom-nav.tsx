const items = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Add Coin", href: "/create" },
  { label: "Notifications", href: "/notifications" },
  { label: "Profile", href: "/profile" }
];

export function BottomNav() {
  return (
    <nav className="mt-6 grid grid-cols-5 gap-2 rounded-3xl border border-white/10 bg-white/5 p-2 text-center text-[11px] text-zinc-300 backdrop-blur">
      {items.map((item) => (
        <a key={item.label} href={item.href} className="rounded-2xl px-2 py-3 hover:bg-white/10">
          {item.label}
        </a>
      ))}
    </nav>
  );
}