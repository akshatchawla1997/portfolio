import { TfiInstagram, TfiGithub, TfiLinkedin } from "react-icons/tfi";

const SocialMediaIcons = () => {
    const instagramLink = `https://www.instagram.com/akichawla1997/`;
    const gitHubLink = `https://github.com/akshatchawla1997`;
    const linkedInLink = `https://www.linkedin.com/in/akshat-sd1/`;

    return (
        <ul className="fixed right-4 top-1/3 z-50 hidden flex-col gap-4 md:flex">
            <li className="group">
                <a
                    href={linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-full bg-slate-900/95 px-4 py-3 text-white shadow-xl transition hover:bg-sky-500 hover:text-slate-950"
                >
                    <TfiLinkedin className="h-5 w-5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>
            </li>
            <li className="group">
                <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-full bg-slate-900/95 px-4 py-3 text-white shadow-xl transition hover:bg-slate-700"
                >
                    <TfiGithub className="h-5 w-5" />
                    <span className="hidden sm:inline">GitHub</span>
                </a>
            </li>
            <li className="group">
                <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-full bg-slate-900/95 px-4 py-3 text-white shadow-xl transition hover:bg-pink-500"
                >
                    <TfiInstagram className="h-5 w-5" />
                    <span className="hidden sm:inline">Instagram</span>
                </a>
            </li>
        </ul>
    );
};

export default SocialMediaIcons;
