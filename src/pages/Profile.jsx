import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import SubBanner from "../components/SubBanner";
import HealthPackages from "../components/HealthPackages";

const Profile = () => {
  return (
    <div className="">
      <SubBanner />
      <HealthPackages />
      <NewsLetter />
      <Testimonials />
    </div>
  );
};

export default Profile;
