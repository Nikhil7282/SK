import ServiceCard from "../components/ServiceCard";
import { useGlobal } from "../context/GlobalContext";
import { serviceData } from "../libs/data";

const Services = () => {
  const global = useGlobal();
  return (
    <section
      id="features"
      className="w-full h-auto py-20 border-b-[1px] bg-zinc-900 px-5"
      ref={global?.serviceRef}
    >
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide text-zinc-300">
          What We Provide
        </h3>
        <h1 className="text-5xl text-gray-300 font-bold capitalize ">
          Services
        </h1>
      </div>
      <div
        className="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-6 
            xl:gap-20 px-5 py-5"
      >
        {serviceData.map((service) => {
          return (
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
