
interface Props {
    className: string;

}

const About = ({ className } : Props) => {

    return (
        <div className={className}>
            <p>about</p>
        </div>
    )

}

export default About;