import fishIcon from "../assets/redfishtrans.png";

const menuItems = [
  { name: "Omakase Set", price: "$68" },
  { name: "Salmon Nigiri", price: "$9" },
  { name: "Spicy Tuna Roll", price: "$12" },
  { name: "Yuzu Yellowtail", price: "$14" },
];

export default function Menu() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-4 py-10 pt-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src={fishIcon}
          alt="Hanami fish icon"
            className="h-32 w-auto md:h-40"
        />
        <h1 className="brand-title text-2xl uppercase tracking-[0.4em] text-black md:text-3xl">
          Menu
        </h1>
        <p className="mt-2 text-slate-700">
          Signature rolls, nigiri, and seasonal specials.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.name}</span>
              <span className="text-slate-600">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500">
        Ask your server about today&apos;s sashimi and chef&apos;s selection.
      </p>
    </section>
  );
}
