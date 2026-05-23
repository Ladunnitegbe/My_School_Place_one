import { PageNavigation } from "../../components/PageNavigation/PageNavigation.jsx";
import DoubleSlash from "../../assets/images/about_us_images/doubleslash.svg?react"

export default function AboutUs(){
    return(
<>
    <PageNavigation />
        <section  className="h-[365px] bg-gradient-to-r from-[#FC6441]/20 to-[#0E2A46]/20 flex flex-col items-center justify-center">
            <h1 className="text-[calc(100vw*(60/1920))] leading-[1.1] text-[#0E2A46] font-(family-name:--font-family-body) font-bold   ">
            ABOUT US
            </h1>
            <p className="flex flex-row">
                Home  < DoubleSlash /> About Us
            </p>
        </section>

</>
    )
};
