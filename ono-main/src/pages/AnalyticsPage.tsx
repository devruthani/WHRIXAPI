import { TrendingUp, BarChart3, Activity, Zap } from 'lucide-react';

const AnalyticsPage = () => {
  const monthlyData = [
    { month: 'Jan', verifications: 85000, success: 92.5 },
    { month: 'Feb', verifications: 92000, success: 93.1 },
    { month: 'Mar', verifications: 98000, success: 94.2 },
    { month: 'Apr', verifications: 105000, success: 93.8 },
    { month: 'May', verifications: 112000, success: 94.5 },
    { month: 'Jun', verifications: 125000, success: 95.1 },
  ];

  const geographicData = [
    { region: 'North America', verifications: 456780, percentage: 45.2 },
    { region: 'Europe', verifications: 289340, percentage: 28.6 },
    { region: 'Asia Pacific', verifications: 178900, percentage: 17.7 },
    { region: 'Latin America', verifications: 56780, percentage: 5.6 },
    { region: 'Middle East', verifications: 29120, percentage: 2.9 },
  ];

  const industryData = [
    { industry: 'E-commerce', count: 45, percentage: 28.8 },
    { industry: 'Logistics', count: 38, percentage: 24.4 },
    { industry: 'Finance', count: 32, percentage: 20.5 },
    { industry: 'Healthcare', count: 22, percentage: 14.1 },
    { industry: 'Technology', count: 19, percentage: 12.2 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
        <p className="text-gray-600 mt-1">Comprehensive system performance and usage analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              +18.5%
            </span>
          </div>
          <p className="text-sm opacity-90">Monthly Growth</p>
          <p className="text-3xl font-bold mt-2">18.5%</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              +2.3%
            </span>
          </div>
          <p className="text-sm opacity-90">Avg Success Rate</p>
          <p className="text-3xl font-bold mt-2">94.2%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Activity size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              142
            </span>
          </div>
          <p className="text-sm opacity-90">Active Businesses</p>
          <p className="text-3xl font-bold mt-2">142</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Zap size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              -12ms
            </span>
          </div>
          <p className="text-sm opacity-90">Avg Response Time</p>
          <p className="text-3xl font-bold mt-2">245ms</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Verification Trends</h2>
        <div className="space-y-4">
          {monthlyData.map((data, index) => {
            const maxValue = Math.max(...monthlyData.map((d) => d.verifications));
            const width = (data.verifications / maxValue) * 100;
            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 w-12">{data.month}</span>
                  <span className="text-sm text-gray-600">
                    {data.verifications.toLocaleString()} verifications
                  </span>
                  <span className="text-sm font-medium text-green-600">{data.success}%</span>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#E8C547] to-yellow-500 rounded-lg transition-all duration-500"
                    style={{ width: `${width}%` }}
                  >
                    <div className="flex items-center justify-end h-full pr-3">
                      <span className="text-xs font-semibold text-gray-900">
                        {data.verifications.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Geographic Distribution</h2>
          <div className="space-y-4">
            {geographicData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{data.region}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">
                      {data.verifications.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                      {data.percentage}%
                    </span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${data.percentage * 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Industry Breakdown</h2>
          <div className="space-y-4">
            {industryData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8C547] to-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{data.industry}</p>
                    <p className="text-xs text-gray-600">{data.count} businesses</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{data.percentage}%</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#E8C547] to-yellow-500 rounded-full"
                      style={{ width: `${data.percentage * 3.5}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Peak Usage Hours</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">9:00 AM - 12:00 PM</span>
              <span className="text-sm font-bold text-[#E8C547]">Peak</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">2:00 PM - 5:00 PM</span>
              <span className="text-sm font-bold text-blue-600">High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">8:00 PM - 11:00 PM</span>
              <span className="text-sm font-bold text-gray-500">Low</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Top Performing Plans</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Enterprise</span>
              <span className="text-sm font-bold text-purple-600">67.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Professional</span>
              <span className="text-sm font-bold text-blue-600">23.4%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Starter</span>
              <span className="text-sm font-bold text-gray-600">8.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Average Processing Time</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">API Requests</span>
              <span className="text-sm font-bold text-green-600">198ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">SDK Requests</span>
              <span className="text-sm font-bold text-green-600">312ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Overall Average</span>
              <span className="text-sm font-bold text-[#E8C547]">245ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
