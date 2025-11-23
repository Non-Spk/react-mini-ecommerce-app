import { colorTheme } from "@utils/colorTheme";

interface MenuButtonProps {
    text: string;
    active: boolean;
    onClick: () => void;
    className?: string;
}

export default function MenuButton({ text, active, onClick }: MenuButtonProps) {
    return (
        <>
            <style>{`
                :root {
                    --textLight: ${colorTheme.textLight};
                    --background: ${colorTheme.background};
                    --focusRing: ${colorTheme.focusRing};
                }
            `}</style>
            <a
                onClick={onClick}
                className={`
                block px-4 py-2 rounded-md cursor-pointer transition-colors
                ${active ? "bg-(--focusRing) text-white" : "text-(--text) hover:bg-(--textLight)/20"}
            `}
            >
                {text}
            </a>
        </>
    );
};