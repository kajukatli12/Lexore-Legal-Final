
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Lawyer Dashboard Pages
import LawyerMessages from "./pages/lawyer/LawyerMessages";
import LawyerPosts from "./pages/lawyer/LawyerPosts";
import LawyerAIChatbot from "./pages/lawyer/LawyerAIChatbot";
import LawyerProfile from "./pages/lawyer/LawyerProfile";

// Client Dashboard Pages
import ClientCreatePost from "./pages/client/ClientCreatePost";
import ClientMessages from "./pages/client/ClientMessages";
import ClientProfile from "./pages/client/ClientProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Lawyer Dashboard Routes */}
          <Route path="/lawyer/messages" element={<LawyerMessages />} />
          <Route path="/lawyer/posts" element={<LawyerPosts />} />
          <Route path="/lawyer/ai-chatbot" element={<LawyerAIChatbot />} />
          <Route path="/lawyer/profile" element={<LawyerProfile />} />
          
          {/* Client Dashboard Routes */}
          <Route path="/client/create-post" element={<ClientCreatePost />} />
          <Route path="/client/messages" element={<ClientMessages />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
