interface Props {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  timeSpan?: string;
  link?: string;
}

const Item = ({
  title,
  description,
  keywords,
  timeSpan,
  image,
  link,
}: Props) => {
  return (
    <div className="flex mt-10">
      {image && (
        <img src="https://picsum.photos/200/200" className="h-20" alt="" />
      )}

      {timeSpan && (
        <p className="text-slate-500 text-xs font-semibold mt-1 tracking-wide flex-grow">
          {timeSpan}
        </p>
      )}

      <div className="flex flex-col ml-5">
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-200 leading-tight hover:text-teal-300 inline-block "
          >
            {title}
          </a>
        </div>
        <p className="mt-2 text-sm text-slate-400 w-full">{description}</p>
        <div className="flex items-center flex-wrap">
          {keywords &&
            keywords.map((keyword) => (
              <p
                key={keyword}
                className="mr-2 mt-3 bg-teal-400/10 px-4 rounded-xl text-teal-300 text-xs leading-6 font-medium"
              >
                {keyword}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
