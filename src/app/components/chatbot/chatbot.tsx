"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import AskAssistant from "@/component/ui/text";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Merriweather, Sour_Gummy} from 'next/font/google';

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin'] , weight :['900']})

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });};

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
   
      <div className="fixed bottom-6 right-2 z-50 w-15 h-16 rounded-full bg-gradient-to-r from-pink-500 via-black to-purple-500 shadow-2xl shadow-yellow-900 border-none" >
       <Button onClick={() => setIsOpen(!isOpen)} >
          
          {isOpen ? <FaTimesCircle color="white" className="mt-7 text-primary " /> : <AiOutlineWechat  size={58} color="white"  className=" mt-8 text-4xl" /> }
         <div className="fixed bottom-20 right-2 mb-2"> <AskAssistant /></div> </Button></div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed lg:right-32 lg:bottom-20 portrait:bottom-28 w-9/12 h-[450px] z-30 border border-purple-500/60 bg-black rounded-2xl shadow overflow-hidden flex flex-col portrait:w-full portrait:h-[570]">

       <div className="p-4 border-b border-primary/10 bg-gradient-to-r from-[#080B38] via-[#130101] to-[#080B38] bg-opacity-45 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"><Bot className="w-5 h-5 text-pink-400"/> </div>
            <div>

              <h3 className={`${merrweight.className} font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent`}>AI Assistant</h3>
              <p className={`${sour_gummy.className} text-xs text-purple-400 flex items-center gap-1`}>Online  
               <span className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: "#7af57c" }}></span></p>
            </div>
          </div>

         
          <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-2xl max-w-[80%] ${sour_gummy.className} ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-[#080B38] via-[#130101] to-[#080B38] text-purple-400 leading-relaxed rounded-tr-lg "
                      : "rounded-bl-md bg-gradient-to-r from-[#080B38] via-[#130101] to-[#080B38] text-white"
                  }`}
                >
                    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: (props) => (
          <p style={{marginBottom: '0.5rem'}} {...props} />
        ),
        strong: (props) => (
          <strong style={{fontWeight: '600'}} {...props} />
        ),
        ul: (props) => (
          <ul style={{marginLeft: '1.5rem', listStyleType: 'disc'}} {...props} />
        ),
      }}
    >
      {message.text}
    </ReactMarkdown>
    <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && <p className="text-sm  text-white/90">💭</p>}
            <div ref={messagesEndRef} /></div>

          {/* Input */}
          <div className="p-4 border-t border-primary/10 text-white/90 bg-black flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 border border-purple-500/60"
            />
            <Button onClick={sendMessage} disabled={!inputValue.trim() || isLoading}><Send className="w-10 h-10 text-purple-400" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
