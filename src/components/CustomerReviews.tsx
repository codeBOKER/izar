
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    rating: 4.5,
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
    rating: 4.5,
    comment: "منتجات ذات جودة عالية وتلبي احتياجات السوق بشكل ممتاز. أنصح بها بشدة لكل تجار الجملة."
  }
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-red text-red" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-red text-red" />}
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  return (
    <div className="bg-softgray py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-2">آراء العملاء</h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تعرف على آراء عملائنا وشركاء أعمالنا في منتجات إزار وخدمات الشركة
          </p>
        </div>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="px-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="border border-red/10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={review.image} 
                            alt={review.customerName} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-darkblue">{review.customerName}</div>
                          <div className="text-sm text-gray-500">{review.role}</div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <RatingStars rating={review.rating} />
                      </div>
                      <p className="text-gray-700 text-right">{review.comment}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReviews;
