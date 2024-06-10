"use client"
import { Button, useColorMode } from "@chakra-ui/react";

export default function Toggle() {
    const { colorMode, setColorMode } = useColorMode();

    const handleLightChange = () => {
        setColorMode("light");
    }

    const handleDarkChange = () => {
        setColorMode("dark");
    }

    return (
        <div className="handle">
            <Button
                onClick={handleDarkChange}
                isDisabled={colorMode === "dark"}
                className={colorMode === "dark" ? "darkClick" : "darkClick"}>
                Dark
            </Button>
            <Button
                onClick={handleLightChange}
                isDisabled={colorMode === "light"}
                className={colorMode === "light" ? "lightClick" : "lightClick"}>
                Light
            </Button>

        </div>
    );
}
