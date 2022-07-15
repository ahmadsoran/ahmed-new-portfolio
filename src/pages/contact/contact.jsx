import Form from "./Form";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Social from "./Social";
import Page from "../../components/Page";
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
        <Page title="Ahmed Soran | ئەحمەد سۆران" meta={
            <>

                <link rel="apple-touch-icon" href={"%PUBLIC_URL%/logo192.png"} />
                <meta name="title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta name="description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://ahmadsoran.com"} />
                <meta property="og:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property="og:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:image" content={"%PUBLIC_URL%/logo192.png"} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={"https://ahmadsoran.com"} />
                <meta property="twitter:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property=" twitter:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="twitter:image" content={"%PUBLIC_URL%/logo192.png"} />
            </>}>

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
        </Page>
    )
}
