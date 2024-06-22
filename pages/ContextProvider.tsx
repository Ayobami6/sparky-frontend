import React, { createContext, useState, useContext, FC } from 'react';

// Define the shape of the context value
interface AppContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType>({
    open: false,
    setOpen: (value: boolean) => {
        console.log(`Context set to ${value}`);
        open: value;
    },
});

type Props = {
    children: React.ReactNode;
};

// Create a provider component
export const ContextProvider: FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleSetOpen = (isOpen: boolean) => {
        setOpen(isOpen);
    };

    return (
        <AppContext.Provider value={{ open, setOpen }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};
