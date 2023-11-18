import CertificateItem from "./CertificateItem";
import { CertList } from "../assets/data";

const Certificate = () => {
  return (
    <div id="certificate" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Certificate
      </h1>
      <p className="text-center py-8 ">
        Professional Activities, Certifications, and Training Attended
      </p>
      
      {CertList.map((item, index) => (
        <CertificateItem key={index} year={item.year} name={item.name} unit={item.unit} imageLink={item.imageLink} />
      ))}
    </div>
  );
};

export default Certificate;
