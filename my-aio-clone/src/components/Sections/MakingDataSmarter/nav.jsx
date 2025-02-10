import { nav } from "../../../data/data";
import { useState } from "react";
import Info from "./Info";
import { FaHouseChimney } from "react-icons/fa6";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { LiaPenNibSolid } from "react-icons/lia";

const Nav = () => {
  const [title, setTitle] = useState("Seamless Integration");
  console.log("title :", title);

  const handleClick = (title) => {
    // console.log('title :' , title);
    setTitle(title);
  };

  return (
    <>
      <div className="flex flex-col gap-y-14">

        {/* nav container */}
        <div className="mx-auto 2xl:ms-auto lg:mx-0 border border-[#FFFFFF14] w-[fit-content] 2xl:w-full rounded-xl bg-gradient-to-r from-purple-900/75 to-blue-900/75">
          <ul className="flex py-2 px-8 2xl:w-[fit-content] 2xl:mx-auto">
            {nav.map((item) => (
              <button className="focus:bg-[#6721FF] focus:transition focus:delay-75 rounded-xl">
                <li
                  key={item.id}
                  className="text-white sm:font-thin lg:font-semibold sm:px-2 sm:py-1.5 lg:px-4 lg:py-2.5 rounded-xl sm:text-sm lg:text-base xl:text-[15px]"
                  onClick={() => {
                    handleClick(item.title);
                  }}
                >
                  {item.title}
                </li>
              </button>
            ))}
          </ul>
        </div>


        {/* items rendering based on nav  */}
        <div className="sm:flex sm:flex-col md:flex md:flex-row">
          {title == "Seamless Integration" && (
            <Info
              img="https://myaio.com/wp-content/uploads/2023/09/cases_img01-copy-1.png"
              icon={<FaHouseChimney />}
              text="With MY AIO, there\'s no need to juggle between multiple marketing tools anymore. Its intuitive platform effortlessly consolidates data from top marketing sources, providing users with a comprehensive view without the usual chaos."
            />
          )}
          {title == "User-Centric" && (
            <Info
              img="https://myaio.com/wp-content/uploads/2023/09/image_2023_09_08T23_43_33_467Z.png"
              icon={<FaRegEnvelopeOpen />}
              text="Designed with users in mind, MY AIO offers a dashboard that caters to individual needs. Whether it\'s setting priority metrics or creating tailored reports, MY AIO provides a bespoke experience that resonates with its user base."
            />
          )}
          {title == "Real-Time Data" && (
            <Info
              img="https://myaio.com/wp-content/uploads/2023/09/image_2023_09_08T23_48_00_335Z.png"
              icon={<FaCode />}
              text="Stay ahead of the curve with MY AIO\'s real-time data synchronization. Say goodbye to outdated information and manual refreshing—MY AIO ensures the latest data is always at your fingertips, empowering swift and effective decision-making"
            />
          )}
          {title == "Top-Notch Security" && (
            <Info
              img="https://myaio.com/wp-content/uploads/2023/09/image_2023_09_08T23_52_38_416Z.png"
              icon={<LiaPenNibSolid />}
              text="Data integrity and security are paramount at MY AIO. By adhering to global data protection standards, MY AIO ensures your sensitive information remains confidential and secure, providing users with peace of mind in every interaction."
            />
          )}
        </div>
        
      </div>
    </>
  );
};

export default Nav;
