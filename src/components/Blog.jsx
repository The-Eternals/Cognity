import { Fragment } from "react"
import Health1 from "../assets/Images/Mental-health1.jpg"
import Health2 from "../assets/Images/Mental-health2.avif"
import Health3 from "../assets/Images/Mental-health3.avif"
import { useNavigate } from "react-router"


const Blog = () => {
    const Navigate = useNavigate()
    return(
        <Fragment>
            <div className=" px-[8rem] justify-center flex flex-col items-center py-12">
                <p className=" font-semibold text-lg">Blog</p>
                <h1 className=" font-semibold text-4xl py-4">Our Blog For You</h1>
                <div className=" flex justify-between gap-20">
                    <div>
                        <img src={Health1} alt="" className=" w-[22rem] h-[24rem] rounded-2xl border-2 border-black" />
                        <h6 className=" text-2xl font-semibold py-3">How Mental Health Consultants Can Help...</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla See more</p>
                    </div>
                    <div>
                        <img src={Health3} alt="" className=" w-[22rem] h-[24rem] rounded-2xl border-2 border-black"/>
                        <h6 className=" text-2xl font-semibold py-3">How Mental Health Consultants Can Help...</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla See more</p>
                    </div>
                    <div>
                        <img src={Health2} alt="" className=" w-[22rem] h-[24rem] rounded-2xl border-2 border-black"/>
                        <h6 className=" text-2xl font-semibold py-3">How Mental Health Consultants Can Help...</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla See more</p>
                    </div>
                </div>
                <button onClick={() => Navigate("/Blog")} className=" bg-black text-white rounded-xl font-bold px-6 h-10 hover:bg-white hover:text-black hover:border-black hover:border-2 mt-6">See More</button>
            </div>
        </Fragment>
    )
}

export default Blog;