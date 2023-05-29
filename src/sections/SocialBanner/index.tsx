const socials = [
  {
    name: "Discord",
    imageUrl: "/socials/Discord.png",
    url: "https://discord.gg/Qdf6GyNB5J",
  },
  {
    name: "Twitter",
    imageUrl: "/socials/Twitter.png",
    url: "https://twitter.com/buildwithsygma",
  },
  {
    name: "Github",
    imageUrl: "/socials/Github.png",
    url: "https://github.com/sygmaprotocol",
  },
  {
    name: "Linkedin",
    imageUrl: "/socials/Linkedin.png",
    url: "https://www.linkedin.com/company/buildwithsygma",
  },
  {
    name: "Medium",
    imageUrl: "/socials/Medium.png",
    url: "https://medium.com/@buildwithsygma",
  },
];

export default function SocialBanner() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join the open-source cross-chain community
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Sygma is a protocol built and supported by developers, researchers
            and designers from various ecosystems who are united in the common
            goal of achieving better safety and experience for all blockchain
            users.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="brightness-100 hover:brightness-75"
            >
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src={social.imageUrl}
                alt={social.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {social.name}
              </h3>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
