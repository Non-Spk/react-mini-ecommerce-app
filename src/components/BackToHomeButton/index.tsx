import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/")}
            className="px-4 py-2 border rounded cursor-pointer"
        >
            ← Back to Home
        </button>
    );
}
