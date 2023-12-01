import heroImage from "./assets/image-header-desktop.jpg";

const App = () => {
  return (
    <div className="flex md:flex-row flex-col  md:max-w-[1100px] mx-auto md:mt-48 gap-x-12 bg-[#1C1938] md:rounded-xl overflow-hidden text-center md:text-left h-screen md:h-auto">
      <div className="flex md:w-[50%] w-full flex-col md:p-16 p-9 order-2 md:order-1">
        <h3 className="md:mb-8 mb-5 md:text-4xl text-2xl font-bold text-white font-inter ">
          Get <span className="text-purple-600">insights</span> that help your
          business grow.
        </h3>
        <p className="text-white/70 md:mb-20 mb-5 font-inter">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="flex-1 flex flex-col md:flex-row justify-between md:gap-16  gap-9">
          <div>
            <h4 className="text-3xl text-white font-bold mb-3">10k+</h4>
            <p className="text-white/70 uppercase text-sm font-Lexend">
              companies
            </p>
          </div>
          <div>
            <h4 className="text-3xl text-white font-bold mb-3">314</h4>
            <p className="text-white/70 uppercase text-sm font-Lexend">
              templates
            </p>
          </div>
          <div>
            <h4 className="text-3xl text-white font-bold mb-3">12M+</h4>
            <p className="text-white/70 uppercase text-sm font-Lexend">
              queries
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-9 md:m-0 md:order-1">
        <img
          src={heroImage}
          alt=""
          className="object-cover w-full md:h-full h-60 object-top"
        />
        <div className="absolute inset-0 bg-purple-500 opacity-50 " />
      </div>
    </div>
  );
};
export default App;
