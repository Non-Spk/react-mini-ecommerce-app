import Navbar from "../NavBar";

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-8">{children}</div>
        </div>
    );
}
