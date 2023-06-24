import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

export type ContactFormProps = {
  hsFormId: string;
  hsPortalId: string;
  targetName: string;
};

export default function BuildersForm({
  hsFormId,
  hsPortalId,
  targetName,
}: ContactFormProps) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: hsPortalId,
    formId: hsFormId,
    target: targetName,
  });
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-1">
        <div className="relative ">
          <div className="mx-auto max-w-2xl text-center my-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
      </div>
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-warm-white ring-1 ring-gray-900/10 lg:w-full">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        id="builders-program-hs-form"
        className="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      ></div>
    </div>
  );
}
