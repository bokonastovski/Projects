import React from "react";
import Search from "../components/Search";
import ExploreContent from "../components/ExploreContent";
import { FilterProvider } from "../context/FilterContext";
import "../css/components/_index.scss";
import useFetchContent from "../hooks/useFetchContent";
import { ExploreContentProps } from "../types";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Newsletter from "../components/NewsLetter";

const Explore: React.FC = () => {
  const [allContent, loading, error] = useFetchContent<ExploreContentProps[]>(
    "http://localhost:5001/content"
  );

  const [filteredContent, setFilteredContent] = React.useState<
    ExploreContentProps[]
  >([]);

  React.useEffect(() => {
    if (allContent) {
      setFilteredContent(allContent);
    }
  }, [allContent]);

  const handleContentFiltered = (content: ExploreContentProps[]) => {
    setFilteredContent(content);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="exploreSection">
      <FilterProvider>
        <Search
          allContent={allContent || []}
          onContentFiltered={handleContentFiltered}
        />
        <ExploreContent content={filteredContent} />
      </FilterProvider>
      <ContactForm />
      <FAQ />
      <Newsletter />
    </section>
  );
};

export default Explore;

// json-server --watch db.json --port 5000
