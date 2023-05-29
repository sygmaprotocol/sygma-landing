import {
  BugAntIcon,
  CodeBracketIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Contact Engineering",
    description:
      "Hire the Sygma team to complete your cross-chain integration.",
    icon: CodeBracketIcon,
  },
  {
    name: "General Inquiry/Partnerships",
    description: "Find out how your team can partner with Sygma.",
    icon: HandRaisedIcon,
  },
  {
    name: "Report a bug",
    description: "Give feedback or ask a question in our Discord",
    icon: BugAntIcon,
  },
];

export default function ContactLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-[#0f0f0f] py-12 sm:py-32">
      <img
        src="c1.png"
        alt=""
        className="saturation-0 absolute inset-0 -z-10 h-[50%] w-full object-cover object-right bg-blend-multiply brightness-[30%] md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact us
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-300 lg:max-w-lg">
            Give feedback, ask questions or learn more about how Sygma can work
            with your team.
          </p>
        </div>
        <div className="mt-25 mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-primary-100"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
