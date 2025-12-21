export default function RightIcons() {
    return (
        <>
            <div className="flex items-center gap-4">
                <button
                    className="text-(--text-secondary) hover:text-(--text-primary) p-2 rounded-full hover:bg-(--bg-primary)/10 transition-colors"
                >
                    <img src="/images/icons8-cart-100.png" className="w-6 h-6" />
                </button>
                <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            </div>
        </>
    );
};