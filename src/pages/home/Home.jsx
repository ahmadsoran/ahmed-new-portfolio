import { Button } from '@mui/material';
import MyImg from '../../assets/img/me.png';
import scrollDownBorder from '../../assets/img/scrollborder.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useStore from '../../feature/NavFixedSlice';
import Page from '../../components/Page';

function Home() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const setPosition = useStore((state) => state.setPosition)

    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {

            navigate('#');
            setPosition(false)
        }
    }, [inView])  // eslint-disable-line

    return (
        <Page title="Ahmed Soran | ئەحمەد سۆران" meta={
            <>

                <link rel="apple-touch-icon" href={"https://ahmadsoran.com/logo192.png"} />
                <meta name="title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta name="description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://ahmadsoran.com"} />
                <meta property="og:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property="og:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="og:image" content={"https://ahmadsoran.com/logo192.png"} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={"https://ahmadsoran.com"} />
                <meta property="twitter:title" content={"Ahmed Soran | ئەحمەد سۆران"} />
                <meta property=" twitter:description" content={"hey, my name is ahmed soran from kurdistan i'm full-stack web & app developer | سڵاو من ناوم ئەحمەد سۆرانە خەڵکی کوردستانم، پەرەپئدەری وێبسایت و ئەپم"} />
                <meta property="twitter:image" content={"https://ahmadsoran.com/logo192.png"} />
            </>}>

            <div ref={ref} className="p4 grid grid-cols-1 md:grid-cols-2 ">
                <div className="w-full pt-20 px-5 mb-16 md:mb-0 grid place-items-center md:flex md:flex-col ms:items-center">
                    <div className='grid place-items-center md:block'>

                        <div className="helloText w-fit text-white">
                            <h3 className="text-xs sm:text-sm md:text-md lg:text-lg ">Hello, I am </h3>
                        </div>
                        <h1 className="text-2xl text-center md:text-left sm:text-3xl md:text-4xl font-bold lg:text-5xl xl:text-7xl my-3 md:my-10 text-white">Ahmed Soran Majeed</h1>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg  text-center md:text-left text-white poppins-light md:my-5">From Kurdistan, full-stack web & app developer </p>
                        <div className="flex  items-center my-8 w-full justify-center md:justify-start">
                            <Button
                                sx={{
                                    backgroundColor: '#ff4900', color: '#fff', mr: 3,
                                    fontSize: 'clamp(.9rem, 2vw, 1rem)',
                                    outline: 'solid 1px #ff4800f3',
                                    "&:hover": { backgroundColor: '#ff4900', outline: 'none' }
                                }}
                                className="text-9xl"
                                href="https://drive.google.com/file/d/1xnGa72tBljLLevn2S49u_INQY3SGmh_Z/view?usp=sharing"
                                target="_blank"

                            >Download CV</Button>
                            <Button sx={{
                                fontSize: 'clamp(.9rem, 2vw, 1rem)',
                                backgroundColor: '#000', outline: 'solid 1px white', color: '#fff', "&:hover": { backgroundColor: '#ff4900', outline: 'none' }
                            }}
                                href='#projects'
                            >My Work</Button>

                        </div>
                    </div>
                </div>
                <div className="w-full relative">
                    <img className='filter-img' src={MyImg} alt='ahmed soran || احمد سؤران' />
                    <a className='absolute select-none w-10 hidden md:block left-0 bottom-0 ' referrerPolicy='no referrer' href='#about'>
                        <img className='w-full' src={scrollDownBorder} alt='scroll down to ahmed portfolio' />
                        <ArrowDownwardIcon className='absolute w-7 top-0 left-1/2 -translate-x-1/2  arrowScrollDownAnimation' color='error' alt='scroll arrow' />
                    </a>
                </div>
            </div>
        </Page>

    )
}

export default Home