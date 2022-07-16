import Form from "./Form";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Social from "./Social";
import Page from "../../components/Page";
import { CopyAllTwoTone, DoneTwoTone } from '@mui/icons-material';
export default function Contact() {
    const [IsCopy, setIsCopy] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {
            navigate('#contact');
        }
    }, [inView]) // eslint-disable-line
    useEffect(() => {
        if (IsCopy) {
            var timeOutCopy = setTimeout(() => {
                setIsCopy(false)
            }, 2000)
        }
        return () => {
            clearTimeout(timeOutCopy)
        }
    }, [IsCopy]) // eslint-disable-line
    const copyToClipboard = (e) => {
        e.preventDefault();
        if (navigator.clipboard) {
            navigator.clipboard.writeText('ahmadsorann1@gmail.com').then(() => {
                setIsCopy(true)
            })
        } else {
            const myEmail = document.getElementById('my-email');
            myEmail.select();
            if (document.execCommand('copy')) {
                setIsCopy(true)
            }
        }
    }
    return (
        <Page title="Ahmed Soran | ئەحمەد سۆران" meta={
            <>

                <link rel="apple-touch-icon" href={"/logo192.png"} />
                <meta name="title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta name="description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://ahmadsoran.com"} />
                <meta property="og:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property="og:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:image" content={"/logo192.png"} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={"https://ahmadsoran.com"} />
                <meta property="twitter:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property=" twitter:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="twitter:image" content={"/logo192.png"} />
            </>}>

            <div ref={ref} id='contact' className="p-5 bg-neutral-900">
                <h1 className="text-white text-center text-xl my-5 sm:text-1xl lg:text-2xl xl:text-3xl font-bold">Contact me</h1>
                <p className="poppins-light text-white text-center text-md  sm:text-lg lg:text-xl xl:text-1xl">
                    Please provide your job or project details and I will get back to you as soon as possible.
                </p>
                <div onClick={copyToClipboard} className="flex justify-center item-center mt-5 cursor-pointer">
                    {
                        navigator.clipboard ?
                            <h4 className="text-white text-center text-md  sm:text-lg lg:text-xl xl:text-1xl font-bold">
                                ahmadsorann1@gmail.com
                            </h4> :
                            <input disabled id="my-email" className="text-white text-center text-md copy-inp sm:text-lg lg:text-xl xl:text-1xl font-bold" type="text" value='ahmadsorann1@gmail.com' placeholder="ahmadsorann1@gmail.com" />

                    }

                    {
                        IsCopy ? <DoneTwoTone className="text-green-500 text-center text-md  sm:text-lg lg:text-xl xl:text-1xl  mx-2" />
                            :
                            <CopyAllTwoTone className="text-white text-center text-md  sm:text-lg lg:text-xl xl:text-1xl mx-2" />
                    }
                </div>
                <Form />
                <Social />
                <p className=" text-white text-xs md:text-sm lg:text-md text-center poppins-light">
                    &copy; {new Date(Date.now()).getFullYear()} Ahmed Soran | All rights reserved.
                </p>
            </div>
        </Page>
    )
}
