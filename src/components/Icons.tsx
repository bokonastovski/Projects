interface IconsProps {
  type: string;
  duration: string;
}

const Icons = ({ type, duration }: IconsProps) => {
  return (
    <div className="iconsDiv">
      <div className="linkedinIcons">
        <img src="/images/linkedinIcon.png" alt="" />
        <a href="https://www.linkedin.com" target="_blank">
          <img src="/images/linkedIn.png" alt="LinkedIn" />
        </a>
      </div>
      <div>
        <img src={`/images/${type}IconCard.png`} alt="" />
      </div>
      <div className="durationIcons">
        <img src="/images/durationIcon.png" alt="" />
        <h2>{duration}</h2>
      </div>
    </div>
  );
};

export default Icons;
