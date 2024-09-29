import React from "react";
import PageHeader from "../components/pageHeader";
import ExploreContent from "../components/ExploreContent";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import useFetchContent from "../hooks/useFetchContent";
import { ExploreContentProps } from "../types";

const SpacesWithZeroTolerance: React.FC = () => {
  const [content, loading, error] = useFetchContent<ExploreContentProps[]>(
    "http://localhost:5000/content"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="spaceszeroSection">
      <PageHeader
        title="spaces with zero tolerance"
        description="Zero tolerance for spaces is a guiding principle that emphasizes maximizing efficiency and functionality in all areas..."
      />
      <h2>how we create our spaces with zero tolerance</h2>
      <ExploreContent content={content || []} />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default SpacesWithZeroTolerance;
