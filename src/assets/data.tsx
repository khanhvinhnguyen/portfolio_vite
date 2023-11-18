import lixiImg from "../assets/projectImg/lixiImg.png"


// Infomation
export const mainData = {
  name: "Vinh Nguyen Khanh",
  jobs: ["Developer"],
  social: {
    facebook: "",
    instagram: "",
    github: "https://github.com/khanhvinhnguyen",
    linkedin: "https://www.linkedin.com/in/khanhvinhnguyen/",
    gmail: "vinhnk.work@gmail.com",
  } as Record<string, string>,
  phoneNum: '077-795-7876',
};


// Work experience
export const WorkList = [
  {
    year: "8/2021 - 9/2023",
    company: "BcProps Foundation",
    roles: "Full-stack Developer",
    details: (
      <ul>
        <li>- Built an social network using HTML, CSS, TypeScript and NextJS</li>
        <li>- Utilized GraphQL for CRUD and developed back-end with NodeJS</li>
        <li>- Learned Redux Saga to handle the state application</li>
      </ul>
    ),
  },
];


// Projects
export const ProjectList = [
  {
    img: lixiImg,
    pjname: 'Lixi Social',
    shortDesc: 'A social network built on blockchain technology for businesses and shops.'
  },
];


// Certificate
export const CertList = [
  {
    year: 2023,
    name: 'Developing Front End Apps with React',
    unit: 'edX',
    imageLink: 'https://drive.google.com/file/d/1tOFVq8zT2wWVyu9kSwUnC2_EG1AKCeXQ/view?usp=sharing'
  },
];