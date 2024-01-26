interface Props {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
}


const Item = ({ title, description, keywords } : Props) => {

    return (
        <div>
            <h1>{title}</h1>
            <div className="flex">
                <img src="https://picsum.photos/200/200" className="h-20" alt="" />
                <p>{description}</p>        
                {keywords && (
                    <div key={title}>
                        {keywords.map((keyword) => (
                            <p>{keyword}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Item;