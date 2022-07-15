import errimg from '../assets/img/404.svg';
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet-async';

function PAGE404() {
    const url = window.location.href;

    return (
        <main className="bg-white relative overflow-hidden h-screen ">
            <Helmet>
                <title>404 - Page Not Found</title>
                <link rel="icon" href="%PUBLIC_URL%/404.png" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/404.png" />
                <meta name="title" content="404 - Page Not Found" />
                <meta name="description"
                    content="404 - Page Not Found" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content="404 - Page Not Found" />
                <meta property="og:description"
                    content="404 - Page Not Found" />
                <meta property="og:image" content="%PUBLIC_URL%/404.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content="404 - Page Not Found" />
                <meta property=" twitter:description"
                    content="404 - Page Not Found" />
                <meta property="twitter:image" content="%PUBLIC_URL%/404.png" />


            </Helmet>
            <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
                    <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
                        <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
                            Sorry, this page isn&#x27;t available
                        </h1>

                        <Button
                            variant='contained'
                            href='/'
                            color='error'
                            sx={{ m: 2 }}
                        >
                            Go back home
                        </Button>

                    </div>
                    <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                        <img alt='404' src={errimg} />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default PAGE404