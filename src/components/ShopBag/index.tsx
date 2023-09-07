import { X } from "@phosphor-icons/react";
import { ImageContainer, Product, ProductInfos, ProductsList, PurchaseSummaryContainer, Quantity, ShopBagContainer, ShopBagContent, ShopBagHeader, Total } from "../../styles/components/shopbag";
import Link from "next/link";
import Image from "next/image";
import camiseta from '../../assets/1.png';

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
                            <Image src={camiseta} alt="" width={94} height={94} />
                        </ImageContainer>

                        <ProductInfos>
                            <span>Camiseta Beyond the Limits</span>
                            <strong>R$ 79,90</strong>

                            <Link href="">Remover</Link>
                        </ProductInfos>
                    </Product>

                    <Product>
                        <ImageContainer>
                            <Image src={camiseta} alt="" width={94} height={94} />
                        </ImageContainer>

                        <ProductInfos>
                            <span>Camiseta Beyond the Limits</span>
                            <strong>R$ 79,90</strong>

                            <Link href="">Remover</Link>
                        </ProductInfos>
                    </Product>

                    <Product>
                        <ImageContainer>
                            <Image src={camiseta} alt="" width={94} height={94} />
                        </ImageContainer>

                        <ProductInfos>
                            <span>Camiseta Beyond the Limits</span>
                            <strong>R$ 79,90</strong>

                            <Link href="">Remover</Link>
                        </ProductInfos>
                    </Product>
                </ProductsList>

                <PurchaseSummaryContainer>
                    <Quantity>
                        <span>Quantidade</span>
                        <span>3 itens</span>
                    </Quantity>

                    <Total>
                        <strong>Valor total</strong>
                        <strong>R$ 270,00</strong>
                    </Total>

                    <button>Finalizar compra</button>
                </PurchaseSummaryContainer>
            </ShopBagContent>
        </ShopBagContainer>
    )
}