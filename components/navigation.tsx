"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [like, setLike] = useState(0);
    console.log(path);
    return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link> {path === "/" ? "🌈" : ""}
            </li>
            <li>
                <Link href="/about-us">About us</Link> {path === "/about-us" ? "🌈" : ""}
            </li>
            <li>like : &nbsp;
                <button onClick={() => setLike((l) => l + 1)}>{like}</button>
            </li>
        </ul>
    </nav>
    )
}