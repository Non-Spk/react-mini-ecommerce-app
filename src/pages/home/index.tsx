import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useDefaultProductList } from "@/hooks";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
    const { result } = useDefaultProductList();
    const logged = useRef(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (!result) return;
        if (logged.current) return;

        console.log("Default Product List:", result);
        logged.current = true;
    }, [result]);

    useEffect(() => {
        if (selectedCategory) {
            console.log("Selected Category:", selectedCategory);
        }
    }, [selectedCategory]);

    return (
        <>
            <Navbar />
            <div className="flex flex-1">
                <div className="sticky top-0">
                    <Sidebar onCategoryChange={setSelectedCategory} />
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
