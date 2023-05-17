import { createContext } from "react";

interface Common {
    value: number;
    setValue: (value: number) => void;
}

// Creating context
export const CommonContext = createContext<Common>({
    value: 0,
    setValue: () => {}
});
