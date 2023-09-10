import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1:{
        fontSize: '$2xl',
        color: '$gray100',
        marginTop: 48
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }

});

export const ImagesContainer = styled('div', {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '-3.25rem',
});

export const ImageBox = styled('div', {
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    padding: '0.25rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '-52px',
    

    img: {
        objectFit: 'cover'
    }
});