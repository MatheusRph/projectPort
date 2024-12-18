"use client"

import { useEffect } from "react";

export default function BoostrapClient() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []); // Adicione um array vazio como dependência para garantir que isso só execute uma vez
}