import { useState } from 'react';
import Sidebar from './components/Sidebar';
import OverviewPage from './pages/OverviewPage';
import BusinessesPage from './pages/BusinessesPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import VerificationsPage from './pages/VerificationsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ApiUsagePage from './pages/ApiUsagePage';
import SdkMonitorPage from './pages/SdkMonitorPage';
import SettingsPage from './pages/SettingsPage';
import { Business } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedBusiness(null);
  };

  const handleSelectBusiness = (business: Business) => {
    setSelectedBusiness(business);
    setCurrentPage('business-detail');
  };

  const handleBackToBusinesses = () => {
    setSelectedBusiness(null);
    setCurrentPage('businesses');
  };

  const renderPage = () => {
    if (currentPage === 'business-detail' && selectedBusiness) {
      return <BusinessDetailPage business={selectedBusiness} onBack={handleBackToBusinesses} />;
    }

    switch (currentPage) {
      case 'overview':
        return <OverviewPage />;
      case 'businesses':
        return <BusinessesPage onSelectBusiness={handleSelectBusiness} />;
      case 'verifications':
        return <VerificationsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'api-usage':
        return <ApiUsagePage />;
      case 'sdk-monitor':
        return <SdkMonitorPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
