
interface StarRatingProps {
    vote_average: number;
}

function StarRating({ vote_average }: StarRatingProps) {
    const filledStars = Math.round(vote_average / 2); // Each star represents 2 points
    const totalStars = 5;


    const stars = Array.from({ length: totalStars }, (_, index) =>
        index < filledStars ? "⭐️" : ""
    );
    return (
        <div className="flex text-yellow-500 text-xl">
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}

export default StarRating;