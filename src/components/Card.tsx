import "./card.css"

interface Speaker {
  name: string;
  affiliation: string;
  image: string;
  link: string;
  role?: "Speaker" | "Moderator" | "Organizer";
}

const Card: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  if (speaker.role === undefined) {
    speaker.role = "Speaker";
  }

  return (
    <div className="speaker-entry cursor-pointer">
      <img className="speaker-img" src={speaker.image} />
      <div >
        <a
          href={speaker.link}
          style={{ position: "relative", display: "block" }}
        >
          {speaker.name}
          {speaker.role != "Organizer" && <><br /><strong> ({speaker.role})</strong></>}
        </a>
        <div>{speaker.affiliation}</div>
      </div>
    </div>
  );
};

export default Card;
