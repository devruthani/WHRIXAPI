import { useState } from 'react';
import { Search, MapPin, Clock, CheckCircle, XCircle, AlertCircle, Filter } from 'lucide-react';
import { mockVerifications } from '../data/mockData';

const VerificationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [methodFilter, setMethodFilter] = useState<string>('all');

  const filteredVerifications = mockVerifications.filter((verification) => {
    const matchesSearch =
      verification.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verification.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || verification.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || verification.method === methodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'failed':
        return <XCircle className="text-red-600" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-600" size={20} />;
      case 'partial':
        return <AlertCircle className="text-blue-600" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'failed':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'partial':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const stats = {
    total: mockVerifications.length,
    verified: mockVerifications.filter((v) => v.status === 'verified').length,
    failed: mockVerifications.filter((v) => v.status === 'failed').length,
    pending: mockVerifications.filter((v) => v.status === 'pending').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Verification Attempts</h1>
        <p className="text-gray-600 mt-1">Monitor all address verification requests and results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Attempts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
            </div>
            <Activity className="text-gray-400" size={32} />
          </div>
        </div>

        <div className="bg-green-50 rounded-xl shadow-sm border border-green-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Verified</p>
              <p className="text-3xl font-bold text-green-900 mt-2">{stats.verified}</p>
            </div>
            <CheckCircle className="text-green-600" size={32} />
          </div>
        </div>

        <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Failed</p>
              <p className="text-3xl font-bold text-red-900 mt-2">{stats.failed}</p>
            </div>
            <XCircle className="text-red-600" size={32} />
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600">Pending</p>
              <p className="text-3xl font-bold text-yellow-900 mt-2">{stats.pending}</p>
            </div>
            <Clock className="text-yellow-600" size={32} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search verifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8C547] focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8C547] focus:border-transparent outline-none"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
              <option value="partial">Partial</option>
            </select>
          </div>
          <div>
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8C547] focus:border-transparent outline-none"
            >
              <option value="all">All Methods</option>
              <option value="api">API</option>
              <option value="sdk">SDK</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Status</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Business</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Address</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Method</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Confidence</th>
                <th className="text-left text-sm font-semibold text-gray-600 px-6 py-4">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredVerifications.map((verification) => (
                <tr key={verification.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(verification.status)}`}>
                      {getStatusIcon(verification.status)}
                      <span className="text-sm font-medium capitalize">{verification.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{verification.businessName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-2 max-w-md">
                      <MapPin className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-900">{verification.address}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
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
                  <td className="px-6 py-4">
                    {verification.confidence > 0 ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              verification.confidence >= 90
                                ? 'bg-green-500'
                                : verification.confidence >= 70
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${verification.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {verification.confidence}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={14} />
                      <span>{new Date(verification.timestamp).toLocaleString()}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredVerifications.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Filter className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900">No verifications found</h3>
          <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

const Activity = ({ className, size }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default VerificationsPage;
