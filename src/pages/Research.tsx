import researchPreviews from "../json/researchPreviews.json";

const Research: React.FC<{}> = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto Mono', monospace",
      }}
      className="mx-auto flex flex-col space-y-6"
    >
      <div className="">
        <h2 className="text-4xl mb-2">research</h2>
        <div className="outline rounded p-2 bg-white">
          {true && (
            <div className="flex flex-wrap w-full h-full text-sm">
              {researchPreviews.map((o) => {
                return (
                  <div className="bg-gray w-1/3 p-2 border-4 border-white flex flex-col text-sm">
                    <img
                      style={{ maxHeight: "40em" }}
                      className="mx-auto my-auto rounded-sm"
                      src={o.imgSrc}
                      alt={o.imgAlt}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
