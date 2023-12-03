import { Fragment } from "react"
import AboutImg from '../assets/svg/Frame 80.svg'
import { useNavigate } from "react-router"
import NavBar2 from "./Navbar2"

const About = () => {
    const Navigate = useNavigate()
    return(
        <Fragment>
            <div className="px-[8rem] flex justify-between py-20">
                <div className="w-[34rem]">
                    <img src={AboutImg} alt="AboutImg" />
                </div>
                <div className="w-[34rem] mt-20">
                    <h5 className=" text-xl font-bold ">About Us</h5>
                    <h1 className="text-4xl font-semibold py-10">Discover the Faces <br /> Behind Our Mental <br /> Health Consultancy </h1>
                    <p className=" text-justify">At our mental health website, we believe in fostering a supportive community where mental well-being takes center stage. Committed to destigmatizing conversations around mental health, we offer a diverse range of resources, from expert advice to personal stories, guiding individuals on their journey toward a healthier, more balanced life. </p>
                    <button onClick={() => Navigate('/AboutUs')} className=" bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-10 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2 mt-16">See Deatails</button>
                </div>
            </div>
        </Fragment>
    )
}

export default About;