import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface UICardProps {
  title: string;
  description: string;
  onClose: () => void;
  buttonText: string;
  imageSrc: string;
  isVisible: boolean;
}

const UICard: React.FC<UICardProps> = ({ title, description, onClose, buttonText, imageSrc, isVisible }) => {
  const [isAnimating, setIsAnimating] = useState(isVisible);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      setAnimationClass('fadeInAnimation');
    } else {
      setAnimationClass('fadeOutAnimation');
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Duration of fade-out animation
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnimationClass('fadeOutAnimation');
    setTimeout(() => {
      onClose();
    }, 1000); // Duration of fade-out animation
  };
  
  return (
    <Link to={"/content/video/rita-isiba-intersectionalism"}>
      <div className={`ui-card ${isVisible && isAnimating ? 'visible' : ''} ${animationClass}`}>
        <img src={imageSrc} alt="Card Image" className="card-image"/>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="close-button" onClick={handleClose}>×</button>
          <Link to={"/content/video/rita-isiba-intersectionalism"}> <button className='watch-button'>{buttonText}</button></Link>
        </div>
      </div>
    </Link> 
  );
};

export default UICard;
