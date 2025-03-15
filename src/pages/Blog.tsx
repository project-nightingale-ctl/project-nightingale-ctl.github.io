interface ResearchCard {
  title: string;
  contribution: string;
  authors: string[];
  website: string;
  imgSrc: string;
  imgAlt: string;
}

interface IBlog {
  researchCard: ResearchCard
}

const Blog: React.FC<IBlog> = () => {
  return <div></div>;
};

export default Blog;
