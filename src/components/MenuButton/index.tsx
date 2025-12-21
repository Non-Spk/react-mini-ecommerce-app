interface MenuButtonProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

export default function MenuButton({ text, active, onClick }: MenuButtonProps) {
    return (
        <>
            <a
                className={active ? "px-3 bg-(--background)/10 rounded-md" : "hover:text-(--textLight) cursor-pointer"}
                onClick={onClick}
            >
                {text}
            </a>
        </>
    );
};