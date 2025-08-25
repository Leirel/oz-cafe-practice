import { createContext, useContext, useState } from 'react';
import data from "../assets/data";

const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menu, setMenu] = useState(data);

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
}
export function useMenu() {
    return useContext(MenuContext);
}