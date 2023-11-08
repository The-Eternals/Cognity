import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div>
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Log"
            className="w-7 cursor-pointer"
            onClick={() => Navigate("/")}
          />
          <p
            onClick={() => Navigate("/")}
            className=" cursor-pointer text-2xl font-bold"
          >
            Cognity
          </p>
        </div>
        <div>
            <p>Services</p>
            <ul>
                <li>Psychotherapy</li>
                <li>Mental Counseling</li>
                <li>Support Groups</li>
                <li>Case Management</li>
            </ul>
        </div>
        <div>
            <p>Contact</p>
            <ul>
                <li></li>
            </ul>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default Footer;