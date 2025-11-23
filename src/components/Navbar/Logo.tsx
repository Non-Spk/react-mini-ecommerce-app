import { colorTheme } from "@utils/colorTheme";

export default function Logo() {
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