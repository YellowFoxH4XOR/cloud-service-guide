import { useState } from 'react';
import { Header } from '@/components/Header';
import { ServicesSidebar } from '@/components/ServicesSidebar';
import { ServiceDetail } from '@/components/ServiceDetail';
import { awsServicesData } from '@/data/awsServices';
import { AWSService } from '@/data/awsServices';

const Index = () => {
  const [selectedService, setSelectedService] = useState<AWSService | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  const handleServiceSelect = (service: AWSService) => {
    setSelectedService(service);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    // Clear selection if searching
    if (term && selectedService) {
      setSelectedService(null);
    }
  };

  const toggleCompleted = () => {
    setShowCompletedOnly(!showCompletedOnly);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        showCompletedOnly={showCompletedOnly}
        onToggleCompleted={toggleCompleted}
      />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <ServicesSidebar
          categories={awsServicesData}
          onServiceSelect={handleServiceSelect}
          selectedService={selectedService}
          searchTerm={searchTerm}
          showCompletedOnly={showCompletedOnly}
        />

        {/* Main Content Area */}
        <ServiceDetail service={selectedService} />
      </div>
    </div>
  );
};

export default Index;
