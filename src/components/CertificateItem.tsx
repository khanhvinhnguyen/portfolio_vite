import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type WorkItemProps = {
  year: string | number;
  name: string;
  unit: string;
  imageLink: string;
} & React.HTMLProps<HTMLDivElement>;

const CertificateItem = (props: WorkItemProps) => {
  const { year, name, unit, imageLink } = props;

  return (
    <ol className="flex flex-col md:flex-row relative border-l-2 border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="mb-1.5 flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 rounded-lg bg-[#001b5e] text-white font-semibold ">
            {year}
          </span>
          <span className="text-stone-500 text-lg leading-none">{unit}</span>
        </p>

        {imageLink.trim() !== "" ? (
          <a href={imageLink} className="flex flex-nowrap items-center gap-2">
            <span className="text-[#001b5e] font-semibold text-lg">{name}</span>
            <BiLinkExternal
              size={20}
              className={`${imageLink.trim() !== "" ? "block" : "hidden"}`}
            />
          </a>
        ) : (
          <span className="text-[#001b5e] font-semibold text-lg">{name}</span>
        )}
      </li>
    </ol>
  );
};

export default CertificateItem;
