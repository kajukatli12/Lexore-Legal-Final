import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  FileText, 
  User, 
  Users, 
  Pen,
  LogOut,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'lawyer' | 'client';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const location = useLocation();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to enable logout functionality.",
    });
  };

  const lawyerNavItems = [
    {
      icon: MessageSquare,
      label: 'Messages',
      path: '/lawyer/messages',
    },
    {
      icon: FileText,
      label: 'Posts',
      path: '/lawyer/posts',
    },
    {
      icon: Users,
      label: 'AI Chatbot',
      path: '/lawyer/ai-chatbot',
    },
    {
      icon: User,
      label: 'Profile',
      path: '/lawyer/profile',
    }
  ];

  const clientNavItems = [
    {
      icon: Pen,
      label: 'Create Post',
      path: '/client/create-post',
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      path: '/client/messages',
    },
    {
      icon: User,
      label: 'Profile',
      path: '/client/profile',
    }
  ];
  
  const navItems = userType === 'lawyer' ? lawyerNavItems : clientNavItems;
  const bgColor = userType === 'lawyer' ? 'bg-lawyer' : 'bg-client';
  const headerText = userType === 'lawyer' ? 'Lawyer Dashboard' : 'Client Dashboard';

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="px-6 py-4">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="text-lawyer font-serif font-bold text-xl">LEXORA</span>
            <span className="text-client text-sm">LEGAL</span>
          </Link>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                  location.pathname === item.path 
                    ? `${bgColor} text-white` 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
              
              <Link
                to="/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 mt-1"
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
      
      {/* Mobile Header - Only shows on small screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-lawyer font-serif font-bold">LEXORA</span>
            <span className="text-client text-xs">LEGAL</span>
          </Link>
          
          <Button variant="outline" size="sm">
            Menu
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${bgColor} text-white shadow-md`}>
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">{headerText}</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 mt-14 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
