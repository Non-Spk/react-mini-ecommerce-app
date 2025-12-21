import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-(--border-color) text-(--text-primary) rounded hover:bg-(--bg-primary)/10 transition"
        >
            ← Back to Home
        </button>
    );
}
