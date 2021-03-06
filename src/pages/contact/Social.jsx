import { Twitter, FacebookRounded, GitHub, Instagram } from '@mui/icons-material';
export default function Social() {
    const social = [
        {
            name: 'twitter',
            url: 'https://twitter.com/ahmadsorannn',
            Icon: Twitter
        },
        {
            name: 'facebook',
            url: 'https://www.facebook.com/ahmadSoranNn',
            Icon: FacebookRounded
        },
        {
            name: 'github',
            url: 'https://github.com/ahmadsoran',
            Icon: GitHub
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/0x_alkurdi_x0',
            Icon: Instagram
        }
    ]
    return (
        <>
            <h1 className='text-sm text-center text-white poppins-light md:text-md lg:text-lg xl:text-xl'>Find me on </h1>
            <div className="flex justify-center items-center">

                <div className="flex justify-evenly items-center p-2">
                    {
                        social?.map(({ name, url, Icon }) => (
                            <a className='p-4 text-white  hover:text-orange-600 transition-all' href={url} key={name}>
                                <Icon fontSize='large' />
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
