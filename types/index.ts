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


export interface ThemeParameters{
    type: string;
    bgColor: string;
    secondaryBackgroundColor: string;
    textColor: string;
    titleColor: string;
    paraColor: string;
    btnColor: string;
    btnTextColor: string;
    inputBgColor: string;
    iconColor: string;
}