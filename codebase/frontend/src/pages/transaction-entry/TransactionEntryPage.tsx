import {
  AppstoreOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  DownOutlined,
  EditOutlined,
  HomeOutlined,
  MenuOutlined,
  PlusOutlined,
  PieChartOutlined,
  ScanOutlined,
  SoundOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import './transaction-entry.css';

type TransactionEntryPageProps = {
  onOpenChatbot: () => void;
  onOpenDashboard: () => void;
};

const categories = [
  { icon: '🍎', label: 'Ăn uống' },
  { icon: '🏠', label: 'Tiện ích' },
  { icon: '📍', label: 'Đi lại' },
  { icon: '👦', label: 'Con cái' },
  { icon: '👔', label: 'Quần áo' },
  { icon: '🎁', label: 'Quà tặng' },
  { icon: '💗', label: 'Sức khỏe' },
];

function EntryHeader() {
  return (
    <header className="entry-header">
      <button className="entry-icon-button" type="button" aria-label="Lịch sử">
        <ClockCircleOutlined />
      </button>
      <button className="entry-type-select" type="button">
        <span>Chi tiêu</span>
        <DownOutlined />
      </button>
      <button className="entry-icon-button" type="button" aria-label="Lưu">
        <CheckOutlined />
      </button>
    </header>
  );
}

function AmountCard() {
  return (
    <section className="amount-card">
      <span>Số tiền</span>
      <strong>0 đ</strong>
    </section>
  );
}

function CategoryCard() {
  return (
    <section className="category-card">
      <div className="category-select-row">
        <button className="category-add-button" type="button" aria-label="Thêm danh mục">
          <PlusOutlined />
        </button>
        <span className="category-placeholder">Chọn danh mục</span>
        <button className="category-all-button" type="button">
          Tất cả
        </button>
        <span className="category-chevron">›</span>
      </div>
      <div className="category-divider" />
      <div className="category-section-title">
        <span>Hay dùng</span>
        <span>⌃</span>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <button className="category-item" type="button" key={category.label}>
            <span className="category-icon">{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
        <button className="category-item category-edit" type="button">
          <EditOutlined />
          <span>Sửa</span>
        </button>
      </div>
    </section>
  );
}

function AvaBotButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="ava-entry-button" type="button" aria-label="Open AVA chatbot" onClick={onClick}>
      <span className="ava-entry-head">
        <span />
        <span />
      </span>
    </button>
  );
}

function DetailRows({ onOpenChatbot }: Pick<TransactionEntryPageProps, 'onOpenChatbot'>) {
  return (
    <section className="details-card">
      <div className="detail-row">
        <div className="detail-main">
          <WalletOutlined />
          <span>Ví tiền mặt</span>
        </div>
        <AvaBotButton onClick={onOpenChatbot} />
      </div>
      <div className="detail-row">
        <div className="detail-main">
          <CalendarOutlined />
          <span>Hôm nay - 06/04/2026</span>
        </div>
        <span className="detail-time">09</span>
      </div>
      <div className="detail-row">
        <div className="detail-main detail-muted">
          <MenuOutlined />
          <span>Mô tả</span>
        </div>
      </div>
      <div className="entry-floating-actions">
        <button type="button" aria-label="Nhập bằng giọng nói">
          <SoundOutlined />
        </button>
        <button type="button" aria-label="Quét hóa đơn">
          <ScanOutlined />
        </button>
      </div>
    </section>
  );
}

function BottomNavigation({
  onOpenDashboard,
}: Pick<TransactionEntryPageProps, 'onOpenDashboard'>) {
  return (
    <nav className="entry-bottom-nav" aria-label="Main navigation">
      <button type="button" onClick={onOpenDashboard}>
        <HomeOutlined />
        <span>Tổng quan</span>
      </button>
      <button type="button">
        <WalletOutlined />
        <span>Tài khoản</span>
      </button>
      <button className="nav-active" type="button">
        <span className="nav-plus">
          <PlusOutlined />
        </span>
        <span>Giao dịch</span>
      </button>
      <button type="button">
        <PieChartOutlined />
        <span>Báo cáo</span>
      </button>
      <button type="button">
        <AppstoreOutlined />
        <span>Khác</span>
      </button>
    </nav>
  );
}

export function TransactionEntryPage({
  onOpenChatbot,
  onOpenDashboard,
}: TransactionEntryPageProps) {
  return (
    <main className="entry-page">
      <div className="entry-screen">
        <EntryHeader />
        <AmountCard />
        <CategoryCard />
        <DetailRows onOpenChatbot={onOpenChatbot} />
        <button className="show-more-button" type="button">
          Hiển thị thêm chi tiết
        </button>
        <BottomNavigation onOpenDashboard={onOpenDashboard} />
        <div className="entry-home-indicator" />
      </div>
    </main>
  );
}
