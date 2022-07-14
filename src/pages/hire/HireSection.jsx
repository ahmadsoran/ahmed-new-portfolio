import { Button } from "@mui/material";

export default function HireSection() {
    return (
        <div className='hire-bg '>
            <div className="bg-neutral-900 grid place-items-center content-center w-full p-5  hire-sec bg-opacity-70">
                <h4 className="poppins-light text-white text-md  sm:text-lg lg:text-xl xl:text-1xl">
                    have a project in Mind?
                </h4>
                <h1 className="text-white text-md sm:text-xl my-5 sm:text-1xl lg:text-2xl xl:text-3xl font-bold">
                    i'm available for freelancing or full-time
                </h1>
                <Button
                    sx={{
                        backgroundColor: '#ff4900', color: '#fff', mr: 3,
                        fontSize: 'clamp(.9rem, 2vw, 1rem)',
                        marginTop: '3%',
                        "&:hover": { backgroundColor: '#ff4900' }
                    }}

                    href="#contact"

                >Hire Me</Button>
            </div>
        </div>
    )
}
