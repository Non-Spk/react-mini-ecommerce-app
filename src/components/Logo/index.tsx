export default function Logo() {
    const logoText = "BLUESHOP.";
    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-(--logo-color) text-2xl font-bold">{logoText}</span>
            </div>
        </>
    );
};