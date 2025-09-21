interface Testimonial {
  name: string;
  title: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

interface StarRatingProps {
  rating: number;
  className?: string;
}

// Star Icon Component
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-6 h-6 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Star Rating Component
const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, title, text, rating, avatarUrl } = testimonial;
  return (
    <div className="relative flex-shrink-0 w-[400px] md:w-[450px] bg-[#121212] border border-gray-800 rounded-2xl pl-4 pr-12 py-6 text-white space-y-6">
      <div className="flex items-center space-x-2">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src='https://placehold.co/100x100/EFEFEF/333?text=??';
            }
          }
        />
        <div>
          <h3 className="font-bold text-sm tracking-wide">{name}</h3>
          <p className="text-xs text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-gray-300 text-xs leading-relaxed">
        {text}
      </p>
      <StarRating rating={rating} />
    </div>
  );
};

export default TestimonialCard;