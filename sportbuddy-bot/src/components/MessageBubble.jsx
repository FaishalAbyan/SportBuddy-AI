import React from 'react';
import { User, Zap } from 'lucide-react';

/**
 * Komponen MessageBubble untuk merender percakapan user atau bot.
 * 
 * @param {Object} props
 * @param {Object} props.msg - Objek pesan { role: 'user' | 'model', text: string }
 * @param {boolean} props.isUser - true jika pengirim adalah user
 */
const MessageBubble = ({ msg, isUser }) => {
  // Fungsi helper untuk merender teks simpel secara HTML (basic Markdown formatting)
  const renderText = (text) => {
    return text.split('\n').map((line, i) => {
      // Buat strong text untuk markdown bintang tebal
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-sport-neon">$1</strong>');
      // Buat list items
      formattedLine = formattedLine.replace(/^\* (.*$)/gim, '<span class="ml-4 flex items-start gap-2"><span class="text-sport-neon font-bold">•</span><span>$1</span></span>');
      
      return (
        <span 
          key={i} 
          dangerouslySetInnerHTML={{ __html: formattedLine }} 
          className={`block ${line.trim() === '' ? 'mb-4' : 'mb-1'}`} 
        />
      );
    });
  };

  return (
    <div className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* ICON BUBBLE AVATAR */}
      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-md ${
        isUser ? 'bg-gray-700 text-white' : 'bg-sport-neon text-sport-dark'
      }`}>
        {isUser ? <User size={20} /> : <Zap size={20} className="fill-sport-dark" />}
      </div>
      
      {/* MESSAGE BUBBLE */}
      <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-xl ${
        isUser 
          ? 'bg-gray-800 text-white rounded-br-none border border-gray-700/50' 
          : 'bg-[#18181b] border-l-4 border-sport-neon rounded-bl-none border-t border-r border-b border-gray-800'
      }`}>
        <div className="text-sm md:text-md leading-relaxed selection:bg-sport-neon selection:text-sport-dark">
          {renderText(msg.text)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
