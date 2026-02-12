export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A passionate team building scalable digital systems,
            modern applications, and impactful experiences.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="relative group bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-semibold">
              Our Mission
            </h3>
            <p className="mt-4 opacity-90 leading-relaxed">
              Empower businesses with innovative technology and scalable
              digital architecture that drives sustainable growth.
            </p>
          </div>

          <div className="relative group bg-gradient-to-br from-purple-500 to-pink-500 text-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-2xl font-semibold">
              Innovation
            </h3>
            <p className="mt-4 opacity-90 leading-relaxed">
              We embrace modern frameworks, cloud-native systems, and
              evolving technologies to stay ahead of the curve.
            </p>
          </div>

          <div className="relative group bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 sm:col-span-2 lg:col-span-1">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl font-semibold">
              Our Values
            </h3>
            <ul className="mt-4 space-y-2 opacity-90">
              <li>✔ Excellence</li>
              <li>✔ Transparency</li>
              <li>✔ Client-First Approach</li>
              <li>✔ Continuous Growth</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
