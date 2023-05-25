"use client";

import Sidebar from "@/components/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Kwaderno</title>
            </head>
            <body>
                <ChakraProvider>
                    <div className="App">
                        <Sidebar />
                        {children}
                    </div>
                </ChakraProvider>
            </body>
        </html>
    );
}
