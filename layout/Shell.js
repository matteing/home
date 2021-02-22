import Footer from "./Footer";
import Nav from "./Nav";

export default function Shell({ children }) {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto lg:px-8 md:flex min-h-screen">
      <div className="flex-1 min-w-0 bg-white lg:flex">
        <div className="lg:flex-shrink-0 lg:w-64 bg-white">
          <div className="h-full pl-4 pr-6 py-6 pb-0 sm:pb-6 sm:pl-6 md:pl-8 lg:pl-0">
            <div className="flex flex-col space-x-2 lg:space-x-0">
              <div className="flex lg:flex-col space-x-2 lg:space-x-0">
                <div className="flex-none">
                  <img
                    src="/me.png"
                    alt="Sergio Mattei's Face"
                    className="rounded-full h-8 mb-2"
                  />
                </div>
                <div>
                  <strong>Sergio Mattei</strong>
                  <p className="text-sm text-gray-500 mb-4">
                    I make software, build startups and learn{" "}
                    <em>ad infinitum</em>.
                  </p>
                </div>
              </div>

              <Nav />
              <div className="hidden lg:block">
                <Footer />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex-none" style={{ maxWidth: 576 }}>
          <div className="h-full py-6 px-4 sm:px-6 md:px-8">
            {children}
            <div className="block lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
