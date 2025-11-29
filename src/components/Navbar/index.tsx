import { useState } from "react";
import Logo from "@/components/Navbar/Logo";
import SearchBox from "@/components/SearchBox";
import RightIcons from "@/components/Navbar/RightIcons";
import MenuBar from "@/components/Navbar/MenuBar";

export default function Navbar() {
    const [search, setSearch] = useState("");
    return (
        <>
            <nav className="w-full bg-(--backgroundDark) text-(--text) sticky top-0 z-50">
                <div className="flex items-center justify-between px-6 py-3">
                    <Logo />
                    <SearchBox search={search} setSearch={setSearch} />
                    <RightIcons />
                </div>
                <MenuBar />
            </nav>
        </>
    );
}
