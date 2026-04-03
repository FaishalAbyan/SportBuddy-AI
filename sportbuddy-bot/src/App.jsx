import React from 'react';
import Header from './components/Header';
import MessageBubble from './components/MessageBubble';
import ChatInput from './components/ChatInput';
import QuickPrompts from './components/QuickPrompts';
import { useChat } from './hooks/useChat';

function App() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    messagesEndRef,
    handleSend
  } = useChat();

  return (
    <div className="h-screen w-full flex flex-col bg-sport-dark text-gray-200 font-sans overflow-hidden">
      
      {/* HEADER COMPONENT */}
      <Header />

      {/* CHAT SESSION AREA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-2 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <MessageBubble key={index} msg={msg} isUser={msg.role === 'user'} />
          ))}
          
          {/* ANIMASI LOADING GEMINI */}
          {isLoading && (
            <div className="flex items-end gap-3">
               <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-sport-neon flex-shrink-0 flex items-center justify-center shadow-md text-sport-dark animate-pulse">
                  {/* Using direct svg for Zap since it's an inline loading animation */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-sport-dark"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div className="bg-[#18181b] border-l-4 border-sport-neon rounded-2xl rounded-bl-none p-4 shadow-xl h-[52px] flex items-center justify-center">
                  <div className="flex gap-1.5 items-center justify-center px-1">
                    <div className="w-2.5 h-2.5 bg-sport-neon rounded-full animate-[bounce_1s_infinite_-0.3s]"></div>
                    <div className="w-2.5 h-2.5 bg-sport-neon rounded-full animate-[bounce_1s_infinite_-0.15s]"></div>
                    <div className="w-2.5 h-2.5 bg-sport-neon rounded-full animate-[bounce_1s_infinite]"></div>
                  </div>
                </div>
            </div>
          )}
          
          {/* Element pemancing scroll bottom */}
          <div ref={messagesEndRef} className="h-1" />
        </div>
      </main>

      {/* FOOTER & INPUT FIELD BOX */}
      <footer className="bg-[#101012] border-t border-gray-800 p-4 shrink-0 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-3.5 relative">
          
          {/* Quick Starter Prompts COMPONENT */}
          <QuickPrompts isLoading={isLoading} handleSend={handleSend} />

          {/* Form Chat COMPONENT */}
          <ChatInput 
            input={input} 
            setInput={setInput} 
            isLoading={isLoading} 
            handleSend={handleSend} 
          />

        </div>
      </footer>
    </div>
  );
}

export default App;
