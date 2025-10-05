import { Code, Zap, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

const ApiUsagePage = () => {
  const apiEndpoints = [
    { endpoint: '/v1/verify', calls: 456789, success: 95.2, avgTime: 189 },
    { endpoint: '/v1/geocode', calls: 234567, success: 97.8, avgTime: 145 },
    { endpoint: '/v1/validate', calls: 189456, success: 93.4, avgTime: 234 },
    { endpoint: '/v1/suggest', calls: 123456, success: 98.1, avgTime: 98 },
    { endpoint: '/v1/parse', calls: 89012, success: 94.6, avgTime: 156 },
  ];

  const recentApiCalls = [
    {
      id: '1',
      endpoint: '/v1/verify',
      business: 'TechCorp Solutions',
      status: 'success',
      responseTime: 187,
      timestamp: '2025-10-05T11:45:23',
    },
    {
      id: '2',
      endpoint: '/v1/geocode',
      business: 'DeliveryHub Inc',
      status: 'success',
      responseTime: 142,
      timestamp: '2025-10-05T11:44:18',
    },
    {
      id: '3',
      endpoint: '/v1/verify',
      business: 'FinanceFirst Bank',
      status: 'success',
      responseTime: 198,
      timestamp: '2025-10-05T11:43:55',
    },
    {
      id: '4',
      endpoint: '/v1/validate',
      business: 'RetailMax',
      status: 'error',
      responseTime: 456,
      timestamp: '2025-10-05T11:42:32',
    },
    {
      id: '5',
      endpoint: '/v1/suggest',
      business: 'HealthCare Plus',
      status: 'success',
      responseTime: 95,
      timestamp: '2025-10-05T11:41:09',
    },
  ];

  const errorRates = [
    { code: '200 OK', count: 845230, percentage: 94.2 },
    { code: '400 Bad Request', count: 32145, percentage: 3.6 },
    { code: '401 Unauthorized', count: 12389, percentage: 1.4 },
    { code: '429 Rate Limit', count: 5678, percentage: 0.6 },
    { code: '500 Server Error', count: 1890, percentage: 0.2 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">API Usage & Performance</h1>
        <p className="text-gray-600 mt-1">Monitor API endpoints, request patterns, and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Code className="text-blue-600" size={24} />
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              +12.3%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Total API Calls</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">897,332</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="text-green-600" size={24} />
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              +2.1%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Success Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">95.8%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Zap className="text-orange-600" size={24} />
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              -18ms
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">198ms</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="text-purple-600" size={24} />
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              Peak
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Requests/Hour</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">12,456</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">API Endpoint Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Endpoint</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Total Calls</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Success Rate</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Avg Response Time</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {apiEndpoints.map((endpoint, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <code className="text-sm font-mono text-gray-900 bg-gray-100 px-3 py-1 rounded">
                      {endpoint.endpoint}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">
                      {endpoint.calls.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            endpoint.success >= 95
                              ? 'bg-green-500'
                              : endpoint.success >= 90
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${endpoint.success}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{endpoint.success}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-medium ${
                        endpoint.avgTime < 150
                          ? 'text-green-600'
                          : endpoint.avgTime < 250
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {endpoint.avgTime}ms
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 text-green-700">
                      Operational
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent API Calls</h2>
          <div className="space-y-3">
            {recentApiCalls.map((call) => (
              <div
                key={call.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {call.status === 'success' ? (
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  ) : (
                    <XCircle className="text-red-600 flex-shrink-0" size={20} />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <code className="text-sm font-mono text-gray-900">{call.endpoint}</code>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          call.status === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {call.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 truncate">{call.business}</p>
                  </div>
                </div>
                <div className="text-right ml-4 flex-shrink-0">
                  <p className="text-sm font-medium text-gray-900">{call.responseTime}ms</p>
                  <p className="text-xs text-gray-500">
                    {new Date(call.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Response Status Distribution</h2>
          <div className="space-y-4">
            {errorRates.map((error, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{error.code}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">{error.count.toLocaleString()}</span>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                      {error.percentage}%
                    </span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute h-full rounded-full transition-all duration-500 ${
                      error.code.startsWith('200')
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : error.code.startsWith('400')
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                        : 'bg-gradient-to-r from-red-500 to-red-600'
                    }`}
                    style={{ width: `${error.percentage * 1.05}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg border border-gray-700 p-8 text-white">
        <h2 className="text-xl font-bold mb-6">API Rate Limits & Quotas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-400 mb-2">Enterprise Plan</p>
            <p className="text-2xl font-bold text-[#E8C547]">10,000 req/hour</p>
            <p className="text-sm text-gray-400 mt-1">Current: 7,234 (72.3%)</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-[#E8C547] h-2 rounded-full" style={{ width: '72.3%' }} />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Professional Plan</p>
            <p className="text-2xl font-bold text-[#E8C547]">5,000 req/hour</p>
            <p className="text-sm text-gray-400 mt-1">Current: 3,456 (69.1%)</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-[#E8C547] h-2 rounded-full" style={{ width: '69.1%' }} />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Starter Plan</p>
            <p className="text-2xl font-bold text-[#E8C547]">1,000 req/hour</p>
            <p className="text-sm text-gray-400 mt-1">Current: 567 (56.7%)</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-[#E8C547] h-2 rounded-full" style={{ width: '56.7%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiUsagePage;
