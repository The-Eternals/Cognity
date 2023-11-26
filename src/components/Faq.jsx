import { Fragment } from "react";

const Faq = () => {
  return (
    <Fragment>
      <div className=" px-[20rem] justify-center items-center flex flex-col py-20">
        <p className=" font-semibold">Faq</p>
        <h1 className=" font-semibold text-4xl py-10 text-center">
          Navigating Mental Health Consultation Commonly Asked Questions
        </h1>
        <div>
          <div className="flex gap-10 mt-14">
            <div>
              <p className=" font-bold text-xl">
                What is a mental health consultant?
              </p>
              <p className=" text-sm mt-5">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna
                adipiscing fringilla nulla diam lorem non mauris. Ultrices
                aliquet at quam adipiscing feugiat interdum mattis. Placerat
                donec risus diam sed et. A in ullamcorper ipsum justo vestibulum
                sit cursus. A risus donec eget enim aliquet integer cursus et.
                Phasellus ac augue ultricies sem aliquam faucibus sem non
                volutpat.
              </p>
            </div>
            <div>
              <i class="fa-solid fa-angle-up"></i>
            </div>
          </div>
          <div className="flex justify-between mt-14">
            <div>
              <p className="font-bold text-xl">
                What services do you offer as a mental health consultant?
              </p>
            </div>
            <div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="flex justify-between mt-14">
            <div>
              <p className="font-bold text-xl">
              How can I benefit from working with a mental health consultant?
              </p>
            </div>
            <div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="flex justify-between mt-14">
            <div>
              <p className="font-bold text-xl">
              What types of issues can a mental health consultant help with?
              </p>
            </div>
            <div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
