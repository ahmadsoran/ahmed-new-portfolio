import me from '../../assets/img/dev.jpg';
import { Button } from '@mui/material';
export default function ProjextCards() {
    const mouseEnterHandler = (e) => {
        e.currentTarget.classList.add('show-card-detail')
    }
    const mouseLeaveHandler = (e) => {
        e.currentTarget.classList.remove('show-card-detail')
    }



    return (
        <div className='grid mt-10 mb-3 grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="rounded-sm relative overflow-hidden ">
                <img className='object-cover w-full h-full card-img' src={me} alt="" />
                <div className="absolute flex flex-col items-center  p-2 justify-between  bottom-0 left-0 w-full rounded-t-lg card-detail">
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl my-3 lg:text-1xl xl:text-2xl text-white font-bold'>proj</h1>
                        <p className='text-xs sm:text-sm md:text-md lg:text-lg poppins-light  text-white '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum obcaecati numquam necessitatibus voluptas?
                        </p>
                    </div>
                    <Button sx={{
                        backgroundColor: '#ffffff3b',
                        color: '#000000',
                        borderRadius: '100px',
                        '&:hover': {
                            backgroundColor: '#ffffff',
                            color: '#000000',
                        }
                    }}>
                        See More
                    </Button>
                </div>
            </div>

        </div>
    )
}
