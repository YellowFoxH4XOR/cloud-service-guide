import { useState } from 'react';
import { Header } from '@/components/Header';
import { ServicesSidebar } from '@/components/ServicesSidebar';
import { ServiceDetail } from '@/components/ServiceDetail';
import { ChatPanel } from '@/components/ChatPanel';
import { awsServicesData } from '@/data/awsServices';
import { AWSService } from '@/data/awsServices';

const Index = () => {
  const [selectedService, setSelectedService] = useState<AWSService | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onChatToggle={toggleChat}
      />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <ServicesSidebar
          categories={awsServicesData}
          onServiceSelect={handleServiceSelect}
          selectedService={selectedService}
          searchTerm={searchTerm}
        />

        {/* Main Content Area */}
        <ServiceDetail service={selectedService} />

        {/* Chat Panel */}
        <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
