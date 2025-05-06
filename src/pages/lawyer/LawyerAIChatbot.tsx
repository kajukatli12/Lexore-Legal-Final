
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const LawyerAIChatbot = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  
  // Sample predefined messages for demo purposes
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'bot',
      content: 'Hello! I am your AI legal assistant. I can help you with information about Bhartiya Nyaya Sanhita and other legal matters. How can I assist you today?'
    }
  ]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatMessages(prev => [
      ...prev, 
      {
        role: 'user',
        content: message
      }
    ]);
    
    // Clear input
    setMessage('');
    
    // Show toast about Supabase
    toast({
      title: "Supabase Integration Required",
      description: "Please connect Supabase to enable full AI functionality.",
    });
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: "I'd need to connect to a real API to provide accurate information about Bhartiya Nyaya Sanhita. Once Supabase is integrated, I can help with specific legal references and advice."
        }
      ]);
    }, 1000);
  };

  return (
    <DashboardLayout userType="lawyer">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">AI Legal Assistant</h2>
        
        <Card className="h-[70vh] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
              Legal AI Assistant
            </CardTitle>
            <p className="text-sm text-gray-500">
              Ask questions about Bhartiya Nyaya Sanhita, legal procedures, case precedents, and more
            </p>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`rounded-lg p-3 max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-lawyer text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </CardContent>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input 
                placeholder="Ask about Bhartiya Nyaya Sanhita or other legal questions..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-lawyer hover:bg-lawyer-light">
                Send
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LawyerAIChatbot;
