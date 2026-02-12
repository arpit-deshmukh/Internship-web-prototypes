import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              Trusted by 50+ Companies
            </span>

            <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              We Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Empowering businesses with scalable web applications,
              cloud-native architecture, and innovative digital systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button text="Get Started" />
              <button className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300 font-medium">
                View Projects
              </button>
            </div>

            <div className="mt-14 flex gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">120+</h3>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">8+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg h-96 bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl flex items-center justify-center hover:scale-105 transition duration-500">
              <span className="text-gray-700 font-semibold text-lg">
                Illustration / Dashboard Preview
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
