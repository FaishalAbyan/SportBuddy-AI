import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_INSTRUCTION = "Anda adalah SportBuddy, asisten pakar olahraga yang energik, informatif, dan suportif. Gunakan gaya bahasa pelatih profesional. Berikan tips latihan praktis dan selalu ingatkan keselamatan.";

// Mengambil konfigurasi keamanan dari Vite (terdefinisi di `.env`)
const API_KEY = import.meta.env.VITE_API_KEY; 

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

/**
 * Service untuk menangani interaksi dengan Google Gemini API.
 */
export const chatWithGemini = async (chatHistoryForGemini, userMessageText) => {
  if (!API_KEY || !genAI) {
    throw new Error("API Key hilang atau kosong. Pastikan environment variable VITE_API_KEY telah di-set pada file .env.");
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: chatHistoryForGemini,
    });

    const result = await chat.sendMessage(userMessageText);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
