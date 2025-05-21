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
          className={`w-4 h-4 ${i < rating ? "fill-red text-red" : "text-gray-300"}`} 
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
        
        <div className="w-full py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex flex-col items-center text-center p-4 md:p-6 bg-softgray rounded-lg border border-gray-100"
              >
                <Avatar className="w-16 md:w-24 h-16 md:h-24 mb-4">
                  <AvatarImage src={review.image} alt={review.customerName} />
                  <AvatarFallback className="bg-red-light text-red text-2xl">
                    {review.customerName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-bold text-lg mb-1">{review.customerName}</h3>
                <p className="text-gray-500 text-sm mb-3">{review.role}</p>
                
                <div className="mb-4">
                  <RatingStars rating={review.rating} />
                </div>
                
                <p className="text-gray-700 text-sm md:text-base">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
