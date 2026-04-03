import React from 'react';
import { Send } from 'lucide-react';

/**
 * Komponen Input Chat Form.
 * 
 * @param {Object} props
 * @param {string} props.input - Nilai input teks yang diikat state
 * @param {Function} props.setInput - Setter function untuk input
 * @param {boolean} props.isLoading - Indikasi proses pengiriman pesan berjalan
 * @param {Function} props.handleSend - Handler saat form disubmit
 */
const ChatInput = ({ input, setInput, isLoading, handleSend }) => {
  return (
    <form onSubmit={(e) => handleSend(e)} className="relative flex w-full group">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        className="w-full bg-[#161618] border border-gray-700 text-white rounded-full py-3.5 pl-6 pr-14 focus:outline-none focus:border-sport-neon focus:ring-1 focus:ring-sport-neon/50 transition-all font-medium placeholder-gray-500 shadow-inner group-hover:border-gray-600 disabled:opacity-75 disabled:cursor-not-allowed"
        placeholder="Tanya tentang latihan spesifik, diet, nutrisi, olahraga..."
        autoComplete="off" 
      />
      <button 
        type="submit" 
        disabled={isLoading || !input.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-sport-neon text-sport-dark rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:bg-sport-neon disabled:scale-100 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(57,255,20,0.2)]"
      >
        <Send size={18} className="translate-x-[1px]" />
      </button>
    </form>
  );
};

export default ChatInput;
