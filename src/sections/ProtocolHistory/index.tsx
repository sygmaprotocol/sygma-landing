const stats = [
  {
    label: "Sept 2022",
    value: "Kalos Audit",
    link: "https://docs.buildwithsygma.com/assets/files/[HAECHI%20AUDIT]%20Sygma%20Audit%20Report%20v1.1-de7e5ddc24ae14083880789f69f83640.pdf",
  },
  {
    label: "May 2023",
    value: "Least Authority Audit",
    link: "https://docs.buildwithsygma.com/assets/files/least-authority-17-05-2023-a4c57b963354b382b6bea3c94cd30fc1.pdf",
  },
];

export default function ProtocolHistory() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="#history">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-80 shadow-2xl sm:px-12 lg:max-w-xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 bottom-0 h-full w-full object-cover object-top brightness-105 contrast-125"
                src="/car.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Audited and working with the best engineering teams to bring
                blockchain interoperability to life.
              </h1>
              <div className="max-w-xl">
                <p className="mt-3 leading-6 text-gray-400">
                  Sygma is consulting{" "}
                  <a href="https://chainsafe.io" target="__blank">
                    {" "}
                    ChainSafe
                  </a>
                  , a leading blockchain R&D firm.
                </p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-6 sm:grid-cols-3">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-medium leading-6 text-primary-100">
                    {stat.label}
                  </dt>
                  <a
                    className="transition hover:brightness-75"
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <dd className="mt-2 text-xl font-semibold tracking-tight text-gray-200">
                      {stat.value}
                    </dd>
                  </a>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
