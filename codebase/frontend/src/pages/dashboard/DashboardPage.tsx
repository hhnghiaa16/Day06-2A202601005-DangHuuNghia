import {
  AppstoreOutlined,
  BankOutlined,
  BellFilled,
  CreditCardOutlined,
  EyeOutlined,
  FileSearchOutlined,
  HomeFilled,
  PlusOutlined,
  PieChartOutlined,
  ReloadOutlined,
  RightOutlined,
  SettingOutlined,
  TagsOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import './dashboard.css';

type DashboardPageProps = {
  onOpenTransaction: () => void;
};

const shortcuts = [
  { icon: CreditCardOutlined, label: 'Tài khoản\nchi tiêu' },
  { icon: FileSearchOutlined, label: 'Trích xuất\nhóa đơn' },
  { icon: TagsOutlined, label: 'Quản lý sổ\ntiết kiệm' },
  { icon: BankOutlined, label: 'Kết nối\nngân hàng' },
  { icon: WalletOutlined, label: 'Du lịch' },
  { icon: TagsOutlined, label: 'Chia tiền' },
  { icon: WalletOutlined, label: 'Hạn mức\nchi' },
  { icon: AppstoreOutlined, label: 'Tất cả' },
];

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-user-row">
        <div className="user-avatar">NH</div>
        <div className="user-copy">
          <span>Xin chào!</span>
          <strong>Nguyễn Việt Hoàng</strong>
        </div>
        <button type="button" aria-label="Đồng bộ">
          <ReloadOutlined />
        </button>
        <button className="notification-button" type="button" aria-label="Thông báo">
          <BellFilled />
          <span>6...</span>
        </button>
      </div>
    </header>
  );
}

function BalanceCard() {
  return (
    <section className="balance-card">
      <div>
        <span>Tổng số dư</span>
        <strong>-59.405.000 đ</strong>
      </div>
      <EyeOutlined />
      <RightOutlined className="balance-chevron" />
    </section>
  );
}

function ShortcutGrid() {
  return (
    <section className="shortcut-card">
      {shortcuts.map((item) => {
        const Icon = item.icon;
        return (
          <button className="shortcut-item" type="button" key={item.label}>
            <Icon />
            <span>{item.label}</span>
          </button>
        );
      })}
    </section>
  );
}

function PersonalSection() {
  return (
    <section className="personal-card">
      <h2>Dành riêng cho bạn</h2>
      <div className="personal-grid">
        <article className="personal-tile personal-tax">
          <strong>Tính Thuế TNCN như thế nào?</strong>
          <span>✦</span>
        </article>
        <article className="personal-tile personal-bank">
          <strong>Liên kết ngân hàng, tự động ghi chép</strong>
          <a>Liên kết ngay →</a>
        </article>
      </div>
    </section>
  );
}

function CashflowHeader() {
  return (
    <section className="cashflow-header">
      <h2>Tình hình thu chi</h2>
      <div className="cashflow-controls">
        <button type="button" aria-label="Cài đặt">
          <SettingOutlined />
        </button>
        <button type="button">
          Tháng này <span>⌄</span>
        </button>
      </div>
    </section>
  );
}

function DashboardBottomNav({ onOpenTransaction }: DashboardPageProps) {
  return (
    <nav className="dashboard-bottom-nav" aria-label="Điều hướng chính">
      <button className="nav-active" type="button">
        <HomeFilled />
        <span>Tổng quan</span>
      </button>
      <button type="button">
        <WalletOutlined />
        <span>Tài khoản</span>
      </button>
      <button className="nav-plus-button" type="button" onClick={onOpenTransaction}>
        <span className="nav-plus">
          <PlusOutlined />
        </span>
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

export function DashboardPage({ onOpenTransaction }: DashboardPageProps) {
  return (
    <main className="dashboard-page">
      <div className="dashboard-screen">
        <DashboardHeader />
        <div className="dashboard-content">
          <BalanceCard />
          <ShortcutGrid />
          <PersonalSection />
          <CashflowHeader />
        </div>
        <DashboardBottomNav onOpenTransaction={onOpenTransaction} />
        <div className="dashboard-home-indicator" />
      </div>
    </main>
  );
}
