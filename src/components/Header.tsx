import SocialMedia from "./SocialMedia";

interface Props {
    className: string;
}

const Header = ({className} : Props) => {
    return (
        <div className={className}>
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Ion Chetraru</h1>
                <h2 className="text-xl font-medium text-slate-300 mt-4">Software Engineer</h2>
                <p className="text-base font-light mt-2 text-slate-300">Master of Computer Science and Engineering</p>
            </div>


            <SocialMedia className="flex items-center" />
        </div>
    )
}


export default Header;