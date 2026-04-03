import React from 'react';
import { Activity, Flame, Utensils } from 'lucide-react';

/**
 * Komponen QuickPrompts yang menampilkan daftar tombol teks instan.
 * 
 * @param {Object} props
 * @param {boolean} props.isLoading - Menonaktifkan klik kalau sedang memuat balasan 
 * @param {Function} props.handleSend - Trigger pengiriman teks tanpa memasukkan string manual di input
 */
const QuickPrompts = ({ isLoading, handleSend }) => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1 -mx-2 px-2 md:-mx-0 md:px-0">
      <button 
        onClick={() => handleSend(null, "Berikan tips dan jadwal lari 5K untuk pemula yang benar.")}
        disabled={isLoading}
        className="whitespace-nowrap text-xs bg-sport-gray hover:bg-gray-800 border border-sport-neon/30 hover:border-sport-neon text-gray-300 py-1.5 px-3 rounded-full flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <Activity size={14} className="text-sport-neon group-hover:scale-110 transition-transform" /> Tips Lari 5K
      </button>
      <button 
        onClick={() => handleSend(null, "Buatkan rutinitas latihan dada intens di rumah tanpa alat.")}
        disabled={isLoading}
        className="whitespace-nowrap text-xs bg-sport-gray hover:bg-gray-800 border border-sport-neon/30 hover:border-sport-neon text-gray-300 py-1.5 px-3 rounded-full flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <Flame size={14} className="text-sport-neon group-hover:scale-110 transition-transform" /> Latihan Dada di Rumah
      </button>
      <button 
        onClick={() => handleSend(null, "Buatkan rekomendasi menu diet dan makanan terbaik untuk atlet dalam fase bulking.")}
        disabled={isLoading}
        className="whitespace-nowrap text-xs bg-sport-gray hover:bg-gray-800 border border-sport-neon/30 hover:border-sport-neon text-gray-300 py-1.5 px-3 rounded-full flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <Utensils size={14} className="text-sport-neon group-hover:scale-110 transition-transform" /> Menu Diet Atlet
      </button>
    </div>
  );
};

export default QuickPrompts;
