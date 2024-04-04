import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from "ai/react";

export function Chatbot() {
  const { messages, input, setInput, handleInputChange, handleSubmit } = useChat();
  const [preMessages, setPreMessages] = useState([
    // Array of pre-sent messages with wait time (in milliseconds)
    { content: "Hello!", delay: 6000 }, // 6 seconds delay
    { content: "How can I assist you?", delay: 12000 }, // 12 seconds delay
    // Add more pre-sent messages as needed
  ]);

  useEffect(() => {
    // Send pre-sent messages with delay
    preMessages.forEach((message, index) => {
      setTimeout(() => {
        setInput(message.content);
      }, message.delay);
    });
  }, []); // Ensure this effect runs only once on component mount

  return (
    <div className="h-96 w-full max-w-[700px] ">
      <div className="flex flex-col h-full ">
        <div className="flex-grow rounded-lg border p-4">
          {messages.map((m, index) => (  
            <p className="whitespace-pre-line" key={index}>
              {m.content}
            </p>
          ))}
        </div>
        <div className="flex items-center p-2">
          <form className="flex-1" onSubmit={handleSubmit}>
            <Input placeholder="Type your message here..." value={input} onChange={handleInputChange}  />
          </form>
          <Button className="ml-2" type="submit" >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
