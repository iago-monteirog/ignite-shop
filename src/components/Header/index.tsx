import { useContext } from "react";
import Image from "next/image";
import { HandbagBox, HeaderContainer, ItemQuantityIndicator } from "../../styles/components/header"
import { Handbag } from "@phosphor-icons/react";
import logoImg from '../../assets/logo.svg';
import { ShopBagContext } from "../../contexts/ShopBagContext";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export function Header() {
    const { toggleShopBag } = useContext(ShopBagContext);
    const { cartCount } = useShoppingCart();

    return (
        <HeaderContainer>
            <Link href='/'>
                <Image src={logoImg} alt="" />
            </Link>

            <HandbagBox onClick={toggleShopBag}>
                <Handbag size={24} weight='bold' color='#8D8D99' />

                <ItemQuantityIndicator>
                    <span>{cartCount}</span>
                </ItemQuantityIndicator>
            </HandbagBox>
        </HeaderContainer>
    );
}