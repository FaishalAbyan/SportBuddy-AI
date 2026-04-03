import { useState, useRef, useEffect, useCallback } from 'react';
import { chatWithGemini } from '../services/geminiService';

/**
 * Custom Hook React untuk mengelola state chat dan interaksi dengan service.
 */
export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: 'Salam Olahraga! Saya **SportBuddy**, pelatih AI pribadimu. Ada yang bisa saya bantu untuk mencapai body goals atau menjawab pertanyaan seputar latihan dan nutrisi hari ini?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll ke bawah saat ada pesan baru
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSend = async (e = null, textOverride = null) => {
    if (e) e.preventDefault();
    const textToSend = textOverride || input;
    
    if (!textToSend.trim() || isLoading) return;

    // 1. Optimistic UI Update (Tambahkan UI secara langsung)
    const newMessages = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Persiapan Data (Abaikan pesan ucapan pembuka bot)
      const validMessages = newMessages.slice(1);
      const chatHistory = validMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      // Pisahkan pesan history dan chat current user
      const historyForGemini = chatHistory.slice(0, -1);
      const userMessageText = chatHistory[chatHistory.length - 1].parts[0].text;

      // 3. Eksekusi API via Service Layer
      const botReply = await chatWithGemini(historyForGemini, userMessageText);

      // 4. Update state dari Service Layer
      setMessages((prev) => [...prev, { role: 'model', text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev, 
        { role: 'model', text: `*[ERROR]*: ${error.message}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSend
  };
};
