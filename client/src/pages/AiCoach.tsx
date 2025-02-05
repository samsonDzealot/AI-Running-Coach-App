import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChatMessage from "@/components/ChatMessage";
import { Send } from "lucide-react";

interface ChatForm {
  message: string;
}

const SAMPLE_CHAT = [
  {
    message: "Hi! I'm your AI running coach. How can I help you today?",
    isAI: true,
  },
  {
    message: "I want to improve my 5K time. Any tips?",
    isAI: false,
  },
  {
    message:
      "To improve your 5K time, focus on: 1) Interval training, 2) Proper form, 3) Regular rest days. Would you like a specific training plan?",
    isAI: true,
  },
];

export default function AiCoach() {
  const [messages, setMessages] = useState(SAMPLE_CHAT);
  const { register, handleSubmit, reset } = useForm<ChatForm>();

  const onSubmit = (data: ChatForm) => {
    setMessages([...messages, { message: data.message, isAI: false }]);
    // TODO: Implement actual AI chat
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          message: "I understand. Let me help you with that. What's your current fitness level?",
          isAI: true,
        },
      ]);
    }, 1000);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="h-[calc(100vh-8rem)] flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">AI Running Coach</h1>
          <p className="text-sm text-gray-500">Get personalized training advice</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} {...msg} />
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 border-t flex gap-2"
        >
          <Input
            {...register("message")}
            placeholder="Ask your running coach..."
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
}
