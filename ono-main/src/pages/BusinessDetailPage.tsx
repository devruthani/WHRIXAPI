import { ArrowLeft, Mail, Calendar, TrendingUp, Activity, Key, MapPin, Phone } from 'lucide-react';
import { Business } from '../types';
import { mockVerifications } from '../data/mockData';

interface BusinessDetailPageProps {
  business: Business;
  onBack: () => void;
}

const BusinessDetailPage = ({ business, onBack }: BusinessDetailPageProps) => {
  const businessVerifications = mockVerifications.filter((v) => v.businessId === business.id);
  const recentVerifications = businessVerifications.slice(0, 10);

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Businesses</span>
      </button>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg border border-gray-700 p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-[#E8C547] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-gray-900 font-bold text-3xl">{business.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{business.name}</h1>
              <p className="text-gray-300 mt-2 flex items-center space-x-2">
                <Mail size={16} />
                <span>{business.email}</span>
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    business.status === 'active'
                      ? 'bg-green-500 text-white'
                      : business.status === 'inactive'
                      ? 'bg-gray-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {business.status}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    business.plan === 'enterprise'
                      ? 'bg-purple-500 text-white'
                      : business.plan === 'professional'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {business.plan}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Total Verifications</h3>
            <Activity className="text-blue-500" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {business.totalVerifications.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-2">+24.5% this month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Success Rate</h3>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{business.successRate}%</p>
          <p className="text-sm text-green-600 mt-2">+2.1% this month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Industry</h3>
            <MapPin className="text-purple-500" size={20} />
          </div>
          <p className="text-xl font-bold text-gray-900">{business.industry}</p>
          <p className="text-sm text-gray-500 mt-2">{business.contact}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">Member Since</h3>
            <Calendar className="text-orange-500" size={20} />
          </div>
          <p className="text-xl font-bold text-gray-900">
            {new Date(business.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {Math.floor((Date.now() - new Date(business.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">API Key</label>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center space-x-2">
                <Key size={16} className="text-gray-400" />
                <code className="text-sm font-mono text-gray-900">{business.apiKey}</code>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Webhook URL</label>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <code className="text-sm font-mono text-gray-900">
                  https://api.witrix.com/webhooks/{business.id}
                </code>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Rate Limit</label>
                <p className="text-lg font-bold text-gray-900 mt-2">
                  {business.plan === 'enterprise'
                    ? '10,000/hour'
                    : business.plan === 'professional'
                    ? '5,000/hour'
                    : '1,000/hour'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">SDK Version</label>
                <p className="text-lg font-bold text-gray-900 mt-2">v2.4.1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Primary Contact</label>
              <p className="text-lg font-semibold text-gray-900 mt-2">{business.contact}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email Address</label>
              <div className="mt-2 flex items-center space-x-2 text-gray-900">
                <Mail size={16} className="text-gray-400" />
                <span className="text-sm">{business.email}</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Activity</label>
              <p className="text-sm text-gray-900 mt-2">
                {new Date(business.lastActivity).toLocaleString()}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-[#E8C547] text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
                Contact Business
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Verification Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-sm font-semibold text-gray-600 pb-3">Timestamp</th>
                <th className="text-left text-sm font-semibold text-gray-600 pb-3">Address</th>
                <th className="text-left text-sm font-semibold text-gray-600 pb-3">Status</th>
                <th className="text-left text-sm font-semibold text-gray-600 pb-3">Method</th>
                <th className="text-left text-sm font-semibold text-gray-600 pb-3">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {recentVerifications.map((verification) => (
                <tr key={verification.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 text-sm text-gray-900">
                    {new Date(verification.timestamp).toLocaleString()}
                  </td>
                  <td className="py-4 text-sm text-gray-900 max-w-xs truncate">
                    {verification.address}
                  </td>
                  <td className="py-4">
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
                  </td>
                  <td className="py-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        verification.method === 'api'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {verification.method.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900">
                    {verification.confidence > 0 ? `${verification.confidence}%` : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailPage;
