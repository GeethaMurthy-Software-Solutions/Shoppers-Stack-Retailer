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
} from "recharts";


const data = [
  { month: "Jan", orders: 500,  revenue: 0.9 },
  { month: "Feb", orders: 900,  revenue: 1.3 },
  { month: "Mar", orders: 1800, revenue: 2.4 },
  { month: "Apr", orders: 1300, revenue: 1.9 },
  { month: "May", orders: 2100, revenue: 2.8 },
  { month: "Jun", orders: 2440, revenue: 3.1 },
];

const OrdersCharge = () => {
  const OrdersChargeCss = {
    parentDivContainerCss:
      "bg-white p-2 pl-0 flex flex-col gap-3 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] outline-none focus:outline-none w-full h-85",
    orderTrendTitleCss: "text-lg pl-2 font-semibold",
  };

  return (
    <div className={OrdersChargeCss.parentDivContainerCss}>
      <div className="flex justify-between">
        <h2 className={OrdersChargeCss.orderTrendTitleCss}>Orders Trend</h2>
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-3 border-blue-600 border-2 bg-blue-100" />
          Orders
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} className="outline-none focus:outline-none">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            domain={[0, 3000]}
            ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const RevenueChart = () => {

  const css = {
    parent:
      "bg-white p-2 pl-0 flex flex-col gap-3 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] outline-none focus:outline-none w-full h-85",
    title: "text-lg font-semibold pl-2",
  };

  return (
    <div className={css.parent}>
      <div className="flex gap-3 justify-between">
        <h2 className={css.title}>Revenue Growth</h2>
        <div className="flex items-center gap-3">
           <p className="w-12 h-5 cursor-pointer bg-[#519a51]">
          
          </p>
          Revenue (₹ in Lakhs)
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#519a51" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

 

const Dashboard = () => {

  const headingCards = [
    { title: "Total Users",     count: "1,240"      },
    { title: "Total Merchants", count: "128"        },
    { title: "Total Products",  count: "4,560"      },
    { title: "Total Coupons",   count: "32"         },
    { title: "Total Orders",    count: "8,940"      },
    { title: "Total Revenue",   count: "₹12.4 Lakh" },
  ];

  const dashBoardCSS = {
    parentContainer: "p-1 flex flex-col gap-5 bg-white flex-wrap",
    dashBoardHeading: "text-[20px] opacity-60  font-bold",
    headingCardsParentCss: "flex flex-wrap lg:flex-nowrap gap-4",
    headingCardsCss:
      "flex flex-col justify-center w-[48%] sm:w-[30%] md:w-[22%] lg:flex-1 min-h-16 bg-white rounded-xl shadow-sm hover:shadow-md transition px-4",
    headingCardsTitleCss: "text-sm font-medium text-gray-500",
    headingCardsCountCss: "text-2xl font-semibold text-gray-900",
  };

  return (
    <div className={dashBoardCSS.parentContainer}>
      <div>
        <h1 className={dashBoardCSS.dashBoardHeading}>Admin Dashboard</h1>
      </div>

      <div className={dashBoardCSS.headingCardsParentCss}>
        {headingCards.map(({ title, count }) => (
          <div key={title} className={dashBoardCSS.headingCardsCss}>
            <h3 className={dashBoardCSS.headingCardsTitleCss}>{title}</h3>
            <span className={dashBoardCSS.headingCardsCountCss}>{count}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap w-full justify-center gap-5">
        <div className="w-full md:w-[37vw]">
          <OrdersCharge />
        </div>
        <div className="w-full md:w-[37vw]">
          <RevenueChart />
        </div>
      </div>
    </div>
  );
}; 
export default Dashboard;
