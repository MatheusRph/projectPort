"use client";

import React from "react";
import { useTheme } from "./ThemProvider";

export default function Subtitle({ children, className, ...props }){
    const { theme, toggleTheme } = useTheme(); // Consome o tema e a função de alternar

    return(
        <>
            <p className="subtitle text-body-secondary" data-bs-theme={theme}>
                {children}
            </p>
        </>
    )
}