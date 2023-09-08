import { ReactNode, createContext, useState } from "react";

interface ShopBagContext {
    isOpen: boolean,
    toggleShopBag: () => void
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
                toggleShopBag
            }}
        >
            {children}
        </ShopBagContext.Provider>
    )

}