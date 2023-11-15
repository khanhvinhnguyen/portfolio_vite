import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { GrProjects, GrCertificate } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav && (
        <div className="bg-white/90 fixed w-full h-screen flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-start pl-[28%] items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-start pl-[28%] items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a onClick={handleNav}
            href="#project"
            className="w-[75%] flex justify-start pl-[28%] items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a onClick={handleNav}
            href="#certificate"
            className="w-[75%] flex justify-start pl-[28%] items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrCertificate size={20} />
            <span className="pl-4">Certificates</span>
          </a>
        </div>
      )}

      <div className="md:block hidden fixed top-[35%] right-3 z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineUser size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#certificate"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrCertificate size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
