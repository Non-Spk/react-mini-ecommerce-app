import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useDefaultProductList } from "@/hooks";
import { useEffect, useRef } from "react";

const HomePage = () => {
    const { result } = useDefaultProductList();
    const logged = useRef(false);

    useEffect(() => {
        if (!result) return;
        if (logged.current) return;

        console.log("Default Product List:", result);
        logged.current = true;
    }, [result]);

    return (
        <>
            <Navbar />
            <div className="flex flex-1">
                <div className="sticky top-0">
                    <Sidebar />
                </div>
                <main className="flex-1 p-6">
                    <div>
                        Home Page
                    </div>
                </main>
            </div>
        </>
    );
};

export default HomePage;
