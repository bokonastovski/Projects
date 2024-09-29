import "../css/components/_Banner.scss";

interface BannerProps {
  isVisible: boolean;
  message: string;
}

const Banner = ({ isVisible, message }: BannerProps) => {
  return isVisible ? <div className="banner">{message}</div> : null;
};

export default Banner;
