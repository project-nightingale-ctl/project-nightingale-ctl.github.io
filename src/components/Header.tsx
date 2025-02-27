import { useEffect, useState } from "react";

const sections = [
  { label: "home", uri: "/" },
  { label: "team", uri: "/team" },
  { label: "research", uri: "/research" },
  { label: "events", uri: "/events" },
];

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 64) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSectionClick = (section: { label: string; uri: string }) => () => {
    const element = document.getElementById(section.label);
    if (element) {
      const headerOffset = 64 + 12; // Offset height of the fixed header
      const elementPosition = element.getBoundingClientRect().top; // Element's top relative to viewport
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Smoothly scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {isHeaderFixed && (
        <div
          style={{ fontFamily: "'Roboto Mono', monospace", height: "64px" }}
          className="w-full"
        />
      )}
      <div
        style={{ fontFamily: "'Roboto Mono', monospace", height: "64px" }}
        className={
          "w-full text-xl flex justify-between transition-all duration-300 " +
          (isHeaderFixed ? "fixed top-0 left-0 z-50 bg-white shadow-md" : "")
        }
      >
        {isHeaderFixed ? (
          <div className="my-auto mx-20 hidden md:flex">
            <img
              src="/Untitled_Artwork_7.png"
              className="h-16"
            />
            <span className="mx-2 text-center my-auto text-2xl text-black">
              {" "}
              Project Nightingale{" "}
            </span>
          </div>
        ) : (
          <div />
        )}

        <div className="flex flex-wrap h-full space-x-4 mx-auto md:mx-10 justify-evenly tracking-wide text-md md:text-2xl">
          {sections.map((section) => {
            return (
              <button
                onClick={onSectionClick(section)}
                className={`my-auto align-middle cursor-pointer hover:text-[#ffcc04] md:px-4 md:py-2`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};



export default Header;
