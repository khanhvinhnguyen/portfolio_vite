import WorkItem from "./WorkItem";
import { WorkList } from "./data";


const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>

      {WorkList.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          company={item.company}
          roles={item.roles}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
