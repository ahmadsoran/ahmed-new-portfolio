import { Button, FormControl, TextField } from "@mui/material";

export default function Form() {
    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <form onSubmit={submitForm} className="w-full">
            <FormControl sx={{ my: 3 }} variant="outlined" fullWidth>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <TextField
                        sx={{
                            my: 2,
                            'fieldset': {
                                borderColor: '#adadad7f'
                            },
                            'label': {
                                color: '#adadad7f'
                            },
                            'input': {
                                color: '#ffffffff'

                            }
                        }}
                        id="name" label="Name" variant="outlined" color='warning' />
                    <TextField
                        sx={{
                            my: 2,
                            'fieldset': {
                                borderColor: '#adadad7f',
                            },
                            'label': {
                                color: '#adadad7f'
                            },
                            'input': {
                                color: '#ffffffff'

                            }
                        }}
                        id="email" label="Email" variant="outlined" color='warning' />
                </div>

                <TextField sx={{
                    my: 2,
                    'fieldset': {
                        borderColor: '#adadad7f',
                    },

                    'label': {
                        color: '#adadad7f'
                    },
                    '& textarea': {
                        color: '#ffffffff'
                    }
                }} id="message" label="Message" variant="outlined" multiline color='warning' rows={4} />

                <div className="text-center">
                    <Button sx={{
                        backgroundColor: '#ff4900', color: '#fff', mr: 3,
                        fontSize: 'clamp(.9rem, 2vw, 1rem)',
                        marginTop: '3%',
                        borderRadius: '999px',
                        "&:hover": { backgroundColor: '#ff4900' }
                    }}
                        variant="contained" type="submit">
                        Send
                    </Button>
                </div>
            </FormControl>
        </form>
    )
}
