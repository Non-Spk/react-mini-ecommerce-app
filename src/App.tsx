import AppRouter from "@router/AppRouter";
import { colorTheme } from "@utils/colorTheme";

export default function App() {
    return (
        <>
            <style>{`
                :root {
                    --background: ${colorTheme.background};
                    --textDark: ${colorTheme.textDark};
                }
            `}</style>

            <div className="min-h-screen bg-(--background) text-(--textDark) flex flex-col">
                <AppRouter />
            </div>
        </>
    );
}
