import lixiImg from "../assets/lixiImg.png"


// Infomation
export const mainData = {
  name: "Vinh Nguyen Khanh",
  jobs: ["Developer"],
  social: {
    facebook: "",
    instagram: "",
    github: "https://github.com/khanhvinhnguyen",
    linkedin: "https://www.linkedin.com/in/vinhnk/",
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
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
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
    unit: 'EDX',
    imageLink: ''
  },
];