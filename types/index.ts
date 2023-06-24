import React, { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface NavbarLinks{
    id: number;
    icon: React.ReactNode;
    title: string;
    url: string;
}