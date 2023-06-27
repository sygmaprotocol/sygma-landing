
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


export type FormPageProps = {
  hsFormId: string;
  hsPortalId: string;
  targetName: string;
  title: string;
  desc: string;
};

export default function FormPageTemplate({
  hsFormId,
  hsPortalId,
  targetName,
  title, desc,

}: FormPageProps) {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: hsPortalId,
    formId: hsFormId,
    target: targetName,
  });

  console.log(error);
  return (
    <div className="relative isolate bg-gray-200 py-8 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-b-4 border-warm-white lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-black">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
             {desc}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-900">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Offices</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-700"
                    aria-hidden="true"
                  />
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
            <div id={targetName.substring(1)}></div>
          </div>
        </form>
      </div>
    </div>
  );
}
