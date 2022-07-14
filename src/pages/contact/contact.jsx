import Form from "./Form";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Social from "./Social";
export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {
            navigate('#contact');
        }
    }, [inView]) // eslint-disable-line
    return (
        <div ref={ref} id='contact' className="p-5 bg-neutral-900">
            <h1 className="text-white text-center text-xl my-5 sm:text-1xl lg:text-2xl xl:text-3xl font-bold">Contact me</h1>
            <p className="poppins-light text-white text-center text-md  sm:text-lg lg:text-xl xl:text-1xl">
                Please provide your job or project details and I will get back to you as soon as possible.
            </p>
            <Form />
            <Social />
            <p className=" text-white text-xs md:text-sm lg:text-md text-center poppins-light">
                &copy; {new Date(Date.now()).getFullYear()} Ahmed Soran | All rights reserved.
            </p>
        </div>
    )
}
