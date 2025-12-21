import RatingStar from "@/components/RatingStar";

type Props = {
    rating?: number;
    size?: number;
};

export default function RatingStarList({ rating = 0, size = 16 }: Props) {
    const stars = Math.round(rating);
    return (
        <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, i) => i < stars).map((filled, idx) => (
                <RatingStar key={idx} filled={filled} size={size} />
            ))}
        </div>
    );
}
