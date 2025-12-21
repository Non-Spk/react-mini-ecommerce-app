import { useState } from "react";
import MenuButton from "@/components/MenuButton";

export default function MenuBar() {
    const navLinks = ["Home", "Promotions / Deals", "New Arrivals / Best Sellers", "Favorites"];
    const optionalExtras = ["TH", "EN"];
    const [activeNavLinks, setActiveNavLinks] = useState("Home");
    const [activeOptionalExtras, setActiveOptionalExtras] = useState("TH");

    return (
        <>
            <div className="flex justify-between px-6 py-2 border-t border-(--border)">
                <div className="flex gap-6">
                    {navLinks.map((item) => (
                        <MenuButton
                            key={item}
                            text={item}
                            active={activeNavLinks === item}
                            onClick={() => setActiveNavLinks(item)}
                        />
                    ))}
                </div>
                <div className="flex gap-6">
                    {optionalExtras.map((item) => (
                        <MenuButton
                            key={item}
                            text={item}
                            active={activeOptionalExtras === item}
                            onClick={() => setActiveOptionalExtras(item)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
