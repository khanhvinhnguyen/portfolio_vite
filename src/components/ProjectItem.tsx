import React from "react";

type ProjectItemProps = {
  img?: string;
  pjName?: string;
  shortDesc?: string;
} & React.HTMLProps<HTMLDivElement>;

const ProjectItem = (props: ProjectItemProps) => {
  const { img, pjName, shortDesc } = props;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} className="rounded-xl group group-hover:opacity-10" />
      <div className="w-[80%] hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-white text-2xl font-bold tracking-wider text-center">
          {pjName}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{shortDesc}</p>
        <a href='https://www.lixi.social' className="flex justify-center">
          <p className='w-[120px] rounded-lg text-center items-center  bg-white p-3 text-gray-700 text-lg font-bold cursor-pointer '>More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
