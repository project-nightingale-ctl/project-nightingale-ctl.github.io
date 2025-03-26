import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Blog: React.FC<{}> = () => {
  const { paper_url } = useParams<{ paper_url: string }>();
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!paper_url) return;

    fetch(`/blog_posts/${paper_url}.html`)
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((data) => {
        setHtmlContent(data);
      })
      .catch(() => setError(true));
  }, [paper_url]);

  if (error) return <div>404 - Post not found</div>;
  if (!htmlContent) return <div>Loading...</div>;

  return (
    <div id="blog" className="pb-4 w-full bg-blue-200">
      <div className="bg-white">
        <Header />
      </div>
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Blog;
