import React from "react";
import { DarkThemeToggle } from "flowbite-react";

export function ThemeSwitcher() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <div className="border border-gray-300 rounded-sm h-full">
                <DarkThemeToggle />
            </div>
            <div className="h-full mt-2 flex flex-col justify-center items-center">
                <p className="text-sm md:text-md lg:text-lg capitalize font-light">
                    Theme
                </p>
            </div>
        </div>
    );
};