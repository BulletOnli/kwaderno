"use client";

import Sidebar from "@app/components/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const hideSidebar = pathname === "/login";

    return (
        <html lang="en">
            <head>
                <title>Kwaderno</title>
            </head>
            <body>
                <ChakraProvider>
                    <div className="App">
                        {!hideSidebar && <Sidebar />}
                        {children}
                    </div>
                </ChakraProvider>
            </body>
        </html>
    );
}
