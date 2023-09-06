import { X } from "@phosphor-icons/react";
import { ImageContainer, Product, ProductInfos, ProductsList, ShopBagContainer, ShopBagContent, ShopBagHeader } from "../../styles/components/shopbag";
import Link from "next/link";
import { useState } from "react";

interface ShopBagProps {
    isOpen: boolean,
    onToggleShopBag: (element: boolean) => void
}

export function ShopBag({ isOpen = false, onToggleShopBag }: ShopBagProps) {

    const toggleShopBag = () => {
        onToggleShopBag(!isOpen);
    }

    return (
        <ShopBagContainer style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
            <ShopBagHeader>
                <X size={24} weight="bold" color="#8D8D99" onClick={toggleShopBag} />
            </ShopBagHeader>

            <ShopBagContent>
                <h1>Sacola de compras</h1>

                <ProductsList>
                    <Product>
                        <ImageContainer>

                        </ImageContainer>

                        <ProductInfos>
                            <span>Camiseta Beyond the Limits</span>
                            <strong>R$ 79,90</strong>

                            <Link href="">Remover</Link>
                        </ProductInfos>
                    </Product>
                </ProductsList>
            </ShopBagContent>
        </ShopBagContainer>
    )
}