import { useMemo, useState } from 'react';
import { Bar, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, PieChart, Cell } from 'recharts';
import { Badge, Button, Card, Col, Progress, Row, Select, Space, Statistic, Switch, Tag, Typography } from 'antd';
import {
  BankOutlined,
  BellOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FileTextOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  PlusOutlined,
  SettingOutlined,
  SyncOutlined,
  SwapOutlined,
  TeamOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import './DashboardPage.css';

const quickActions = [
  { label: 'Tài khoản chi tiêu', icon: <WalletOutlined /> },
  { label: 'Trích xuất hóa đơn', icon: <FileTextOutlined /> },
  { label: 'Sổ tiết kiệm', icon: <BankOutlined /> },
  { label: 'Kết nối ngân hàng', icon: <SwapOutlined /> },
  { label: 'Chia tiền', icon: <TeamOutlined /> },
  { label: 'Hạn mức chi', icon: <DollarCircleOutlined /> },
  { label: 'Tất cả', icon: <MenuOutlined /> },
];

const knowledgeCards = [
  { title: 'Tính thuế TNCN như thế nào?', description: 'Mẹo giảm trừ gia cảnh và cách tính thuế thu nhập cá nhân cơ bản.' },
  { title: 'Liên kết ngân hàng tự động ghi chép', description: 'Kết nối 1 lần, tự động đồng bộ chi tiêu hàng ngày.' },
  { title: 'Quản lý tiết kiệm thông minh', description: 'Xây mục tiêu, theo dõi tiến độ và lên lịch tự động.' },
];

const monthlyReport = [
  { name: 'Thu', value: 45200000 },
  { name: 'Chi', value: 37700000 },
];

const categoryData = [
  { name: 'Nhà cửa', value: 2800, color: '#1890ff' },
  { name: 'Ăn uống', value: 2000, color: '#ff4d4f' },
  { name: 'Dịch vụ', value: 1800, color: '#52c41a' },
  { name: 'Giải trí', value: 1200, color: '#faad14' },
  { name: 'Di chuyển', value: 900, color: '#13c2c2' },
];

const spendTrend = [
  { month: 'Th1', amount: 1900 },
  { month: 'Th2', amount: 2200 },
  { month: 'Th3', amount: 2400 },
  { month: 'Th4', amount: 2100 },
  { month: 'Th5', amount: 2700 },
  { month: 'Th6', amount: 2600 },
  { month: 'Th7', amount: 2800 },
  { month: 'Th8', amount: 2300 },
  { month: 'Th9', amount: 3000 },
  { month: 'Th10', amount: 3100 },
  { month: 'Th11', amount: 2900 },
  { month: 'Th12', amount: 3300 },
];

const loansData = [
  { name: 'Cho Tâm vay', amount: 8500000, due: '15/08/2026', status: 'Đang chờ' },
  { name: 'Cho Thủy vay', amount: 5200000, due: '03/09/2026', status: 'Đang chờ' },
];

const currencyRates = [
  { label: 'USD', value: '23.760 VND' },
  { label: 'EUR', value: '25.760 VND' },
  { label: 'VGO', value: '1.225.000 VND' },
];

const savingsGoals = [
  { title: 'Mục tiêu mua xe', amount: 120000000, progress: 62, due: '193 ngày' },
  { title: 'Sổ tiết kiệm 12 tháng', amount: 50000000, progress: 45, due: '120 ngày' },
];

const quickWidgets = [
  { key: 'savings', label: 'Sổ tiết kiệm' },
  { key: 'budget', label: 'Hạn mức chi' },
  { key: 'loans', label: 'Vay & Nợ' },
  { key: 'travel', label: 'Chi phí du lịch' },
  { key: 'rates', label: 'Tỷ giá & Vàng' },
];

export function DashboardPage() {
  const [showMoney, setShowMoney] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [activeTab, setActiveTab] = useState('overview');
  const [visibleWidgets, setVisibleWidgets] = useState<Record<string, boolean>>({
    savings: true,
    budget: true,
    loans: true,
    travel: true,
    rates: true,
  });

  const totalIncome = 45200000;
  const totalExpense = 37700000;
  const balance = totalIncome - totalExpense;
  const balanceText = showMoney ? `${balance.toLocaleString()} ₫` : '•••••••••';

  const quickOptions = useMemo(
    () => [
      { label: '2024', value: '2024' },
      { label: '2025', value: '2025' },
      { label: '2026', value: '2026' },
    ],
    [],
  );

  return (
    <main className="dashboard-root">
      <section className="dashboard-header">
        <Row align="middle" justify="space-between" gutter={[16, 16]}>
          <Col>
            <div className="header-greeting">
              <Typography.Title level={4}>Xin chào, Phạm Minh Hiếu</Typography.Title>
              <Typography.Text type="secondary">Tổng quan tài chính cá nhân của bạn hôm nay</Typography.Text>
            </div>
          </Col>
          <Col>
            <Space size="middle">
              <Button icon={<SyncOutlined />} type="default">
                Đồng bộ dữ liệu
              </Button>
              <Badge dot>
                <Button icon={<BellOutlined />} type="primary" />
              </Badge>
            </Space>
          </Col>
        </Row>
      </section>

      <section className="wallet-card">
        <Card className="wallet-card-inner" bordered={false}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Text type="secondary">Tổng số dư</Typography.Text>
              <Typography.Title level={2} className="wallet-balance">
                {balanceText}
              </Typography.Title>
            </Col>
            <Col>
              <Button
                icon={showMoney ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                onClick={() => setShowMoney((prev) => !prev)}
              >
                {showMoney ? 'Ẩn số dư' : 'Hiện số dư'}
              </Button>
            </Col>
          </Row>
        </Card>
      </section>

      <section className="quick-access-section">
        <Card title="Phím tắt nhanh" bordered={false}>
          <Row gutter={[16, 16]}>
            {quickActions.map((action) => (
              <Col xs={12} sm={8} md={6} lg={4} key={action.label}>
                <Button className="quick-access-button" type="text" block icon={action.icon}>
                  {action.label}
                </Button>
              </Col>
            ))}
          </Row>
        </Card>
      </section>

      <Row gutter={[16, 16]}>
        <Col xl={16} lg={24}>
          <Card title="Báo cáo Thu - Chi hàng tháng" bordered={false} className="report-card">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card bordered={false} className="report-stat">
                  <Statistic title="Thu" value={totalIncome.toLocaleString()} suffix="₫" />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false} className="report-stat">
                  <Statistic title="Chi" value={totalExpense.toLocaleString()} suffix="₫" />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false} className="report-stat">
                  <Statistic title="Chênh lệch" value={balance.toLocaleString()} suffix="₫" />
                </Card>
              </Col>
            </Row>

            <div className="chart-section">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={monthlyReport} margin={{ top: 12, right: 12, left: -12, bottom: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => (typeof value === 'number' ? value.toLocaleString() : '')} />
                  <Legend />
                  <Bar dataKey="value" name="Số tiền" fill="#1890ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Cơ cấu Chi tiêu" bordered={false} className="report-card">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={14}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={4}>
                      {categoryData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => (typeof value === 'number' ? `${value} ₫` : '')} />
                  </PieChart>
                </ResponsiveContainer>
              </Col>
              <Col xs={24} md={10}>
                <Space direction="vertical" size="small" className="category-legend">
                  {categoryData.map((item) => (
                    <Tag key={item.name} color={item.color} className="category-tag">
                      {item.name}: {((item.value / categoryData.reduce((sum, cur) => sum + cur.value, 0)) * 100).toFixed(0)}%
                    </Tag>
                  ))}
                </Space>
              </Col>
            </Row>
          </Card>

          <Card title="Phân tích chi tiêu dài hạn" extra={<Select value={selectedYear} options={quickOptions} onChange={setSelectedYear} />} bordered={false} className="report-card">
            <div className="chart-section">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={spendTrend} margin={{ top: 12, right: 12, left: -12, bottom: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => (typeof value === 'number' ? value.toLocaleString() : '')} />
                  <Bar dataKey="amount" name="Chi tiêu" fill="#ff4d4f" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col xl={8} lg={24}>
          <Card title="Dành riêng cho bạn" bordered={false} className="feature-card">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {knowledgeCards.map((card) => (
                <Card key={card.title} size="small" bordered={false} className="knowledge-card">
                  <Typography.Title level={5}>{card.title}</Typography.Title>
                  <Typography.Paragraph type="secondary" className="knowledge-description">
                    {card.description}
                  </Typography.Paragraph>
                </Card>
              ))}
            </Space>
          </Card>

          <Card title="Tùy biến UI" bordered={false} className="feature-card">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Typography.Text>Cho phép bật/tắt widget theo thói quen sử dụng.</Typography.Text>
              <Space direction="vertical" style={{ width: '100%' }}>
                {quickWidgets.map((widget) => (
                  <div
                  key={widget.key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography.Text>{widget.label}</Typography.Text>
                  <Switch
                    checked={visibleWidgets[widget.key]}
                    onChange={(checked) => setVisibleWidgets((prev) => ({ ...prev, [widget.key]: checked }))}
                  />
                </div>
                ))}
              </Space>
            </Space>
          </Card>

          {visibleWidgets.savings && (
            <Card title="Sổ tiết kiệm" bordered={false} className="feature-card">
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {savingsGoals.map((goal) => (
                  <div key={goal.title} className="savings-goal-item">
                    <Typography.Title level={5}>{goal.title}</Typography.Title>
                    <Typography.Text type="secondary">Số tiền gốc: {goal.amount.toLocaleString()} ₫</Typography.Text>
                    <Progress percent={goal.progress} status="active" />
                    <Typography.Text type="secondary">Còn lại {goal.due}</Typography.Text>
                  </div>
                ))}
              </Space>
            </Card>
          )}

          {visibleWidgets.budget && (
            <Card title="Hạn mức chi" bordered={false} className="feature-card">
              <Typography.Text>Ngưỡng chi tiêu tháng này: 50.000.000 ₫</Typography.Text>
              <Progress percent={74} status="normal" />
              <Typography.Text type="secondary">Cảnh báo khi đạt 85% hạn mức.</Typography.Text>
            </Card>
          )}

          {visibleWidgets.loans && (
            <Card title="Theo dõi Vay & Nợ" bordered={false} className="feature-card">
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {loansData.map((loan) => (
                  <div key={loan.name} className="loan-item">
                    <Typography.Text strong>{loan.name}</Typography.Text>
                    <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
                      {loan.amount.toLocaleString()} ₫ • {loan.status} • Thu: {loan.due}
                    </Typography.Paragraph>
                  </div>
                ))}
              </Space>
            </Card>
          )}

          {visibleWidgets.travel && (
            <Card title="Chi phí Chuyến đi" bordered={false} className="feature-card">
              <Typography.Paragraph>Gom nhóm các khoản chi cho chuyến đi riêng biệt để không lẫn vào chi tiêu thường nhật.</Typography.Paragraph>
              <Tag color="#722ed1">Du lịch Hà Giang</Tag>
              <Typography.Paragraph type="secondary">Tổng chi: 14.200.000 ₫</Typography.Paragraph>
            </Card>
          )}

          {visibleWidgets.rates && (
            <Card title="Tỷ giá & Vàng" bordered={false} className="feature-card">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {currencyRates.map((rate) => (
                  <div key={rate.label} className="rate-item">
                    <Typography.Text strong>{rate.label}</Typography.Text>
                    <Typography.Text>{rate.value}</Typography.Text>
                  </div>
                ))}
              </Space>
              <Button icon={<SettingOutlined />} type="text">
                Cài đặt
              </Button>
              <Button type="primary">Tra cứu</Button>
            </Card>
          )}
        </Col>
      </Row>

      <Card title="Lịch sử ghi chép" bordered={false} className="timeline-card">
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Text>Chuyển hướng nhanh đến dòng thời gian giao dịch chi tiết.</Typography.Text>
          </Col>
          <Col>
            <Button icon={<CalendarOutlined />}>Xem timeline</Button>
          </Col>
        </Row>
      </Card>

      <div className="bottom-nav">
        <Space size="large" className="bottom-nav-buttons">
          <Button type={activeTab === 'overview' ? 'primary' : 'text'} icon={<HomeOutlined />} onClick={() => setActiveTab('overview')}>
            Tổng quan
          </Button>
          <Button type={activeTab === 'accounts' ? 'primary' : 'text'} icon={<WalletOutlined />} onClick={() => setActiveTab('accounts')}>
            Tài khoản
          </Button>
          <Button className="fab-button" type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => setActiveTab('add')} />
          <Button type={activeTab === 'reports' ? 'primary' : 'text'} icon={<FundOutlined />} onClick={() => setActiveTab('reports')}>
            Báo cáo
          </Button>
          <Button type={activeTab === 'more' ? 'primary' : 'text'} icon={<SettingOutlined />} onClick={() => setActiveTab('more')}>
            Khác
          </Button>
        </Space>
      </div>
    </main>
  );
}
