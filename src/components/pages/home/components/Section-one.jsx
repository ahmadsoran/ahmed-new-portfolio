import { Button, Icon } from '@mui/material';
import MyImg from '../../../../assets/img/me.png';
import scrollDownBorder from '../../../../assets/img/scrollborder.png';
import scrollDown from '../../../../assets/img/arrowDown.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function SectionOne() {
    return (
        <>
            <div className="p4 grid grid-cols-1 md:grid-cols-2 ">
                <div className="w-full pt-20 px-5 mb-16 md:mb-0 grid place-items-center md:flex md:flex-col ms:items-center">
                    <div className='grid place-items-center md:block'>

                        <div className="helloText w-fit text-white">
                            <h3 className="text-xs sm:text-sm md:text-md lg:text-lg ">Hello, I am </h3>
                        </div>
                        <h1 className="text-3xl text-center md:text-left sm:text-3xl md:text-4xl font-bold lg:text-5xl xl:text-7xl my-3 md:my-10 text-white">Ahmed Soran Majeed</h1>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg  text-center md:text-left text-white poppins-light md:my-5">From Kurdistan, full-stack web & app developer </p>
                        <div className="flex  items-center my-8 w-full justify-center md:justify-start">
                            <Button
                                sx={{
                                    backgroundColor: '#ff4900', color: '#fff', mr: 3,
                                    fontSize: 'clamp(.9rem, 2vw, 1rem)',
                                    padding: '2% 5%',
                                    "&:hover": { backgroundColor: '#ff4900' }
                                }}
                                className="text-9xl"
                            >Download CV</Button>
                            <Button sx={{
                                fontSize: 'clamp(.9rem, 2vw, 1rem)',

                                padding: '2% 5%',
                                backgroundColor: '#000', outline: 'solid 1px white', color: '#fff', "&:hover": { backgroundColor: '#ff4900', outline: 'none' }
                            }}>My Work</Button>

                        </div>
                    </div>
                </div>
                <div className="w-full relative">
                    <img className='filter-img' src={MyImg} alt='ahmed soran || احمد سؤران' />
                    <a className='absolute select-none w-10 left-0 bottom-0 ' referrerPolicy='no referrer' href='#about'>
                        <img className='w-full' src={scrollDownBorder} alt='scroll down to ahmed portfolio' />
                        <ArrowDownwardIcon className='absolute w-7 top-0 left-1/2 -translate-x-1/2  arrowScrollDownAnimation' color='error' alt='scroll arrow' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default SectionOne