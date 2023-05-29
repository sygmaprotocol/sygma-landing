import ExternalButton from "@/components/Button/ExternalButton";
import InternalButton from "@/components/Button/InternalButton";
import Navbar from "@/components/Navbar";

export default function ConsultingHero() {
  return (
    <div className="bg-black">
      <Navbar />
      {/* Hero Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Get your foundation right with our setup and support services.
            </h1>
            <p className="mt-6 text-xl leading-7 text-gray-300">
              Sygma's engineering team is available for hire to ensure your
              cross-chain implementation is sound and efficient.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <InternalButton type="primary">
                Reach out to the team
              </InternalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
