import React, { useState } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const ReviewsAndRatings = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John D.', rating: 4, comment: 'Great service, comfortable seats. Would ride again!', date: '2023-07-15' },
    { id: 2, user: 'Sarah M.', rating: 5, comment: 'Excellent journey, on time and very clean bus.', date: '2023-07-10' },
    { id: 3, user: 'Mike R.', rating: 3, comment: 'Decent ride, but could improve on punctuality.', date: '2023-07-05' },
  ]);

  const [sortBy, setSortBy] = useState('latest');
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'highest') return b.rating - a.rating;
    if (sortBy === 'lowest') return a.rating - b.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReviewObj = {
      id: reviews.length + 1,
      user: 'Anonymous',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([...reviews, newReviewObj]);
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 mb-12 mt-20 ">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reviews & Ratings</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-4xl font-bold text-yellow-500">{averageRating.toFixed(1)}</span>
            <span className="text-2xl text-gray-600">/5</span>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className={`w-6 h-6 ${star <= Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <p className="text-gray-600">Based on {reviews.length} reviews</p>
      </div>

      <div className="mb-6">
        <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
        <select
          id="sort"
          className="border rounded p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      <div className="space-y-4 mb-8">
        {sortedReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FaUserCircle className="w-8 h-8 text-gray-400 mr-2" />
                <span className="font-semibold">{review.user}</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className={`w-5 h-5 ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-sm text-gray-400">{review.date}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Rating:</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-2 text-gray-700">Comment:</label>
            <textarea
              id="comment"
              className="w-full border rounded p-2"
              rows="4"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;