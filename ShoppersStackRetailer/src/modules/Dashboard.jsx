import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  Cell,
} from "recharts";

import { Package, ShoppingCart, Truck, Star } from "lucide-react";

/* ---------------- DATA ---------------- */

const data = [
  { month: "Jan", orders: 500, revenue: 2 },
  { month: "Feb", orders: 900, revenue: 3 },
  { month: "Mar", orders: 1800, revenue: 4 },
  { month: "Apr", orders: 1300, revenue: 3.5 },
  { month: "May", orders: 2100, revenue: 5 },
  { month: "Jun", orders: 3000, revenue: 6 },
];

const orderStatusData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 95 },
  { month: "Apr", value: 120 },
  { month: "May", value: 150 },
];

const productData = [
  { name: "Active", value: 100 },
  { name: "Out", value: 20 },
];

/* ---------------- CARDS ---------------- */

const cards = [
  {
    title: "Total Products",
    value: "120",
    icon: Package,
    color: "text-blue-500",
  },
  {
    title: "Total Orders",
    value: "340",
    icon: ShoppingCart,
    color: "text-purple-500",
  },
  {
    title: "Delivered Orders",
    value: "280",
    icon: Truck,
    color: "text-green-500",
  },
  {
    title: "Average Rating",
    value: "4.4 ★",
    icon: Star,
    color: "text-yellow-500",
  },
];

/* ---------------- COMPONENTS ---------------- */

const OrderStatus = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm h-[260px] sm:h-[280px] md:h-[300px]">
    <h2 className="text-base sm:text-lg font-semibold mb-2">
      Order Status Overview
    </h2>

    <ResponsiveContainer width="100%" height="85%">
      <LineChart data={orderStatusData}>
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#16a34a"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const ProductOverview = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm h-[260px] sm:h-[280px] md:h-[300px]">
    <h2 className="text-base sm:text-lg font-semibold mb-2">
      Product Overview
    </h2>

    <ResponsiveContainer width="100%" height="85%">
      <BarChart data={productData}>
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />

        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {productData.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.name === "Active" ? "#2563eb" : "#f97316"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const OrdersTrend = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm h-[280px] sm:h-[320px] md:h-[350px]">
    <div className="flex justify-between mb-2">
      <h2 className="text-base sm:text-lg font-semibold">Orders Trend</h2>
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <div className="w-5 h-2 border border-blue-600 bg-blue-100" />
        Orders
      </div>
    </div>

    <ResponsiveContainer width="100%" height="85%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="orders"
          stroke="#6366f1"
          fill="#6366f1"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const RevenueChart = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm h-[280px] sm:h-[320px] md:h-[350px]">
    <div className="flex justify-between mb-2">
      <h2 className="text-base sm:text-lg font-semibold">Revenue Growth</h2>
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <div className="w-5 h-2 bg-green-600" />
        Revenue
      </div>
    </div>

    <ResponsiveContainer width="100%" height="85%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Bar dataKey="revenue" fill="#16a34a" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

/* ---------------- MAIN DASHBOARD ---------------- */

const Dashboard = () => {
  return (
    <div className="p-3 sm:p-5 bg-gray-100 min-h-screen flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1 className="text-lg sm:text-xl font-bold">Dashboard</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Quick overview of your store performance and activity
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {cards.map(({ title, value, icon: Icon, color }) => (
          <div
            key={title}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-500">{title}</p>
              <Icon className={`${color}`} size={18} />
            </div>
            <h2 className="text-lg sm:text-2xl font-semibold">{value}</h2>
          </div>
        ))}
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <OrderStatus />
        <ProductOverview />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <OrdersTrend />
        <RevenueChart />
      </div>
    </div>
  );
};

export default Dashboard;