import { styled } from "..";

export const HeaderContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto'
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