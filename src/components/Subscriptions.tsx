import React from "react";
import "../css/components/_Subscriptions.scss";
import flowerImage from "../picturesFolder/subscriptions/flower.png";
import { Link } from "react-router-dom";

interface SubscriptionsProps {
  className?: string;
}

const Subscriptions: React.FC<SubscriptionsProps> = ({ className }) => {
  return (
    <div className={`subscriptions ${className}`}>
      <div className="subscription__titles">
        <h2 className="subscriptions__title">different ways to explore our worlds</h2>
        <p className="subscriptions__subtitle">
          take your time to estimate what membership works best for you at this point
        </p>
      </div>
      <div className="subscriptions__plans">
        <div className="subscriptions__plan subscriptions__plan--team">
          <h3 className="subscriptions__plan-title">team explorer</h3>
          <div className="subscriptions__price">500€</div>
          <p className="subscriptions__price-info">enterprise/monthly</p>
          <div className="subscriptions__buttons">
            <button className="subscriptions__button">free for 30 days</button>
            <Link to="/planetEarth">
              <button className="subscriptions__button subscriptions__button--buy">buy now</button>
            </Link>
          </div>
          <ul className="subscriptions__features">
            <li className="subscriptions__feature-highlight">everything in solo explorer, plus:</li>
            <li className="plusUsers">
              50+ users company package, with special perks (consulting hours, customization training, and facilitation
              services)
            </li>
          </ul>
        </div>

        <div className="subscriptions__plan subscriptions__plan--highlighted">
          <div className="subscriptions__flower">
            <img src={flowerImage} alt="Most Popular" />
            <span className="subscriptions__flower-text">most popular!</span>
          </div>
          <h3 className="subscriptions__plan-title">solo explorer</h3>

          <div className="subscriptions__price">10€</div>
          <p className="subscriptions__price-info">user/monthly</p>
          <div className="subscriptions__buttons">
            <button className="subscriptions__button">free for 30 days</button>
            <Link to="/membership">
              <button className="subscriptions__button subscriptions__button--buy">buy now</button>
            </Link>
          </div>
          <ul className="subscriptions__features">
            <li className="subscriptions__feature-highlight">everything in basic explorer, plus:</li>
            <li>video content</li>
            <li>forum/community</li>
            <li>specialized tools</li>
          </ul>
        </div>

        <div className="subscriptions__plan subscriptions__plan--basic">
          <h3 className="subscriptions__plan-title">basic explorer</h3>
          <div className="subscriptions__price">0€</div>
          <p className="subscriptions__price-info">user/monthly</p>
          <div className="subscriptions__buttons">
            <button className="subscriptions__button subscriptions__button--buy">free no cc required</button>
          </div>
          <ul className="subscriptions__features">
            <li>access to free content</li>
            <li>access to newsletters</li>
            <li>live events</li>
          </ul>
        </div>
      </div>
      <p className="subscriptions__footer">any questions about our memberships? just connect larger.world!</p>
    </div>
  );
};

export default Subscriptions;
