import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GetProjectById from '../../feature/ProjectByID';
export default function ProjextCards(props) {
    const setProjectId = GetProjectById((state) => state.setProjectId);
    const mouseEnterHandler = (e) => {
        e.currentTarget.classList.add('show-card-detail')
    }
    const mouseLeaveHandler = (e) => {
        e.currentTarget.classList.remove('show-card-detail')


    }
    const navigate = useNavigate();
    const navigateToProject = () => {
        setProjectId(props.id);
        navigate('/' + props.id);
    }

    return (
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="rounded-sm  max-h-64 proj">
            <img className='object-cover w-full h-full  card-img' src={props.image} alt={props.title} />
            <div className="absolute flex flex-col items-center cursor-pointer p-2 justify-between  bottom-0 left-0 w-full rounded-t-lg card-detail">
                <div className='text-left w-full px-4'>
                    <h1 className='text-xl sm:text-2xl  text-white font-semibold'>
                        {props.title}
                    </h1>
                    <p className='text-sm mt-5 break-all sm:text-lg md:text-xl lg:text-1xl poppins-light  text-white '>
                        {props.description}
                    </p>
                </div>
                <Button sx={{
                    backgroundColor: '#ffffff3b',
                    color: '#000000',
                    borderRadius: '100px',
                    position: 'absolute',
                    bottom: '2%',
                    right: '50%',
                    transform: 'translateX(50%)',
                    '&:hover': {
                        backgroundColor: '#ffffff',
                        color: '#000000',
                    }
                }}
                    onClick={navigateToProject}
                >
                    See More
                </Button>
            </div>

        </div>
    )
}
