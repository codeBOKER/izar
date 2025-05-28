import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Review {
  id: number;
  customerName: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    customerName: "أحمد محمد",
    role: "تاجر جملة",
    image: "https://placehold.co/400x400/f7e6e8/af2734?text=أ",
    rating: 5,
    comment: "منتجات ممتازة وجودة فائقة، التوصيل كان سريع جداً والأسعار مناسبة للجميع. أنصح الجميع بالتعامل معهم."
  },
  {
    id: 2,
    customerName: "خالد سعيد",
    role: "صاحب متجر",
    image: "https://placehold.co/400x400/f7e6e8/af2734?text=خ",
    rating: 5,
    comment: "أفضل شركة للملابس الداخلية الرجالية، الأقمشة نوعيتها ممتازة والتصاميم عصرية ومريحة."
  },
  {
    id: 3,
    customerName: "عبدالله سالم",
    role: "موزع معتمد",
    image: "https://placehold.co/400x400/f7e6e8/af2734?text=ع",
    rating: 5,
    comment: "تعاملت مع شركة إزار لأكثر من 3 سنوات، أسعارهم منافسة وخدمة العملاء ممتازة."
  },
  {
    id: 4,
    customerName: "محمد ناصر",
    role: "مستورد",
    image: "https://placehold.co/400x400/f7e6e8/af2734?text=م",
    rating: 5,
    comment: "منتجات ذات جودة عالية وتلبي احتياجات السوق بشكل ممتاز. أنصح بها بشدة لكل تجار الجملة."
  }
];

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
                  <AvatarImage src={review.image} alt={review.customerName} />
                  <AvatarFallback className="bg-red-light text-red text-xl">
                    {review.customerName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="w-3/4 border-t border-gray-300/30 mb-4 mt-3 mx-auto" />
                <h3 className="font-bold text-red mb-0.5">{review.customerName}</h3>
                <p className="text-gray-500 text-xs mb-2">{review.role}</p>
                <div className="mb-4 mt-3">
                  <RatingStars rating={review.rating} />
                </div>
                <p className="text-gray-700 text-xs md:text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
