export default {
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        }
    },
    spreadThis: {
        typography: {
            useNextVariants: true
        },
        form: {
            textAlign: "center"
        },
        image: {
            margin: "10px auto 0px auto",
            height: 200
        },
        pageTitle: {
            margin: "10px auto 10px auto"
        },
        textField: {
            margin: "10px auto 10px auto"
        },
        button: {
            marginTop: 20,
            position: "relative"
        },
        customError: {
            color: "red",
            fontSize: "0.8rem",
            marginTop: 5
        },
        progress: {
            position: "absolute"
        },
        paper: {
            padding: 20
        },
        profile: {
            '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative',
                '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                }
            },
            '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                    verticalAlign: 'middle'
                },
                '& a': {
                    color: '#00bcd4'
                }
            },
            '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
            },
            '& svg.button': {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
        buttons: {
            textAlign: 'center',
            '& a': {
                margin: '20px 10px'
            }
        },
        paperActivity: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        formPaper: {
            padding: '10vh 10vh',
            width: '50vh',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
}