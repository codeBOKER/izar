import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
        />
      ))}
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/reviews/`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-4">نهتم بتجربة عملائنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            استمع إلى آراء عملائنا المميزين وتجربتهم مع منتجات إزار
          </p>
        </div>
        
        <div className="w-full py-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex flex-col items-center text-center p-4 pt-8 pb-8 md:p-7 bg-gray-50/60 rounded-lg min-h-[200px] md:min-h-[350px] shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                <Avatar className="w-12 md:w-16 h-12 md:h-16 mb-2">
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback className="bg-red-light text-red text-xl">
                    {review.name.charAt(0)} 
                  </AvatarFallback>
                </Avatar>
                <div className="w-3/4 border-t border-gray-300/30 mb-4 mt-3 mx-auto" />
                <h3 className="font-bold text-red mb-0.5">{review.name}</h3>
                <p className="text-gray-500 text-xs mb-2">{review.job_description}</p>
                <div className="mb-4 mt-3">
                  <RatingStars rating={review.review} />
                </div>
                <p className="text-gray-700 text-xs md:text-sm">{review.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
