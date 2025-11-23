import { useState } from "react";
import { colorTheme } from "@utils/colorTheme";
import Logo from "@components/Navbar/Logo";
import SearchBox from "@components/Navbar/SearchBox";
import RightIcons from "@components/Navbar/RightIcons";
import MenuBar from "@components/Navbar/MenuBar";

export default function Navbar() {
    const [search, setSearch] = useState("");
    return (
        <>
            <style>{`
                :root {
                    --backgroundDark: ${colorTheme.backgroundDark};
                    --text: ${colorTheme.text};
                }
            `}</style>
            <nav className="w-full bg-(--backgroundDark) text-(--text)">
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
