import { IconButton } from "@mui/material";
import { MyProjects } from "../../app/My-Projects";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Clear, GitHub, Web } from '@mui/icons-material';
import Page from "../../components/Page";

export default function ProjectModal() {
    const param = useParams();
    const projectId = param.id;
    const project = MyProjects.find((project) => project?.id === projectId);
    const navigate = useNavigate();

    const backToProjects = () => {
        navigate('/#projects');
    }
    const url = window.location.href;

    return (
        <div onClick={backToProjects} className={`w-full h-full border-none focus-visible:outline-none fixed md:px-8 grid my-transition ${project ? 'z-50 opacity-100' : '-z-50 opacity-0'} place-items-center top-0 left-0  bg-neutral-900 bg-opacity-40 touch-none`}  >
            <Page title={project?.title}
                meta={<>
                    <link rel="apple-touch-icon" href={project?.image} />
                    <meta name="title" content={project?.title} />
                    <meta name="description"
                        content={project?.longDescription} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={url} />
                    <meta property="og:title" content={project?.title} />
                    <meta property="og:description"
                        content={project?.longDescription} />
                    <meta property="og:image" content={project?.image} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={url} />
                    <meta property="twitter:title" content={project?.title} />
                    <meta property=" twitter:description"
                        content={project?.longDescription} />
                    <meta property="twitter:image" content={project?.image} />
                </>}
            >





                <AnimatePresence exitBeforeEnter>

                    {
                        project && (


                            <motion.div
                                initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
                                style={{
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className="bg-neutral-900 w-full proj-modal relative" >
                                    <IconButton
                                        onClick={backToProjects}
                                        sx={{
                                            position: 'absolute',
                                            top: '2%',
                                            right: '2%',
                                            zIndex: '1',
                                            backgroundColor: '#ffffffd6',
                                        }}
                                    >
                                        <Clear />
                                    </IconButton>

                                    <div className="w-full proj-img overflow-hidden relative">
                                        <img className="w-full h-full object-cover " src={project?.image} alt={project?.title} />
                                        <div className="absolute felx items-center bottom-3 left-3">

                                            {
                                                project?.github && (
                                                    <IconButton
                                                        href={project?.github}
                                                        target="_blank"
                                                        sx={{
                                                            backgroundColor: '#ffffffd6',
                                                            boxShadow: '0 0 10px #00000054',
                                                            mr: 2,
                                                            "&:hover": {
                                                                backgroundColor: '#fff',
                                                            }
                                                        }}
                                                    >
                                                        <GitHub />
                                                    </IconButton>
                                                )
                                            }
                                            {
                                                project?.web && (
                                                    <IconButton
                                                        href={project?.web}
                                                        target="_blank"
                                                        sx={{

                                                            backgroundColor: '#ffffffd6',
                                                            boxShadow: '0 0 10px #00000054',
                                                            "&:hover": {
                                                                backgroundColor: '#fff',
                                                            }
                                                        }}
                                                    >
                                                        <Web />
                                                    </IconButton>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="p-4">

                                        <h1 className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl text-white font-semibold">
                                            {project?.title}
                                        </h1>
                                        <h1 className="text-sm sm:text-md md:text-lg my-4 lg:text-xl xl:text-1xl text-white poppins-light break-all">
                                            {project?.longDescription}
                                        </h1>
                                        <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-3">


                                            {
                                                project?.otherImages?.map((image, i) => {
                                                    return <img key={i.toString()} className="w-full h-full rounded-lg object-cover" src={image} alt={project?.title} />

                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence >
            </Page>
        </div>
    )

}
