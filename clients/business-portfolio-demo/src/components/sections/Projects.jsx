import React from "react";

export default function Projects() {
  const services = [
    {
      id: 1,
      title: "Database Support",
      description:
        "Design, optimization, and management of SQL and NoSQL databases",
      icon: "🗄️",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description:
        "Migration, deployment, and management on AWS, Azure, or GCP",
      icon: "☁️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Full-stack development with modern frameworks and technologies",
      icon: "🌐",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "System Architecture",
      description:
        "Scalable and secure system design for enterprise solutions",
      icon: "🏗️",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "API Development",
      description:
        "RESTful and GraphQL API design and implementation",
      icon: "🔌",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 6,
      title: "DevOps & CI/CD",
      description:
        "Automation, deployment pipelines, and infrastructure management",
      icon: "⚙️",
      gradient: "from-fuchsia-500 to-purple-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our IT Solutions & Services
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Scalable architecture, cloud-native systems, and modern
            digital engineering for future-ready businesses.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center text-3xl text-white rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition duration-500`}
              >
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition duration-500">
                {service.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8">
                <button className="font-semibold text-blue-600 hover:text-purple-600 transition duration-300">
                  Learn More →
                </button>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
