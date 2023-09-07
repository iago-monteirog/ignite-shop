import { styled } from "..";

export const ShopBagContainer = styled('main', {
    background: '$gray800',
    boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vw', 
    width: '33.33%', 
    transform: 'translateX(100%)', 
    transition: 'transform 0.3s ease-in-out', 
    zIndex: 999, 
    padding: '24px 48px',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column'
});

export const ShopBagHeader = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer'

});

export const ShopBagContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,

    h1: {
        fontSize: '1.25rem',
        fontWeight: "bold",
        lineHeight: 1.6,
    }
});

export const ProductsList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 24
});

export const Product = styled('div', {
    display: 'flex',
    gap: 24,
    alignItems: 'center'
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 102,
    height: 93,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
});

export const ProductInfos = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 2,

    span: {
        fontSize: '1.125rem',
        color: '$gray300',
        lineHeight: 1.6
    },
    strong: {
        fontSize: '1.125rem',
        fontWeight: "bold",
        lineHeight: 1.6,
        marginTop: 2
    },

    a: {
        fontSize: '1rem',
        fontWeight: "bold",
        textDecoration: 'none',
        color: '$green500',
        marginTop: 8
    }

});

export const PurchaseSummaryContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 96,

    button: {
        marginTop: 57,
        display: 'flex',
        padding: '20px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,

        borderRadius: 8,
        border: 0,
        background: '$green500',
        color: '$white',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300'
        }
    }
});

export const Quantity = styled('div', {
    display: "flex",
    justifyContent: 'space-between'
});

export const Total = styled('div', {
    display: "flex",
    justifyContent: 'space-between',
    marginTop: 7,

    'strong:last-child': {
        fontSize: '$xl'
    }
});