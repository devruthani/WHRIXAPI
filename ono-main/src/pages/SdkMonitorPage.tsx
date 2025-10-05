import { Package, Download, Code2, CheckCircle, AlertTriangle, Smartphone } from 'lucide-react';

const SdkMonitorPage = () => {
  const sdkVersions = [
    {
      version: 'v2.4.1',
      platform: 'JavaScript/TypeScript',
      downloads: 45230,
      businesses: 89,
      status: 'stable',
      releaseDate: '2024-09-15',
    },
    {
      version: 'v2.4.0',
      platform: 'JavaScript/TypeScript',
      downloads: 123450,
      businesses: 142,
      status: 'stable',
      releaseDate: '2024-08-01',
    },
    {
      version: 'v2.3.8',
      platform: 'JavaScript/TypeScript',
      downloads: 89340,
      businesses: 67,
      status: 'deprecated',
      releaseDate: '2024-06-10',
    },
  ];

  const platformStats = [
    { platform: 'iOS', integrations: 45, version: 'v2.4.1', color: 'from-blue-500 to-blue-600' },
    { platform: 'Android', integrations: 52, version: 'v2.4.1', color: 'from-green-500 to-green-600' },
    { platform: 'Web', integrations: 89, version: 'v2.4.1', color: 'from-purple-500 to-purple-600' },
    { platform: 'React Native', integrations: 23, version: 'v2.4.0', color: 'from-cyan-500 to-cyan-600' },
  ];

  const recentIntegrations = [
    {
      id: '1',
      business: 'TechCorp Solutions',
      platform: 'Web',
      version: 'v2.4.1',
      status: 'active',
      lastSync: '2025-10-05T11:45:00',
    },
    {
      id: '2',
      business: 'DeliveryHub Inc',
      platform: 'Android',
      version: 'v2.4.1',
      status: 'active',
      lastSync: '2025-10-05T11:30:00',
    },
    {
      id: '3',
      business: 'FinanceFirst Bank',
      platform: 'iOS',
      version: 'v2.4.1',
      status: 'active',
      lastSync: '2025-10-05T11:15:00',
    },
    {
      id: '4',
      business: 'RetailMax',
      platform: 'Web',
      version: 'v2.3.8',
      status: 'warning',
      lastSync: '2025-10-04T16:20:00',
    },
    {
      id: '5',
      business: 'HealthCare Plus',
      platform: 'React Native',
      version: 'v2.4.0',
      status: 'active',
      lastSync: '2025-10-05T10:50:00',
    },
  ];

  const features = [
    { name: 'Address Autocomplete', usage: 95.2, businesses: 142 },
    { name: 'Geocoding', usage: 87.6, businesses: 128 },
    { name: 'Reverse Geocoding', usage: 72.4, businesses: 106 },
    { name: 'Address Validation', usage: 91.8, businesses: 135 },
    { name: 'Map Display', usage: 68.3, businesses: 98 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SDK Integration Monitor</h1>
        <p className="text-gray-600 mt-1">Track SDK versions, platform integrations, and usage patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-blue-600" size={24} />
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
              Latest
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Current Version</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">v2.4.1</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Download className="text-green-600" size={24} />
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              +18.5%
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Total Downloads</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">258,020</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Code2 className="text-purple-600" size={24} />
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              Active
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">SDK Integrations</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">209</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <Smartphone className="text-orange-600" size={24} />
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
              4 Platforms
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600">Platform Coverage</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">100%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Distribution</h2>
          <div className="space-y-4">
            {platformStats.map((platform, index) => (
              <div key={index} className={`bg-gradient-to-r ${platform.color} rounded-lg p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-90">{platform.platform}</p>
                    <p className="text-2xl font-bold mt-1">{platform.integrations} integrations</p>
                    <p className="text-xs opacity-75 mt-1">SDK {platform.version}</p>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">{platform.integrations}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">SDK Version Distribution</h2>
          <div className="space-y-4">
            {sdkVersions.map((version, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <code className="text-lg font-bold text-gray-900">{version.version}</code>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          version.status === 'stable'
                            ? 'bg-green-100 text-green-700'
                            : version.status === 'deprecated'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {version.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{version.platform}</p>
                  </div>
                  <p className="text-xs text-gray-500">{version.releaseDate}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Downloads</p>
                    <p className="text-lg font-bold text-gray-900">{version.downloads.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Active Businesses</p>
                    <p className="text-lg font-bold text-gray-900">{version.businesses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent SDK Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Business</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Platform</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">SDK Version</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Status</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Last Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentIntegrations.map((integration) => (
                <tr key={integration.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{integration.business}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{integration.platform}</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {integration.version}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    {integration.status === 'active' ? (
                      <span className="flex items-center space-x-1 text-green-600">
                        <CheckCircle size={16} />
                        <span className="text-sm font-medium">Active</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-yellow-600">
                        <AlertTriangle size={16} />
                        <span className="text-sm font-medium">Warning</span>
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">
                      {new Date(integration.lastSync).toLocaleString()}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Feature Usage Analytics</h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{feature.businesses} businesses</span>
                  <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                    {feature.usage}%
                  </span>
                </div>
              </div>
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-[#E8C547] to-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${feature.usage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg border border-gray-700 p-8 text-white">
        <h2 className="text-xl font-bold mb-6">SDK Health Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm text-gray-400">Overall Health</p>
            </div>
            <p className="text-2xl font-bold text-green-400">Excellent</p>
            <p className="text-sm text-gray-400 mt-1">All systems operational</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Error Rate</p>
            <p className="text-2xl font-bold text-[#E8C547]">0.12%</p>
            <p className="text-sm text-gray-400 mt-1">Well below threshold</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Deprecation Warnings</p>
            <p className="text-2xl font-bold text-yellow-400">67</p>
            <p className="text-sm text-gray-400 mt-1">Businesses need update</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdkMonitorPage;
