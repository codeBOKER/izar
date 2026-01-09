
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shirt, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return ( <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
  <div className="container mx-auto px-4">
    <div className="flex h-16 items-center justify-between">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="شعار" className="h-10 w-auto" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          { name: "الرئيسية", path: "/" },
          { name: "المنتجات", path: "/products" },
          { name: "عن الشركة", path: "/about" },
          { name: "اتصل بنا", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="
              relative
              text-sm font-medium text-foreground
              transition-colors duration-300
              hover:text-primary
              after:absolute after:right-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-primary
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="القائمة"
              className="text-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-background border-l border-border pt-12"
          >
            <nav className="flex flex-col gap-6 text-right">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "المنتجات", path: "/products" },
                { name: "عن الشركة", path: "/about" },
                { name: "اتصل بنا", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="
                    text-lg font-semibold text-foreground
                    hover:text-primary transition-colors
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  </div>
</header>

  );
};

export default Header;
