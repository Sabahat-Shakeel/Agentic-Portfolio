"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today? Are you interested in sending a message to Sabahat, perhaps about project details?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

const API_URL = "/api/chat";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          timestamp: new Date().toISOString(),
          userId: "dashboard-user",
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
       console.error('Error sending message to webhook:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I can't connect right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed animate-bounce bottom-6 right-2 z-50 outline-[#ef4e39] outline-4 outline-dashed rounded-full bg-[#ef4e39]">
       
        <Button
          
          onClick={() => setIsOpen(!isOpen)}
          className="border-none"
         
        >
          
          {isOpen ? <X className="w-6 h-6 text-primary " /> : <MessageCircle className="w-6 h-6 text-primary " />}

          <span className="absolute -top-6  right-12 translate-x-1/2 px-2 py-1 text-xs font-medium text-white/80 bg-[#ef4e39] rounded-br-full opacity-0 hover:opacity-100 transition-opacity">
      Ask Assistant
    </span>
        </Button>

       
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20  portrait:w-96  portrait:h-[800px] md:right-6 w-10/12 h-[450px] z-40 border-2 border-[#ef4e39] bg-black rounded-2xl shadow overflow-hidden flex flex-col ">
          {/* Header */}
          <div className="p-4 border-b border-primary/10 bg-black flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#72ff74]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#72ff74] ">AI Assistant</h3>
              <p className="text-xs text-white/65 flex items-center gap-1">Online  
               <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: "#7af57c" }}></span>
               </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-[#ef4e39] text-white/90 rounded-br-md "
                      : " text-white/90 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && <p className="text-sm text-white/90">💭</p>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/10 text-white/90 bg-black flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 border border-[#72ff74]"
            />
            <Button onClick={sendMessage} disabled={!inputValue.trim() || isLoading}>
              <Send className="w-10 h-10 " />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
