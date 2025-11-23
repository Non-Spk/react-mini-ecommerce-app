import { useState } from "react";
import { colorTheme } from "@utils/colorTheme";

// ---------- Logo ----------
const Logo = () => {
    const logoText = "BLUESHOP.";
    return (
        <>
            <style>{`
                :root {
                    --logoColor: ${colorTheme.logo};
                }
            `}</style>
            <div className="flex items-center gap-2">
                <span className="text-(--logoColor) text-2xl font-bold">{logoText}</span>
            </div>
        </>
    );
};

// ---------- Search Box ----------
interface SearchBoxProps {
    search: string;
    setSearch: (value: string) => void;
}
const SearchBox = ({ search, setSearch }: SearchBoxProps) => {
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Search:", search);
    };

    return (
        <>
            <style>{`
                :root {
                    --backgroundSearchBox: ${colorTheme.backgroundSearchBox};
                    --textLight: ${colorTheme.textLight};
                    --border: ${colorTheme.border};
                    --focusRing: ${colorTheme.focusRing};
                }
            `}</style>
            <form onSubmit={handleSearch} className="flex-1 flex justify-center">
                <div className="w-1/3">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-(--backgroundSearchBox)
                        text-(--text) rounded-md px-4 py-2 border border-(--border)
                        outline-none focus:ring-2 focus:ring-(--focusRing)"
                    />
                </div>
            </form>
        </>
    );
};

// ---------- Right Icons ----------
const RightIcons = () => {
    return (
        <>
            <style>{`
                :root {
                    --textLight: ${colorTheme.textLight};
                    --text: ${colorTheme.text};
                    --background: ${colorTheme.background};
                }
            `}</style>
            <div className="flex items-center gap-4">
                <button
                    className="text-(--textLight) hover:text-(--text) p-2 rounded-full hover:bg-(--background)/10 transition-colors"
                >
                    <img src="/images/icons8-cart-100.png" className="w-6 h-6" />
                </button>
                <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            </div>
        </>
    );
};


// ---------- Menu Button ----------
interface MenuButtonProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

const MenuButton = ({ text, active, onClick }: MenuButtonProps) => {
    return (
        <>
            <style>{`
                :root {
                    --textLight: ${colorTheme.textLight};
                    --background: ${colorTheme.background};
                }
            `}</style>
            <a
                className={active ? "px-3 bg-(--background)/10 rounded-md" : "hover:text-(--textLight) cursor-pointer"}
                onClick={onClick}
            >
                {text}
            </a>
        </>
    );
};

// ---------- Menu Bar ----------
const MenuBar = () => {
    const menuItems = ["Dashboard", "Team", "Projects", "Calendar", "Settings"];
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    return (
        <>
            <style>{`
                :root {
                    --border: ${colorTheme.border};
                }
            `}</style>
            <div className="flex gap-6 px-6 py-2 border-t border-(--border)">
                {menuItems.map((item) => (
                    <MenuButton
                        key={item}
                        text={item}
                        active={activeMenu === item}
                        onClick={() => setActiveMenu(item)}
                    />
                ))}
            </div>
        </>
    );
};

// ---------- Navbar ----------
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
