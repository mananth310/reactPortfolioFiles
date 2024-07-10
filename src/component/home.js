import HeroImg from '../assets/hero.png';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare   } from "react-icons/fa";
import MyResumePdf from '../assets/myResume.pdf';
export const Home = () => {
  return ( 
    <section className='flex py-20 px-6 pg-secondary '>
        <div className='w-full md:w-1/2 '>
        <h1 className='text-primary font-bold text-xl md:text-2xl font-cinzel md:mt-20 md:ml-20'>
            Hi,<br/>
            I'm <span className='text-green-900 text-xl md:text-3xl' >ANANTH MURUGESAN </span>  <br/>
            <p className='md:text-2xl font-Satisfy '>I'm a Certified Full-stack Developer</p>
            <ul className='py-5 flex'>
                <li><a href='#' ><FaGithubSquare className=' transform hover:scale-125 hover:text-green-600'/></a></li>
                <li><a href='#'><FaFacebookSquare className=' transform hover:scale-125  hover:text-green-600'/></a></li>
                <li><a href='#'><FaLinkedin  className=' transform hover:scale-125  hover:text-green-600'/></a></li>
                <li><a href='#'><FaTwitterSquare  className=' transform hover:scale-125  hover:text-green-600'/></a></li>
            </ul>
        <a className='text-lg font-cinzel font-bold px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-800 ' target='_blank' href={MyResumePdf}>Download My Resume</a>
            
        </h1>
        
        </div>
        <img className='hidden md:block w-1/2 object-contain' src={HeroImg}></img>
    </section>
  )
}
