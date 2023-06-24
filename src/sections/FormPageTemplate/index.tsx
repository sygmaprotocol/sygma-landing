
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
export type ContactFormProps = {
  hsFormId: string;
  hsPortalId: string;
  targetName: string;
};

export default function FormPageTemplate({ hsFormId, hsPortalId, targetName }: ContactFormProps) {
  
  const {loaded, error, formCreated} = useHubspotForm({
    portalId: hsPortalId,
    formId: hsFormId,
    target: targetName,
  })

  console.log(error);
  return (
    <div className="relative isolate bg-gray-200 py-8 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-warm-white/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#fe6702] to-[#cdb38b] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black">Sygma Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
             Reach out for integration support and customizing cross-chain messaging into your exsting dapp or protocol.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-900">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-700" aria-hidden="true" />
                </dt>
                <dd>
                  Based in the following timezones:
                  <br />
                  Berlin (GMT+3)
                  <br />
                  Toronto (EST)
                </dd>
              </div>
             
            </dl>
          </div>
        </div>

        <form className="bg-gray-200 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
             <div id={targetName.substring(1)} ></div>
            </div>
        </form>
      </div>
    </div>
  )
}
