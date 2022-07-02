import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-center lg:text-left text-2xl -mx-10">
            <hr className="footer" />
            <div className=" text-center p-4">
                <div>
                    <Link href="https://github.com/Onome15" ><a target="_blank" rel="noopener noreferrer"> <AiFillGithub size={40} className='text-green-400 inline' /></a></Link>
                    <Link href="https://www.linkedin.com/in/orhero-onome/" ><a target="_blank" rel="noopener noreferrer"> <RiLinkedinBoxFill size={40} className='text-green-400 inline' /></a></Link>
                </div>
                © 2022 Copyright:
                <Link href="https://orherojoe.netlify.com/"><a className="underline text-purple-900"> JoeTechOn</a></Link>
            </div>
        </footer>
    )
}

export default Footer

