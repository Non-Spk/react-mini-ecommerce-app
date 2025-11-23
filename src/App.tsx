import AppRouter from "@router/AppRouter";
import { colorTheme } from "@utils/colorTheme";
import Navbar from "@components/Navbar";

function App() {
    return (
        <>
            <style>{`
                :root {
                    --background: ${colorTheme.background};
                    --textDark: ${colorTheme.textDark};
                }
            `}</style>

            <div className="min-h-screen bg-(--background) text-(--textDark)">
                <Navbar />
                <AppRouter />
            </div>
        </>
    );
}

export default App;
