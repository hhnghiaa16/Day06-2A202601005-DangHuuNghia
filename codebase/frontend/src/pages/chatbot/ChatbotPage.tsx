import {
  ArrowLeftOutlined,
  BarChartOutlined,
  DollarOutlined,
  LineChartOutlined,
  PieChartOutlined,
  SendOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import type { FormEvent } from 'react';

import './chatbot.css';

const watermarkIcons = [
  WalletOutlined,
  DollarOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
];

function WatermarkPattern() {
  return (
    <div className="chatbot-watermarks" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, index) => {
        const Icon = watermarkIcons[index % watermarkIcons.length];
        return (
          <span className="chatbot-watermark-icon" key={index}>
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

function AvaAvatar() {
  return (
    <div className="ava-avatar" aria-label="AVA">
      <div className="ava-avatar-ear ava-avatar-ear-left" />
      <div className="ava-avatar-ear ava-avatar-ear-right" />
      <div className="ava-avatar-face">
        <span className="avatar-eye" />
        <span className="avatar-eye" />
        <span className="avatar-smile" />
      </div>
    </div>
  );
}

function TopBar({ onBack }: { onBack?: () => void }) {
  return (
    <header className="chatbot-top-bar">
      <button className="back-button" type="button" aria-label="Back" onClick={onBack}>
        <ArrowLeftOutlined />
      </button>
      <h1>Ghi Chép Thu Chi</h1>
      <AvaAvatar />
    </header>
  );
}

function AvaRobot() {
  return (
    <div className="ava-robot-large" aria-label="AVA robot">
      <div className="robot-light" />
      <div className="robot-ear robot-ear-left" />
      <div className="robot-ear robot-ear-right" />
      <div className="robot-head">
        <div className="robot-face">
          <span className="robot-eye" />
          <span className="robot-eye" />
          <span className="robot-mouth" />
        </div>
      </div>
      <div className="robot-arm robot-arm-left" />
      <div className="robot-arm robot-arm-right" />
      <div className="robot-neck" />
      <div className="robot-body">
        <span>AVA</span>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <section className="chatbot-main">
      <AvaRobot />
      <p>Bắt đầu ghi chép thu nhập và chi tiêu của bạn</p>
    </section>
  );
}

function ChatInputForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="chat-message">
        Nhập nội dung ghi chép hoặc câu hỏi
      </label>
      <input
        id="chat-message"
        name="message"
        type="text"
        placeholder="Nhập khoản thu chi hoặc câu hỏi..."
      />
      <button type="submit" aria-label="Gửi tin nhắn">
        <SendOutlined />
      </button>
    </form>
  );
}

type ChatbotPageProps = {
  onBack?: () => void;
};

export function ChatbotPage({ onBack }: ChatbotPageProps) {
  return (
    <main className="chatbot-page">
      <div className="chatbot-screen">
        <WatermarkPattern />
        <TopBar onBack={onBack} />
        <MainContent />
        <ChatInputForm />
      </div>
    </main>
  );
}
