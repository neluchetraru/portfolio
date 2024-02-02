interface Props {
  className?: string;
}

const About = ({ className }: Props) => {
  return (
    <div className={className}>
      <p className="text-slate-400 text-lg font-medium tracking-normal mb-5">
        My journey into web development began in 2016 at the age of 15 with a
        basic HTML page. I then started learning into CSS and JS, dedicating
        over 100 hours to Udemy courses and YouTube videos, mastering key
        concepts. This self-taught phase ignited my passion for Software
        Engineering.
      </p>

      <p className="text-slate-400 text-lg font-medium tracking-normal mb-5">
        I actively participated in coding competitions, achieving notable
        success. These experiences improved my problem-solving skills and
        motivated me into pursuing a career in Software Engineering.
      </p>

      <p className="text-slate-400 text-lg font-medium tracking-normal mb-5">
        Currently enrolled in the Master of Computer Science and Engineering
        program at the Technical University of Denmark, my academic journey
        aligns with my passion. I bring a strong background in algorithms, data
        structures, and both front-end and back-end development.
      </p>

      <p className="text-slate-400 text-lg font-medium tracking-normal mb-5">
        When I am not coding, I enjoy watching movies, practicing sports, and
        spending time with my friends.
      </p>
    </div>
  );
};

export default About;
