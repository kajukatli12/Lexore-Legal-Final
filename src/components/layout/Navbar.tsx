
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lawyer font-serif font-bold text-2xl">LEXORA</span>
          <span className="text-client text-lg">LEGAL</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "px-3 py-2 text-sm font-medium",
                location.pathname === "/" ? "text-lawyer" : "text-gray-600 hover:text-lawyer"
              )}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/features" className={cn(
                "px-3 py-2 text-sm font-medium",
                location.pathname === "/features" ? "text-lawyer" : "text-gray-600 hover:text-lawyer"
              )}>
                Features
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/how-it-works" className={cn(
                "px-3 py-2 text-sm font-medium",
                location.pathname === "/how-it-works" ? "text-lawyer" : "text-gray-600 hover:text-lawyer"
              )}>
                How It Works
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="border-lawyer text-lawyer hover:bg-lawyer hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-lawyer text-white hover:bg-lawyer-light">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
