import { services } from "../../data-services/serviceData";
import SectionTitle from "../common/SectionTitle";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Our Services" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6">
                <button className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
