import { useState } from 'react';

import { ChatbotPage } from '@pages/chatbot/ChatbotPage';
import { DashboardPage } from '@pages/dashboard/DashboardPage';
import { TransactionEntryPage } from '@pages/transaction-entry/TransactionEntryPage';

export function BlankPage() {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'transaction' | 'chatbot'>(
    'dashboard',
  );

  if (activeScreen === 'chatbot') {
    return <ChatbotPage onBack={() => setActiveScreen('transaction')} />;
  }

  if (activeScreen === 'transaction') {
    return (
      <TransactionEntryPage
        onOpenChatbot={() => setActiveScreen('chatbot')}
        onOpenDashboard={() => setActiveScreen('dashboard')}
      />
    );
  }

  return <DashboardPage onOpenTransaction={() => setActiveScreen('transaction')} />;
}
