import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import WaveSvg from '../../components/WaveSvg';
import ProjextCards from './Projext-cards';
import { MyProjects } from '../../app/My-Projects';
import Page from '../../components/Page';
import { Button } from '@mui/material';
export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const [ViewMore, setViewMore] = useState(6)
    const navigate = useNavigate();
    useEffect(() => {
        if (inView) {
            navigate('#projects');
        }
    }, [inView]) // eslint-disable-line
    const handleViewMore = () => {
        if (ViewMore < MyProjects.length) {
            setViewMore(ViewMore + 2)
        }

    }
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
            <div ref={ref}>

                <WaveSvg />
                <div className=' bg-neutral-900 p-5 proj-shadow'>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-semibold'>Projects</h1>
                    <div className='grid mt-10 mb-3 grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-3'>

                        {MyProjects.slice(0, ViewMore).map((project) => {
                            return <ProjextCards
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}

                            />
                        }
                        )}
                    </div>
                    <div className="w-full grid p-2 justify-center items-center">
                        {
                            ViewMore < MyProjects.length && (

                                <Button sx={{
                                    backgroundColor: '#ff4900', color: '#fff',
                                    fontSize: 'clamp(.9rem, 2vw, 1rem)',
                                    borderRadius: '999px',
                                    "&:hover": { backgroundColor: '#ff804e' }
                                }}
                                    onClick={handleViewMore}
                                    variant="contained" >
                                    View {
                                        MyProjects.length - ViewMore > 0 ? `${MyProjects.length - ViewMore}` : ''
                                    } more
                                </Button>
                            )
                        }
                    </div>
                </div>

                <WaveSvg down={true} />
            </div>
        </Page>

    )
}
