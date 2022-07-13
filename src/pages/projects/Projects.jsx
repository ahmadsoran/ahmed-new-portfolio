import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import WaveSvg from '../../components/WaveSvg';
import ProjextCards from './Projext-cards';

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {
            navigate('#projects');
        }
    }, [inView]) // eslint-disable-line
    return (
        <div ref={ref}>
            <WaveSvg />
            <div className=' bg-neutral-900 p-5 proj-shadow'>
                <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-semibold'>Projects</h1>
                <ProjextCards />
            </div>
            <WaveSvg down={true} />
        </div>

    )
}
