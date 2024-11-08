import About from "./About";
import SocialMedia from "./SocialMedia";
import TechStack from "./TechStack";
import SectionIndicator from "./SectionIndicator";

import {
  faJava,
  faNodeJs,
  faReact,
  faDocker,
  faGit,
  faLinux,
  faJs,
  faHtml5,
  faVuejs,
  faJenkins,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  className: string;
}

const Header = ({ className }: Props) => {
  const techStack = [
    faJava,
    faNodeJs,
    faReact,
    faDocker,
    faGit,
    faLinux,
    faJs,
    faHtml5,
    faVuejs,
    faJenkins,
    faCss3,
  ];

  return (
    <div className={className}>
      <div>
        <a className="text-4xl font-bold tracking-wide" href="/">
          Ion Chetraru
        </a>
        <h2 className="text-xl font-medium text-slate-300 mt-4">
          Software Engineer
        </h2>
        <p className="text-base font-light mt-2 text-slate-300 tracking-wider">
          Master of Computer Science and Engineering
        </p>

        <TechStack faStack={techStack} />
      </div>

      <SectionIndicator className="py-8" />

      <SocialMedia className="flex items-center" />
    </div>
  );
};

export default Header;
