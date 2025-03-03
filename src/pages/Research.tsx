import ResearchCard from "../components/ResearchCard";
import researchProject from "../json/researchProjects.json";

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
        <div className="outline rounded-lg py-4 px-4">
          coming soon...
          {false && <div className="flex flex-wrap justify-around w-full h-full text-sm">
            {researchProject.map((r) => {
              return (
                <ResearchCard
                  name={r.title}
                  title={r.title}
                  authors={<>{r.authors.join(", ")}</>}
                  website={r.website}
                  imgSrc={r.imgSrc}
                  imgAlt={r.imgAlt}
                  contribution={r.contribution}
                />
              );
            })}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Research;
