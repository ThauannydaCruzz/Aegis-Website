
import React from 'react';
import { Info, Shield, Sparkles } from 'lucide-react';

export type MessageType = 'user' | 'bot' | 'insight' | 'tip';

export interface ChatMessageProps {
  message: string;
  type: MessageType;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type, timestamp }) => {
  const time = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (type === 'user') {
    return (
      <div className="flex flex-col items-end mb-4">
        <div className="bg-aegis-purple rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] break-words">
          <p className="text-white">{message}</p>
        </div>
        <span className="text-xs text-white/50 mt-1">{time}</span>
      </div>
    );
  }

  let icon = <Sparkles className="w-4 h-4 text-aegis-purple" />;
  let bgColor = "bg-white/10";
  
  if (type === 'insight') {
    icon = <Info className="w-4 h-4 text-aegis-purple" />;
    bgColor = "bg-aegis-purple/10";
  } else if (type === 'tip') {
    icon = <Shield className="w-4 h-4 text-aegis-purple" />;
    bgColor = "bg-aegis-purple/10";
  }

  return (
    <div className="flex flex-col items-start mb-4">
      <div className={`flex items-start ${bgColor} backdrop-blur-md rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] break-words`}>
        <div className="mr-2 mt-1">{icon}</div>
        <div>
          <p className="text-white">{message}</p>
        </div>
      </div>
      <span className="text-xs text-white/50 mt-1">{time}</span>
    </div>
  );
};

export default ChatMessage;
