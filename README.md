# E-commerce Integrado com Stripe

![image](https://github.com/iago-monteirog/ignite-shop/assets/53923329/0c16a969-bf96-4352-b91b-f9c94de29008)


## Descrição do Projeto

Este projeto foi desenvolvido como parte do curso Ignite Frontend da Rocketseat e representa um e-commerce totalmente integrado com as APIs do Stripe. O objetivo principal era criar uma aplicação web que permitisse aos usuários visualizar produtos, adicioná-los ao carrinho de compras e realizar pagamentos de forma segura.

## Funcionalidades Principais

- Cadastro de produtos com informações detalhadas, incluindo preço, nome, descrição e imagem.
- Exibição de produtos disponíveis para compra.
- Adição de produtos ao carrinho de compras.
- Integração completa com as APIs do Stripe para processamento de pagamentos.
- Server Side Rendering (SSR) para carregar dados do lado do servidor.
- Static Site Generation (SSG) para páginas de descrição de produtos.
- Comunicação eficiente com APIs usando Fetch API e Axios.
- Estilização responsiva com a biblioteca Stitches.
- Desenvolvido em Typescript com foco em Clean Code.

## Capturas de Tela

![image](https://github.com/iago-monteirog/ignite-shop/assets/53923329/21305aab-221c-4a6d-a51b-7aba36c7630f)
*Página inicial com produtos em destaque.*

![image](https://github.com/iago-monteirog/ignite-shop/assets/53923329/832d4e16-bebc-4b62-86b5-893c066b69ec)
*Página de descrição de um produto com detalhes completos.*

![image](https://github.com/iago-monteirog/ignite-shop/assets/53923329/48275a38-7338-4822-80be-742282e4c869)
*Carrinho de compras com itens adicionados.*

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado:

- Node.js
- NPM ou Yarn
- Stripe API Key (para integração de pagamento)

## Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/e-commerce-stripe.git
   
2. Acesse o diretório do projeto:
   ```bash
   cd e-commerce-stripe

3. Instale as dependências:
   ```bash
   npm install
    # ou
   yarn install

4. Configure suas Stripes API Key no arquivo .env.local:
   ```bash
   NEXT_PUBLIC_STRIPE_API_KEY=your_stripe_api_key_here
   NEXT_SECRET_STRIPE_API_KEY=your_stripe_api_key_here

5. Inicie o apliticativo:
   ```bash
   npm run dev
    # ou
   yarn dev

6. Abra seu navegador e acesse http://localhost:3000 para visualizar o aplicativo.

# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.
