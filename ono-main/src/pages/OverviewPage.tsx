import { TrendingUp, TrendingDown, Users, CheckCircle, Activity, Clock } from 'lucide-react';
import { mockDashboardStats, mockVerifications, mockBusinesses } from '../data/mockData';

const OverviewPage = () => {
  const stats = mockDashboardStats;
  const recentVerifications = mockVerifications.slice(0, 5);
  const topBusinesses = mockBusinesses.slice(0, 5);

  const statCards = [
    {
      label: 'Total Businesses',
      value: stats.totalBusinesses.toLocaleString(),
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: 'Active Businesses',
      value: stats.activeBusinesses.toLocaleString(),
      change: '+8.2%',
      isPositive: true,
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      label: 'Total Verifications',
      value: stats.totalVerifications.toLocaleString(),
      change: '+24.3%',
      isPositive: true,
      icon: CheckCircle,
      color: 'bg-[#E8C547]',
    },
    {
      label: 'Success Rate',
      value: `${stats.successRate}%`,
      change: '+2.1%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-emerald-500',
    },
    {
      label: 'API Calls',
      value: stats.apiCalls.toLocaleString(),
      change: '+18.7%',
      isPositive: true,
      icon: Activity,
      color: 'bg-cyan-500',
    },
    {
      label: 'Avg Response Time',
      value: `${stats.avgResponseTime}ms`,
      change: '-5.3%',
      isPositive: true,
      icon: Clock,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Monitor your address verification system performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-3">
                    {stat.isPositive ? (
                      <TrendingUp size={16} className="text-green-600" />
                    ) : (
                      <TrendingDown size={16} className="text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ml-1 ${
                        stat.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Verifications</h2>
          <div className="space-y-4">
            {recentVerifications.map((verification) => (
              <div
                key={verification.id}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    verification.status === 'verified'
                      ? 'bg-green-100'
                      : verification.status === 'failed'
                      ? 'bg-red-100'
                      : verification.status === 'pending'
                      ? 'bg-yellow-100'
                      : 'bg-blue-100'
                  }`}
                >
                  <CheckCircle
                    size={20}
                    className={
                      verification.status === 'verified'
                        ? 'text-green-600'
                        : verification.status === 'failed'
                        ? 'text-red-600'
                        : verification.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-blue-600'
                    }
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {verification.businessName}
                  </p>
                  <p className="text-sm text-gray-600 truncate">{verification.address}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        verification.status === 'verified'
                          ? 'bg-green-100 text-green-700'
                          : verification.status === 'failed'
                          ? 'bg-red-100 text-red-700'
                          : verification.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {verification.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(verification.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Businesses</h2>
          <div className="space-y-4">
            {topBusinesses.map((business, index) => (
              <div
                key={business.id}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#E8C547] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{business.name}</p>
                  <p className="text-sm text-gray-600">{business.industry}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-xs text-gray-500">
                      {business.totalVerifications.toLocaleString()} verifications
                    </span>
                    <span className="text-xs font-medium text-green-600">
                      {business.successRate}% success
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    business.plan === 'enterprise'
                      ? 'bg-purple-100 text-purple-700'
                      : business.plan === 'professional'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {business.plan}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-sm border border-gray-700 p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">API Calls Today</h3>
            <p className="text-3xl font-bold text-[#E8C547]">45,678</p>
            <p className="text-sm text-gray-400 mt-1">+15% from yesterday</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">SDK Integrations</h3>
            <p className="text-3xl font-bold text-[#E8C547]">23,451</p>
            <p className="text-sm text-gray-400 mt-1">+22% from yesterday</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Uptime</h3>
            <p className="text-3xl font-bold text-green-400">99.98%</p>
            <p className="text-sm text-gray-400 mt-1">Last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
