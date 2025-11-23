import { colorTheme } from "@utils/colorTheme";

interface SearchBoxProps {
    search: string;
    setSearch: (value: string) => void;
}
export default function SearchBox({ search, setSearch }: SearchBoxProps) {
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