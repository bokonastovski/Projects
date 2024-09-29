import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Icons from "../components/Icons";
import LandingSectionFive from "../components/LandingSectionFive";
import Newsletter from "../components/NewsLetter";
import PageHeader from "../components/pageHeader";
import Unlearning from "../components/Unlearning";
import useFetchContent from "../hooks/useFetchContent";
import { VideoContentProps } from "../types";

const Video: React.FC = () => {
  const { slash } = useParams<{ slash: string }>();
  const [videoContent, loading, error] = useFetchContent<VideoContentProps[]>(
    "http://localhost:5000/content"
  );
  console.log(slash);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const foundVideo = videoContent?.find((item) => {
    return item.type === "video" && item.slash === slash;
  });

  console.log("Found video:", foundVideo);

  if (!foundVideo) return <div>Video not found</div>;

  return (
    <section className="videoSection">
      <PageHeader
        title={foundVideo.topic}
        description={foundVideo.smallDescription}
      />
      <Icons type={foundVideo.type} duration={foundVideo.duration} />
      <iframe
        src={foundVideo.videoUrl}
        className="video-iframe"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
      <div className="podcastDesc"></div>
      <Unlearning
        title="questions"
        questions={[
          "In which way does your company help you bring your best self to live?",
          "How do you contribute to creating an environment where people feel safe?",
        ]}
      />
      <LandingSectionFive />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default Video;
