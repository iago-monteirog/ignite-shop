import { ReactNode, createContext, useState } from "react";

interface PriceIdProps {
    id: string,
    priceId: string
}

interface ShopBagContext {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    toggleShopBag: () => void,
}


export const ShopBagContext = createContext({} as ShopBagContext);

interface ShopBagProviderProps {
    children: ReactNode,
}

export function ShopBagProvider({ children }: ShopBagProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleShopBag = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ShopBagContext.Provider
            value={{
                isOpen,
                setIsOpen,
                toggleShopBag,
            }}
        >
            {children}
        </ShopBagContext.Provider>
    )

}