import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "CEO, TechNova",
      message:
        "Outstanding service and exceptional attention to detail. The team delivered beyond expectations.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Founder, ScaleUp",
      message:
        "Professional, reliable, and innovative. Our digital presence improved drastically.",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "CTO, CloudSync",
      message:
        "Highly recommended for scalable solutions and modern system architecture.",
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <div className="mt-12 bg-white p-10 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300">
          <p className="text-lg text-gray-600 leading-relaxed">
            "{testimonials[index].message}"
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900">
              {testimonials[index].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[index].role}
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={prevSlide}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Previous
          </button>

          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
