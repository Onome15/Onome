import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-center lg:text-left text-2xl -mx-10">
            <hr className="footer" />
            <div className="text-center p-3 mb-4 foot">
                <ul className="text center">
                    <li className="inline-block">
                        <Link href="https://github.com/Onome15" >
                            <a target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>

                    <li className="inline-block">
                        <Link href="https://www.linkedin.com/in/orhero-onome/" >
                            <a target="_blank" rel="noopener noreferrer">
                                <RiLinkedinBoxFill size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>
                </ul>
                © 2022 Copyright:
                <Link href="https://orherojoe.netlify.com/"><a className="underline text-purple-900"> JoeTechOn</a></Link>
            </div>
        </footer>
    )
}

export default Footer

