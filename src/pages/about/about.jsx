import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import devIMg from '../../assets/img/dev.jpg';
export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {
            navigate('#about');
        }
    }, [inView]) // eslint-disable-line
    const skillsList = [
        'Javascript',
        'HTML',
        'CSS & Sass & css frameworks',
        'React',
        'React Native',
        'State Management (Redux & Toolkit, Zustand ...)',
        'Frontend Libraries (React-router & Designs Librarys ...)',
        'Animations (framer-motion, Gsap ...)',
        'Git',
        'NodeJS',
        'Express',
        'MongoDB',
        'Backend Libraries (Auth, Validation ...)',
        'Swagger Documentation',
        'Adobe Photoshop',
    ]
    const yearsOfExperience = new Date().getFullYear() - 2020;

    return (
        <section ref={ref} className=' grid grid-cols-1 md:grid-cols-2 justify-center bg-neutral-900 rounded-lg overflow-hidden' id='about'>
            <div className="p-5 relative overflow-hidden">
                <img className='w-full h-full ab-img object-cover rounded-md ' loading='lazy' src={devIMg} alt="developer coding" />
                <div className="absolute md:bottom-3 bottom-3 md:left-0 left-1/2 md:translate-x-3 -translate-x-1/2 exp-shadow rounded-lg bg-neutral-800 w-44">
                    <div className="flex justify-evenly ">
                        <div className="bg-white  px-2 py-4">

                        </div>
                        <div className="bg-white  px-2 py-4">

                        </div>
                        <div className="bg-white  px-2 py-4">
                        </div>
                    </div>
                    <div className="p-8">
                        <h1 className='text-md md:text-xl line-H mb-3 lg:text-1xl xl:text-2xl text-white font-bold'>{yearsOfExperience} <br />Years of</h1>

                        <h1 className='text-md md:text-xl lg:text-1xl xl:text-2xl text-white font-bold'>Experiance</h1>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h1 className='text-lg md:text-1xl lg:text-2xl xl:text-4xl text-white font-bold'>
                    About Me
                </h1>
                <p className='text-xs sm:text-sm md:text-md lg:text-lg p-2 text-white break-words poppins-light'>
                    My name is Ahmed Soran Majeed. I am a full-stack web & app developer. I have a passion for creating beautiful and functional web & app.
                </p>
                <h1 className='text-lg md:text-1xl my-2 lg:text-2xl xl:text-4xl text-white  font-bold'>
                    Skills
                </h1>
                <div className="p-2">

                    {
                        skillsList.map((skill, index) => (
                            <p key={index} className='text-xs sm:text-sm md:text-md lg:text-lg text-orange-500 break-words text-left font-light text-opacity-100'>
                                {skill}
                            </p>
                        ))
                    }


                </div>
            </div>

        </section>
    )
}
