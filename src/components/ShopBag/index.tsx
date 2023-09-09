import { X } from "@phosphor-icons/react";
import { ImageContainer, Product, ProductInfos, ProductsList, PurchaseSummaryContainer, Quantity, RemoveItemButton, ShopBagContainer, ShopBagContent, ShopBagHeader, Total } from "../../styles/components/shopbag";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useContext, useEffect, useState } from "react";
import { ShopBagContext } from "../../contexts/ShopBagContext";
import axios from "axios";

interface CartProps {
    id: string,
    imageUrl: string,
    formattedPrice: string,
    name: string,
    value: string,
    quantity: number
}

export function ShopBag() {
    const { cartCount, cartDetails, totalPrice, removeItem } = useShoppingCart();
    const { isOpen, toggleShopBag } = useContext(ShopBagContext);
    const [productsToBuy, setProductsToBuy] = useState<CartProps[]>([]);
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);


    useEffect(() => {
        const formatedCartDetails = Object.keys(cartDetails).map((productId) => ({
            id: cartDetails[productId].id,
            imageUrl: cartDetails[productId].imageUrl,
            formattedPrice: cartDetails[productId].formattedPrice,
            name: cartDetails[productId].name,
            value: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(cartDetails[productId].value / 100),
            quantity: cartDetails[productId].quantity
        }));

        setProductsToBuy(formatedCartDetails);
    }, [cartDetails]);

    useEffect(() => {
        if (cartCount === 0) {
            onToggleShopBag();
        }
    }, [cartCount])

    const onToggleShopBag = () => {
        toggleShopBag()
    }

    const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(totalPrice / 100);

    async function handleBuyProducts() {
        try {
            setIsCreatingCheckoutSession(true);

            const payload = productsToBuy.map((product) => ({
                priceId: product.id,
                quantity: product.quantity
            }));

            const response = await axios.post('/api/checkout', {
                payload,
            });

            console.log(response.data);

            setIsCreatingCheckoutSession(false)

        } catch (error) {
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    function handleRemoveItem(id: string) {
        removeItem(id);
    }

    return (
        <ShopBagContainer style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
            <ShopBagHeader>
                <X size={24} weight="bold" color="#8D8D99" onClick={onToggleShopBag} />
            </ShopBagHeader>

            <ShopBagContent>
                <h1>Sacola de compras</h1>

                <ProductsList>
                    {productsToBuy.map((product) => {
                        return (
                            <Product key={product.id}>
                                <ImageContainer>
                                    <Image src={product.imageUrl} alt="" width={94} height={94} />
                                </ImageContainer>

                                <ProductInfos>
                                    <span>{product.name}</span>
                                    <strong>{product.quantity > 1 ? product.value : product.formattedPrice}</strong>

                                    <RemoveItemButton onClick={() => handleRemoveItem(product.id)}>
                                        Remover
                                    </RemoveItemButton>
                                </ProductInfos>
                            </Product>
                        )
                    })}
                </ProductsList>

                <PurchaseSummaryContainer>
                    <Quantity>
                        <span>Quantidade</span>
                        <span>{cartCount} itens</span>
                    </Quantity>

                    <Total>
                        <strong>Valor total</strong>
                        <strong>{formattedTotalPrice}</strong>
                    </Total>

                    <button
                        disabled={isCreatingCheckoutSession}
                        onClick={handleBuyProducts}
                    >
                        Finalizar compra
                    </button>
                </PurchaseSummaryContainer>
            </ShopBagContent>
        </ShopBagContainer>
    )
}