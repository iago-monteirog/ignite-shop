import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app';
import { ShopBag } from '../components/ShopBag';
import { CartProvider } from 'use-shopping-cart';
import { ShopBagProvider } from '../contexts/ShopBagContext';
import { Header } from '../components/Header';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  return (
    <ShopBagProvider>
      <CartProvider
        mode='payment'
        cartMode='client-only'
        stripe={process.env.STRIPE_PUBLIC_KEY}
        successUrl={successUrl}
        cancelUrl={cancelUrl}
        currency='BRL'
        allowedCountries={['BR']}
        billingAddressCollection={false}
        shouldPersist
      >
        <main className={roboto.className}>

          <Container>

            <Header />
            <ShopBag />

            <Component {...pageProps} />
          </Container>
        </main>
      </CartProvider>
    </ShopBagProvider>
  )
}
