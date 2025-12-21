import { useNavigate, useLocation } from "react-router-dom";
import { useHomePageProducts } from "@/hooks/useHomePageProducts";

export default function SearchBox() {
    const navigate = useNavigate();
    const location = useLocation();
    const { search, handleSearch } = useHomePageProducts();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (location.pathname === "/") {
            handleSearch(search ?? "");
        } else {
            navigate(`/?search=${encodeURIComponent(search ?? "")}`);
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex-1 flex justify-center">
            <div className="w-1/3">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search ?? ""}
                    onChange={onChange}
                    className="w-full dark bg-(--bg-secondary) text-(--text-secondary) rounded-md px-4 py-2 border border-(--border-color) outline-none focus:ring-2 focus:ring-(--focus-ring)"
                />
            </div>
        </form>
    );
}
