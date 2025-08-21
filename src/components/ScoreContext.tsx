import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ScoreContextType {
    score: number;
    increaseScore: (amount: number) => void;
    decreaseScore: (amount: number) => void;
}

export const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
    const [score, setScore] = useState(0);

    const increaseScore = (amount: number) => setScore((prev) => prev + amount);
    const decreaseScore = (amount: number) => setScore((prev) => Math.max(0, prev - amount));

    return (
        <ScoreContext.Provider value={{ score, increaseScore, decreaseScore }}>
            {children}
        </ScoreContext.Provider>
    );
};