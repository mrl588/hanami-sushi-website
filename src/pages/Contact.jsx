import fishIcon from "../assets/redfishtrans.png";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-4 py-10 pt-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <img
          src={fishIcon}
          alt="Hanami fish icon"
            className="h-32 w-auto md:h-40"
        />
        <h1 className="brand-title text-2xl uppercase tracking-[0.4em] text-black md:text-3xl">
          Contact
        </h1>
        <p className="mt-2 text-slate-700">
          Reservations recommended for dinner service.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-600">
            Location
          </p>
          <p className="mt-2 text-slate-700">123 Sakura St</p>
          <p className="text-slate-700">Seattle, WA 98101</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-600">
            Hours
          </p>
          <p className="mt-2 text-slate-700">Mon–Thu: 5pm–10pm</p>
          <p className="text-slate-700">Fri–Sun: 4pm–11pm</p>
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-600">
          Phone
        </p>
        <p className="mt-2 text-slate-700">(555) 123-4567</p>
      </div>
    </section>
  );
}
