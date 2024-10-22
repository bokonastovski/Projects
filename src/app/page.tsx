import HomepageBrankaGordan from "./components/Homepage/HomepageBrankaGordan";
import HomepageGreen from "./components/Homepage/HomepageGreen";
import HomepageMiddle from "./components/Homepage/HomepageMiddle";
import HomepageModuls from "./components/Homepage/HomepageModuls";
import HomepageNumbers from "./components/Homepage/HomepageNumbers";
import HomepageOrange from "./components/Homepage/HomepageOrange";
import HomepageTestimonials from "./components/Homepage/HomepageTestimonials";
import HomepageTop from "./components/Homepage/HomepageTop";

export default function Home() {
  return (
    <section>
      <HomepageTop />
      <HomepageMiddle />
      <HomepageBrankaGordan />
      <HomepageModuls />
      <HomepageOrange />
      <HomepageNumbers />
      <HomepageGreen />
      <HomepageTestimonials />
    </section>
  );
}
