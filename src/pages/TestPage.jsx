import { Fragment } from "react";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import NavBar2 from "../components/Navbar2";
import Card from "../components/Card";

const TestPage = () => {
  return (
    <Fragment>
      <NavBar2 title = "Test"/>
      <Card/>
      
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default TestPage;
