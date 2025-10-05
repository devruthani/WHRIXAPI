import { useState } from 'react';
import { Search, Filter, Eye, MoreVertical, TrendingUp, Activity } from 'lucide-react';
import { mockBusinesses } from '../data/mockData';
import { Business } from '../types';

interface BusinessesPageProps {
  onSelectBusiness: (business: Business) => void;
}

const BusinessesPage = ({ onSelectBusiness }: BusinessesPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [planFilter, setPlanFilter] = useState<string>('all');

  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || business.status === statusFilter;
    const matchesPlan = planFilter === 'all' || business.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      case 'suspended':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-700';
      case 'professional':
        return 'bg-blue-100 text-blue-700';
      case 'starter':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Businesses</h1>
        <p className="text-gray-600 mt-1">Manage and monitor all registered businesses</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search businesses..."
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          <div>
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8C547] focus:border-transparent outline-none"
            >
              <option value="all">All Plans</option>
              <option value="enterprise">Enterprise</option>
              <option value="professional">Professional</option>
              <option value="starter">Starter</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredBusinesses.map((business) => (
          <div
            key={business.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8C547] to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-xl">
                      {business.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-bold text-gray-900">{business.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(business.status)}`}>
                        {business.status}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPlanColor(business.plan)}`}>
                        {business.plan}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{business.email}</p>
                    <div className="flex items-center space-x-6 mt-3">
                      <div>
                        <p className="text-xs text-gray-500">Industry</p>
                        <p className="text-sm font-medium text-gray-900">{business.industry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Contact</p>
                        <p className="text-sm font-medium text-gray-900">{business.contact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Joined</p>
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(business.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onSelectBusiness(business)}
                className="ml-4 px-4 py-2 bg-[#E8C547] text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200 flex items-center space-x-2"
              >
                <Eye size={16} />
                <span>View Details</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-600 font-medium">Total Verifications</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">
                      {business.totalVerifications.toLocaleString()}
                    </p>
                  </div>
                  <Activity className="text-blue-600" size={24} />
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-green-600 font-medium">Success Rate</p>
                    <p className="text-2xl font-bold text-green-900 mt-1">{business.successRate}%</p>
                  </div>
                  <TrendingUp className="text-green-600" size={24} />
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div>
                  <p className="text-xs text-purple-600 font-medium">API Key</p>
                  <p className="text-sm font-mono text-purple-900 mt-1 truncate">{business.apiKey}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div>
                  <p className="text-xs text-gray-600 font-medium">Last Activity</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {new Date(business.lastActivity).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(business.lastActivity).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Filter className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900">No businesses found</h3>
          <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default BusinessesPage;
