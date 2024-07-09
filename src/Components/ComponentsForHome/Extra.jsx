const icons = [
  {
    title: "amazon",
    icon: "/amazon-a-logo-icon.svg",
  },
  {
    title: "stripe",
    icon: "/stripe-icon.svg",
  },
  {
    title: "cirrus",
    icon: "/cirrus-icon.svg",
  },
  {
    title: "dropbox",
    icon: "/dropbox-icon.svg",
  },
  {
    title: "intel",
    icon: "/intel-icon.svg",
  },
  {
    title: "blue",
    icon: "/blue-icon.svg",
  },
  {
    title: "visa",
    icon: "/visa-icon.svg",
  },
  {
    title: "windows",
    icon: "/windows-icon.svg",
  },
];

const Extra = () => {
  return (
    <section className="mb-9">
      <div className="p-6">
        <div className="container md:p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Partners</h2>
          <p className="my-5">
            At Lagoon, we collaborate with top industry partners to offer
            exclusive deals and exceptional services. Together, we ensure your
            travel experience is seamless and unforgettable. Explore the trusted
            brands we work with to bring you the best in travel.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4">
          {icons.map((i) => (
            <div
              key={i.title}
              className="flex justify-center p-6 align-middle border bg-slate-50"
            >
              <img src={i.icon} alt={i.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extra;
