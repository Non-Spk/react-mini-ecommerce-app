import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";
import RightIcons from "@/components/RightIcons";

export default function Navbar() {
    return (
        <div>
            <nav className="dark w-full bg-(--bg-primary) text-(--text-primary) sticky top-0 z-50">
                <div className="flex items-center justify-between px-6 py-3">
                    <Logo />
                    <SearchBox />
                    <RightIcons />
                </div>
            </nav>
        </div>
    );
}
