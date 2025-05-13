import { useEffect } from "react";
import Header from "../components/Header";
import "../custom.css";
import Events from "./Events";
import People from "./People";
import Research from "./Research";
import { useLocation } from "react-router-dom";

const Home: React.FC<{}> = () => {
  const location = useLocation();

  useEffect(() => {
    // if (window.location.pathname !== "/") {
    //   // Redirect to '/' and add a hash for the section label
    //   window.location.href = `/#${section.label}`;
    //   return;
    // }
    console.log();
    if (location.hash) {
      const element = document.getElementById(location.hash);
      if (element) {
        const headerOffset = 64 + 12; // Offset height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
        }}
        id="home"
        className="min-h-screen bg-[url('/background.svg')] bg-cover bg-center flex flex-col"
      >
        <div className="flex flex-col-reverse md:flex-row mt-16">
          <div className="w-72 h-72 ">
            <Balloon />
          </div>
          <div className="flex flex-col ml-12">
            <div className="text-5xl">Project Nightingale</div>
            <div className="text-3xl mt-6 w-3/4">
              {">"} advancing the science of data and visualization literacy
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-12 flex flex-col">
            <div className="flex flex-col w-full mb-12">
              <div style={{ width: "100%" }} className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#a4bdc2" }}
        className="flex flex-col -mt-32 pb-32"
      >
        <div
          style={{
            backgroundColor: "#a4bdc2",
            fontFamily: "'Roboto Mono', monospace",
          }}
          className="text-2xl mx-4 md:mx-24"
        >
          Project Nightingale is a multidisciplinary effort to advance the
          science of how people learn to reason about data. Our work aims to
          develop psychological theories that explain how learning takes place
          in authentic educational environments.
        </div>
        <div id="team" className="mt-24 mx-4 md:mx-24">
          <People />
        </div>
        <div id="research" className="mt-12 mx-4 md:mx-24">
          <Research />
        </div>
        <div id="events" className="mt-12 mx-4 md:mx-24">
          <Events />
        </div>
      </div>
    </>
  );
};

const Balloon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3000 803.67"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="scale(3)" id="b" data-name="Layer 14"></g>
        <g className="make-fly">
          <g id="c" data-name="Layer 6 simplified">
            <path
              id="outer"
              d="M487.42,446.68c6.13-2.81,11.03-3.28,12.97-7.64,2.35-5.28-.85-13.52-6.33-16.47-5.45-2.93-10,1.04-18.05,2.32-21.01,3.36-31.7-17.02-47.99-13.31-8.31,1.89-13.46,9-18.34,16.91-20.99,33.98-25.33,63.58-34.55,88.4-19.66,52.91-59.09,77.46-51.69,86.51,3.26,3.99,10.78-.92,40.81-.54,14.35.18,15.11,1.33,23.4,1.09,5.46-.16,31.94-.94,51.31-16.68,24.28-19.72,26.15-53.81,26.6-62.08,1.6-29.18-10.71-42.86,0-58.28,10.4-14.97,21.86-20.23,21.86-20.23Z"
              style={{ fill: "#f9f5f4" }}
            />
            <path
              id="bird"
              d="M483.03,441.5c17.75-4.19,13.32-12.42-1.29-7.4-20.46,6.8-29.14-16.48-52.07-10.26-7.99,1.53-13.16,8.71-16.48,16.14-22.22,49.77-40.23,104.1-80.64,140.68-24.23,21.93-54.59,35.56-83.43,50.94-17.59,7.75-18.68,25.76,2.46,28.04,14.56,1.5,29.68-3.89,40-14.27-3.79,1.83-2.43,8.26,1.42,9.95,11.8,2.91,22.6-9.4,28.81-18.17,4.51,6.22,14.4,6.07,20.77,1.76,12.85-8.73,14.24-28,27.4-36.43,6.45-4.1,14.47-4.56,21.97-6.03,21.45-4.23,40.79-18.17,51.59-37.19,13.39-23.28,5.82-57.07,7.36-81.9.86-18.26,15.12-29.82,32.14-35.85Z"
              style={{ fill: "rgb(31 41 55)" }}
            />
          </g>
          <g id="d" className="rotating-box" data-name="Layer 5 simplified">
            <path
              d="M262.28,339.09c-6.09.16-22.33,1.42-33.03,13.34-14.98,16.69-8.14,42.02-4.62,55.07,9.6,35.56,37.16,55.98,49.09,63.72-3.09,3.37-10.02,11.93-8.81,21.83,1.78,14.56,20.73,28.26,46.42,26.53,1.57,2.44,14.23,21.48,35.23,22.85,3.36.22,16.54,1.08,26.18-7.36,1.58-1.38,2.61-2.62,4.03-4.42,10.51-13.35,15.77-20.02,19.16-29.66,1.94-5.5,6.81-19.33,1.53-34.72-1.18-3.45-4.49-12.68-13.24-19.2-6.4-4.77-11.74-5.13-20.33-7.5-10.04-2.77-17.27-6.54-31.72-14.09-9.95-5.2-28.77-14.87-44.47-33.67-15.83-18.96-22.45-39.13-25.41-52.72Z"
              style={{ fill: "#f9f5f4" }}
            />
            <path
              id="wing"
              d="M252.91,349.89c-19.46,4.52-25.48,27.62-22.37,45.25,4.77,35.24,32.1,66.38,66.43,75.68-41.18,18.33-9.58,46.27,24.09,41.66,1.06,25.29,38.66,30.83,57.59,21.73,29.46-11.42,36.94-49.97,12.37-70.28-7.76-6.39-17.68-9.41-27.29-12.36-35.83-14.25-93.91-43.02-102.53-83.32-1.32-6.97-4.33-14.85-8.28-18.37Z"
              style={{ fill: "rgb(31 41 55)" }}
            />
          </g>
          <g id="e" data-name="Layer 2 simplified"></g>
        </g>
      </svg>
    </div>
  );
};

export default Home;
