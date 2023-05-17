import React from "react";

// A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks
export const useMaxValue = (firstValue: number, secondValue: number) : number => {
    return firstValue >= secondValue ? firstValue : secondValue;
}
