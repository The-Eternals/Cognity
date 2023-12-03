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
              <p className=" text-sm mt-5 text-justify">
              A mental health consultant is a professional who offers guidance, expertise, and support to individuals, organizations, or businesses seeking to improve mental health practices. They provide tailored strategies, training, and advice, fostering healthier environments and enhancing understanding and management of mental health issues within various settings.
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
