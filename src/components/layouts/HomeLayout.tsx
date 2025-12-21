import Navbar from "@/components/NavBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-(--background) text-(--text)">
            <Navbar />
            <section className="flex flex-1">{children}</section>
        </div>
    );
}
