import Item from "./Item";

interface Props {
    className?: string;
    name: string;
}


const Section = ({ className, name } : Props) => {
    return (
        <div className={className}>
            <h1>{name}</h1>
            <Item title="Build a spotify connected app" image="https://picsum.photos/200/300" description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more." keywords={["React", "express"]} />
        </div>
    )
}

export default Section;
