import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import Icons from "../components/Icons";
import Unlearning from "../components/Unlearning";
import LandingSectionFive from "../components/LandingSectionFive";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import useFetchContent from "../hooks/useFetchContent";
import { ArticleContentProps } from "../types";

const Article: React.FC = () => {
  const { slash } = useParams<{ slash: string }>();
  const [articleContent, loading, error] = useFetchContent<
    ArticleContentProps[]
  >("http://localhost:5001/content");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const foundArticle = articleContent?.find(
    (item) => item.type === "article" && item.slash === slash
  );

  if (!foundArticle) return <div>Article not found</div>;

  const formatCTA = (cta: string) => {
    return cta
      .replace(/<bold>(.*?)<\/bold>/g, "<strong>$1</strong>")
      .replace(/<gap>/g, "<br><br>");
  };

  return (
    <section className="articleSection">
      <PageHeader
        title="building sustainable happiness: employee well-being strategies"
        description="Discover the keys to fostering long-term employee happiness and well-being in the workplace, while embracing sustainability practices."
      />
      <Icons type={foundArticle.type} duration={foundArticle.duration} />
      <p className="mb-5rem">{foundArticle.description}</p>
      <img className="mb-5rem" src={foundArticle.imgUrl} alt="" />
      <p className="mb-5rem">{foundArticle.paragraph1}</p>
      <p>{foundArticle.paragraph2}</p>
      <PageHeader title="Call-to-Action (CTA):" description="" />
      <p dangerouslySetInnerHTML={{ __html: formatCTA(foundArticle.cta) }} />
      <div className="podcastDesc"></div>
      <PageHeader title="Additional Elements:" description="" />
      <p
        dangerouslySetInnerHTML={{
          __html: `<strong>Why this article?</strong> ${foundArticle.elements.slice(
            19
          )}`,
        }}
      />
      <div className="podcastDesc"></div>
      <PageHeader title="Additional Reads:" description="" />
      <p
        className="mb-5rem"
        dangerouslySetInnerHTML={{ __html: foundArticle.reads }}
      />
      <Unlearning
        title="questions"
        questions={[
          "How can your organization integrate sustainability practices to enhance employee happiness and well-being?",
        ]}
      />
      <LandingSectionFive />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default Article;
