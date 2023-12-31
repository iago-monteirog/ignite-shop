import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";
import { useContext } from "react";
import { ShopBagContext } from "../../contexts/ShopBagContext";

interface ProductProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: number,
        description: string,
        defaultPriceId: string,
        sku?: string,
        currency: string
    }
}

export default function Product({ product }: ProductProps) {
    const { addItem } = useShoppingCart();
    const { toggleShopBag } = useContext(ShopBagContext);

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price / 100);

    function handleAddToShoppingCart() {
        addItem(product);

        toggleShopBag();
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{formattedPrice}</span>

                    <p>{product.description}</p>
                    <button onClick={handleAddToShoppingCart}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_OZRfb6GjsKd5WT' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
                defaultPriceId: price.id,
                currency: price.currency
            }
        },
        revalidate: 60 * 60 * 1 // 1 hour
    }
}