import { BiLogoTailwindCss, BiLogoRedux, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoDjango, BiLogoPython } from 'react-icons/bi';
import { BsAndroid2 } from 'react-icons/bs';
import { FaShopify, FaWordpress } from 'react-icons/fa';

export const skills = [
  { name: 'JavaScript', percentage: 75, icon: <BiLogoJavascript /> },
  { name: 'React', percentage: 55, icon: <BiLogoReact /> },
  { name: 'Python', percentage: 65, icon: <BiLogoPython /> },
  { name: 'Redux', percentage: 60, icon: <BiLogoRedux /> },
  { name: 'Node.js', percentage: 76, icon: <BiLogoNodejs /> },
  { name: 'Tailwind', percentage: 65, icon: <BiLogoTailwindCss /> },
  { name: 'Django', percentage: 60, icon: <BiLogoDjango/> },
  { name: 'React-Native', percentage: 55, icon: <BiLogoReact/> },
  { name: 'Wordpress', percentage: 65, icon: <FaWordpress /> },
  { name: 'Shopify', percentage: 70, icon: <FaShopify /> },
  { name: 'Mobile App Development', percentage: 60, icon: <BsAndroid2 /> },
];
