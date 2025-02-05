import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAI: boolean;
}

export default function ChatMessage({ message, isAI }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isAI ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isAI
            ? "bg-gray-100 text-gray-900"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
