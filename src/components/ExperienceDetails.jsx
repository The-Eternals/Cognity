import { Fragment } from "react"

const Experieencedetails = () => {
    return(
        <Fragment>
            <div className=" bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e]">
                <ul className="flex h-40 justify-center items-center gap-40 text-white font-bold">
                    <li className="flex flex-col justify-center items-center px-20">
                        <p>Experience</p>
                        <p className="text-4xl">8 +</p>
                    </li>
                    <li className="px-20">
                        <p>Teams</p>
                        <p className="text-4xl">122 +</p>
                    </li>
                    <li className="px-20">
                        <p>Clients</p>
                        <p className="text-4xl">563 +</p>
                    </li>
                    <li className="flex flex-col justify-center items-center px-20">
                        <p>Project Done</p>
                        <p className="text-4xl">232 +</p>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Experieencedetails;