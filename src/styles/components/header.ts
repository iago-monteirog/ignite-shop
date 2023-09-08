import { styled } from "..";

export const HeaderContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    position: 'relative'
});

export const HandbagBox = styled('button', {
    display: 'flex',
    padding: 12,
    alignItems: "center",
    gap: 12,

    borderRadius: 6,
    border: 0,
    background: '$gray800',
    cursor: 'pointer'
});

export const ItemQuantityIndicator = styled('div', {
    position: 'absolute',
    top: '30px',
    right: '-10px',

    backgroundColor: '$green500',
    border: '3px solid $gray900',
    borderRadius: '50%',

    display: 'flex',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 0 0',
    gap: 8,

    span: {
        color: '$white',
        fontSize: '0.875rem',
        fontWeight: 'bold'
    }
})