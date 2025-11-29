// import { categoryListServices } from "@/services/index";
// import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomePage = () => {
    // const callCategoryList = async () => {
    //     const categoryList = await categoryListServices.getCategoryList().then(res => res.data).catch(err => console.log(err));
    //     console.log(categoryList)
    // }

    // useEffect(() => {
    //     callCategoryList();
    // })

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
    )
}

export default HomePage