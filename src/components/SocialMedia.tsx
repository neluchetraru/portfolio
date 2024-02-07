import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  className: string;
}

const SocialMedia = ({ className }: Props) => {
  const socialMedia = [
    {
      name: "GitHub",
      url: "https://github.com/neluchetraru",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chetraru-ion",
      icon: faLinkedin,
    },
  ];
  return (
    <div className={className}>
      {socialMedia.map(
        (social) =>
          social.url && (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 block hover:text-slate-300 text-slate-400"
            >
              <FontAwesomeIcon icon={social.icon} size="xl" color="" />
            </a>
          )
      )}
    </div>
  );
};

export default SocialMedia;
