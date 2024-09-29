import { Link } from "react-router-dom";
import "../css/components/_WhyBlack.scss";
import whyBlackFrame from "../picturesFolder/whyBlack/whyBlackFrame.png";
import PageHeader from "../components/pageHeader";

const WhyBlackPage = () => {
  return (
    <section className="whyBlack">
      <PageHeader
        title="carbon neutrality efforts"
        description="  as the climate crisis deepens, we need to save every drop of energy that we can. larger.world was committed to
        putting together the most regenerative, green and mindful digital space there is. to do so was not easy, and in
        many ways, we failed our expectations. but what we managed to do is to have A+ carbon footprint page, and a lot
        of knowledge on where we need to improve, learn and unlearn."
      />
      <img src={whyBlackFrame} alt="whyBlackFrame" className="whyBlackFrame" />
      <p>
        to check how green your own website is, go to {""}
        <Link to="https://www.websitecarbon.com/" className="whyBlackSpan">
          www.websitecarbon.com
        </Link>
      </p>
    </section>
  );
};

export default WhyBlackPage;
