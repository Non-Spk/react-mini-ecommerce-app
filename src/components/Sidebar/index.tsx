import { startTransition, useEffect, useState } from "react";

import { categoryListServices } from "@/services/index";
import MenuButton from "@/components/Sidebar/MenuButton";
import type { categoryItem } from "@/interfaces/category";

export default function Sidebar() {
    const [categories, setCategories] = useState<categoryItem[]>([]);
    const [activeMenu, setActiveMenu] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await categoryListServices.getCategoryList();
                startTransition(() => {
                    setCategories(res.data);
                    if (res.data.length > 0) setActiveMenu(res.data[0].name);
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);

    return (
        <>
            <div className="w-64 bg-(--backgroundDark)/95 flex flex-col py-4 shadow-lg">
                <h2 className="text-lg font-bold text-(--text) mx-6 sticky top-0 z-10 px-2">
                    Categories
                </h2>
                <aside className="flex flex-col border-r border-(--border) p-4">
                    <div className="flex flex-col gap-1">
                        {categories.map((item) => (
                            <MenuButton
                                key={item.slug}
                                text={item.name}
                                active={activeMenu === item.name}
                                onClick={() => setActiveMenu(item.name)}
                            />
                        ))}
                    </div>
                </aside>
            </div>
        </>
    );
}
