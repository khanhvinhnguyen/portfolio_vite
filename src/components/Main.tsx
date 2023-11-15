import { TypeAnimation } from "react-type-animation";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoGmail,
  BiPhoneCall
} from "react-icons/bi";
import { mainData } from "./data";
import { IconType } from "react-icons";

const Main = () => {
  const iconComponents: Record<string, IconType> = {
    facebook: BiLogoFacebook,
    instagram: BiLogoInstagram,
    github: BiLogoGithub,
    linkedin: BiLogoLinkedin,
    gmail: BiLogoGmail,
  };

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        // src="https://4kwallpapers.com/images/walls/thumbs_3t/1740.jpg"
        src="https://hainh2k3.com/wp-content/uploads/2018/11/lap-trinh-vien-2.jpeg"
        alt="Background Image"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            {mainData.name}
          </h1>

          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a{" "}
            {mainData.jobs.length == 1 ? (
              mainData.jobs
            ) : (
              <TypeAnimation
                sequence={mainData.jobs.flatMap((job) => [job, 1000])}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            )}
          </h2>

          <div className="flex flex-row gap-4 pt-6 max-w-[450px] w-full text-center md:justify-start justify-center">
            {Object.entries(mainData.social).map(([type, value]) => {
              const IconComponent = iconComponents[type];
              if (value.trim() !== "") {
                return (
                  <a
                    key={type} 
                    href={type !== 'gmail' ? value : `mailto:${value}`}
                  >
                    <IconComponent size={20} className="cursor-pointer" />
                  </a>
                );
              }

              return null;
            })}

            <a onClick={() => window.open(`tel:${mainData.phoneNum}`)} className="pl-4 gap-2 max-w-sm:border-none border-l-4 border-gray-800 flex items-center">
              <BiPhoneCall size={20}/> {mainData.phoneNum}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;