interface IResearchCard {
  name: string;
  title: string;
  authors: JSX.Element;
  website: JSX.Element | string;
  imgSrc: string;
  imgAlt: string;
  contribution?: string;
}

const ResearchCard: React.FC<IResearchCard> = (props) => {
  const o = props;

  return (
    <div
      className={
        "bg-gray w-1/2 p-2 hover:border-yellow-400 flex flex-col text-sm"
      }
    >
      <div className="m-2  rounded-lg">
        <div className="h-24 px-2 py-1 bg-gray-100 rounded-lg text-lg">
          {o.title}
        </div>
        <div className="flex mt-1">
          Authors
          <div className="w-full h-1 mx-2 my-2 bg-yellow-300 rounded-lg" />
        </div>
        <div className="h-16 px-2 py-1 rounded-lg">{o.authors}</div>
        {props.contribution && (
          <>
            <div className="flex mt-1">
              Contribution
              <div className="w-full h-1 mx-2 my-2 bg-yellow-400 rounded-lg" />
            </div>
            <div className="px-2 py-1 mb-1 rounded-lg ">{o.contribution}</div>
          </>
        )}

        <div className="flex mt-1">
          Information
          <div className="w-full h-1 mx-2 my-2 bg-yellow-500 rounded-lg" />
        </div>
        <div className="px-2 py-1 rounded-lg ">{o.website}</div>

        <img
          style={{ maxHeight: "18em" }}
          className="mx-auto my-auto rounded-sm"
          src={o.imgSrc}
          alt={o.imgAlt}
        />
      </div>
    </div>
  );
};

export default ResearchCard;
