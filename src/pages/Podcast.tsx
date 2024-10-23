import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import Icons from "../components/Icons";
import Unlearning from "../components/Unlearning";
import LandingSectionFive from "../components/LandingSectionFive";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import useFetchContent from "../hooks/useFetchContent";
import { PodcastContentProps } from "../types";

const Podcast: React.FC = () => {
  const { slash } = useParams<{ slash: string }>();
  const [podcastContent, loading, error] = useFetchContent<
    PodcastContentProps[]
  >("https://json-server-api-hxfu.onrender.com/content");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const foundPodcast = podcastContent?.find(
    (item) => item.type === "podcast" && item.slash === slash
  );

  if (!foundPodcast) return <div>Podcast not found</div>;

  return (
    <section className="podcastSection">
      <PageHeader
        title={foundPodcast.topic}
        description={foundPodcast.smallDescription}
      />
      <Icons type={foundPodcast.type} duration={foundPodcast.duration} />
      <div className="iframePodcast">
        <iframe
          id="embedPlayer"
          src={foundPodcast.podcastUrl}
          height="175"
          frameBorder="0"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          style={{
            width: "60%",
            overflow: "hidden",
            borderRadius: "30px",
            transform: "translateZ(0px)",
            animation: "2s ease 0s 6 normal none running loading-indicator",
            backgroundColor: "rgb(228, 228, 228)",
            textAlign: "center",
          }}
        ></iframe>
      </div>
      <p className="podcastDesc">{foundPodcast.description}</p>
      <PageHeader
        title="why listening to this podcast"
        description={foundPodcast.reason}
      />
      <div className="podcastDesc"></div>
      <img className="podcastImg" src={foundPodcast.imgUrl} alt="" />
      <Unlearning
        title="exercise"
        questions={[
          "Reflect on a time when you faced discouragement in your sustainability efforts. How did you navigate the emotional landscape? Are you giving the space to yourself and your team to recover from the highs and lows of your sustainability journey? How do you do that?",
        ]}
      />
      <LandingSectionFive />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default Podcast;
