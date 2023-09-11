import { createContext, useContext } from "react";

interface EvoContextValue {
    id: string | number[] | undefined;
    changeEvo: (evoId: string | number[]) => void;
}

export const EvoContext = createContext<EvoContextValue | undefined>(undefined)

export function useEvoContext() {
    const evoId = useContext(EvoContext)
    if (evoId === undefined) {
        throw new Error("UseUserContext must be with a Dashboard Context")
    }

    return evoId;
}