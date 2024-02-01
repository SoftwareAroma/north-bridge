"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) return null;

    console.log("theme here >>>> ", theme);

    return (
        <Switch
            defaultSelected = {theme == "dark"}
            size="lg"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={
                () => {
                    setTheme(theme == "dark" ? "light" : "dark");
                    // console.log(theme);
                    // alert(`This feature is not yet implemented. ${theme}`);
                }
            }
        >
            {theme == "dark" ? "Dark" : "Light"}
        </Switch>
    );
};