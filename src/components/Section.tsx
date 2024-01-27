import Item from "./Item";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Project {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  timeSpan?: string;
  link?: string;
}

interface Projects {
  header: string;
  projects: Project[];
  followUp?: {
    title: string;
    link: string;
  };
}

interface Props {
  className?: string;
  name: string;
  data: Projects;
}

const Section = ({ className, name, data }: Props) => {
  return (
    <div className={className}>
      {data.header && (
        <h1 className="text-3xl font-semibold tracking-wider text-slate-200">
          {data.header}
        </h1>
      )}
      {data.projects.map((project) => (
        <Item
          title={project.title}
          description={project.description}
          keywords={project.keywords}
          timeSpan={project.timeSpan}
          image={project.image}
          link={project.link}
        />
      ))}

      {data.followUp && (
        <a
          href={data.followUp.link}
          className="font-medium group text-white mt-10 hover:underline w-auto inline-block decoration-teal-300"
        >
          {data.followUp.title}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 inline-block group-hover:translate-x-2 transition-transform duration-200"
          />
        </a>
      )}
    </div>
  );
};

export default Section;
