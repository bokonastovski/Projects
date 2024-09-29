import React from "react";
import ExploreContentCard from "./ExploreContentCard";
import { ExploreContentProps } from "../types";

// Rename the props interface to avoid conflict
interface ExploreContentPropsInterface {
  content: ExploreContentProps[]; // Ensure this is always an array
}

const ExploreContent: React.FC<ExploreContentPropsInterface> = ({
  content,
}) => {
  // Check if content is an array and has elements
  if (!Array.isArray(content) || content.length === 0) {
    return <div>No content available</div>; // Or any other fallback UI
  }

  return (
    <div>
      {content.map((item, index) => (
        <ExploreContentCard key={index} content={item} />
      ))}
    </div>
  );
};

export default ExploreContent;
