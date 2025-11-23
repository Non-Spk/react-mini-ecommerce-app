import { useState } from "react";
import { colorTheme } from "@utils/colorTheme";
import MenuButton from "@components/Navbar/MenuButton";

export default function MenuBar() {
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