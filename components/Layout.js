import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex min-h-screen">
      <div className="flex-1 min-w-0 bg-white xl:flex">
        <div className="xl:flex-shrink-0 xl:w-64 bg-white">
          <div className="h-full pl-4 pr-6 py-6 pb-0 sm:pb-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <div className="flex xl:flex-col space-x-2 xl:space-x-0">
              <div>
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
              <div className="hidden xl:block">
                <Nav />
              </div>
              <div className="hidden xl:block">
                <Footer />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white lg:min-w-0 lg:flex-1"
          style={{ maxWidth: 576 }}
        >
          <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex mb-4">
              <Breadcrumbs />
            </div>
            {children}
          </div>
        </div>
      </div>

      <div className="pr-4 sm:pr-8 lg:pr-12 lg:flex-shrink-0 xl:pr-16">
        <div className="h-full pl-6 py-6 lg:w-80"></div>
      </div>
    </div>
  );
}
