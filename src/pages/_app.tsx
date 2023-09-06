import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg';
import { Container, HandbagBox, Header } from '../styles/pages/app';
import Image from 'next/image';
import { Handbag } from '@phosphor-icons/react';
import { ShopBag } from '../components/ShopBag';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggleShopBag() {
    setIsOpen(!isOpen);
  }

  return (
    <main className={roboto.className}>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <HandbagBox onClick={handleToggleShopBag}>
            <Handbag size={24} weight='bold' color='#8D8D99' />
          </HandbagBox>

        </Header>

        <ShopBag isOpen={isOpen} onToggleShopBag={handleToggleShopBag} />
        <Component {...pageProps} />
      </Container>
    </main>
  )
}
