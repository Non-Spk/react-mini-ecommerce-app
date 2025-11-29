import { useDefaultCategoryList } from "@/hooks";
import MenuButton from "@/components/Sidebar/MenuButton";

type SidebarProps = {
    onCategoryChange?: (category: string) => void;
};

export default function Sidebar({ onCategoryChange }: SidebarProps) {
    const { categories, activeMenu, setActiveMenu } = useDefaultCategoryList();

    return (
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
                            onClick={() => {
                                setActiveMenu(item.name);
                                onCategoryChange?.(item.name);
                            }}
                        />
                    ))}
                </div>
            </aside>
        </div>
    );
}