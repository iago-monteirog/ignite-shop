import { useContext } from "react";
import Image from "next/image";
import { HandbagBox, HeaderContainer } from "../../styles/components/header"
import { Handbag } from "@phosphor-icons/react";
import logoImg from '../../assets/logo.svg';
import { ShopBagContext } from "../../contexts/ShopBagContext";

export function Header() {
    const { toggleShopBag } = useContext(ShopBagContext);

    return (
        <HeaderContainer>
            <Image src={logoImg} alt="" />

            <HandbagBox onClick={toggleShopBag}>
                <Handbag size={24} weight='bold' color='#8D8D99' />
            </HandbagBox>
        </HeaderContainer>
    );
}