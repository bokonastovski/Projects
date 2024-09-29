// ExploreContentCard.tsx
import React from "react";
import { ExploreContentProps } from "../types";
import { useNavigate } from "react-router-dom";

interface ExploreContentCardProps {
  content: ExploreContentProps;
}

const ExploreContentCard: React.FC<ExploreContentCardProps> = ({ content }) => {
  const navigate = useNavigate();

  const getButtonText = (type: string) => {
    switch (type) {
      case "video":
        return "watch here";
      case "podcast":
        return "listen here";
      case "article":
        return "read here";
      default:
        return "explore";
    }
  };

  const handleClick = () => {
    console.log(`Clicked on ${content.id}`);
    navigate(`/content/${content.type}/${content.slash}`);
  };

  return (
    <div className="exploreContent">
      <img
        src={`/images/${content.type}IconCard.png`}
        alt={`${content.type} Icon`}
      />
      <div className="content">
        <h2>{content.guest}</h2>
        <p className="p-bold">{content.topic}</p>
        <p className="p-small">{content.duration}</p>
        <span className="p-small">{content.smallDescription}</span>
      </div>
      <button className="card-btn" onClick={handleClick}>
        {getButtonText(content.type)}
      </button>
    </div>
  );
};

export default ExploreContentCard;
