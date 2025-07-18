import { useState } from 'react';
import { ChevronDown, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { ServiceCategory, AWSService } from '@/data/awsServices';
import { useServiceCompletions } from '@/hooks/useServiceCompletions';
import { cn } from '@/lib/utils';

interface ServicesSidebarProps {
  categories: ServiceCategory[];
  onServiceSelect: (service: AWSService) => void;
  selectedService: AWSService | null;
  searchTerm: string;
  showCompletedOnly: boolean;
}

export function ServicesSidebar({ 
  categories, 
  onServiceSelect, 
  selectedService, 
  searchTerm,
  showCompletedOnly
}: ServicesSidebarProps) {
  const { isCompleted, toggleCompletion } = useServiceCompletions();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['Compute', 'Storage']) // Default expanded categories
  );

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const filterServices = (services: AWSService[]) => {
    let filtered = services;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by completion status
    if (showCompletedOnly) {
      filtered = filtered.filter(service => isCompleted(service.name));
    }
    
    return filtered;
  };

  const filteredCategories = categories
    .map(category => ({
      ...category,
      services: filterServices(category.services)
    }))
    .filter(category => category.services.length > 0);

  return (
    <div className="w-80 bg-card border-r border-border h-full overflow-y-auto">
      <div className="p-4 border-b border-border bg-gradient-surface">
        <h2 className="text-lg font-semibold text-foreground">AWS Services</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Explore {categories.reduce((acc, cat) => acc + cat.services.length, 0)} services
        </p>
      </div>
      
      <div className="p-2">
        {filteredCategories.map((category) => (
          <div key={category.category} className="mb-2">
            <button
              onClick={() => toggleCategory(category.category)}
              className={cn(
                "w-full flex items-center gap-2 p-3 rounded-lg text-left",
                "hover:bg-secondary/50 transition-colors duration-fast",
                "focus:outline-none focus:ring-2 focus:ring-ring"
              )}
            >
              {expandedCategories.has(category.category) ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="font-medium text-foreground">
                {category.category}
              </span>
              <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {category.services.length}
              </span>
            </button>
            
            {expandedCategories.has(category.category) && (
              <div className="ml-6 mt-1 space-y-1">
                {category.services.map((service) => (
                  <div key={service.name} className="flex items-center gap-1">
                    <button
                      onClick={() => toggleCompletion(service.name)}
                      className={cn(
                        "p-1 rounded-sm hover:bg-primary/10 transition-colors",
                        isCompleted(service.name) && "text-emerald-600"
                      )}
                      title={isCompleted(service.name) ? "Mark as incomplete" : "Mark as complete"}
                    >
                      <CheckCircle2 className={cn(
                        "h-3 w-3",
                        isCompleted(service.name) ? "fill-current" : "stroke-current"
                      )} />
                    </button>
                    <button
                      onClick={() => onServiceSelect(service)}
                      className={cn(
                        "flex-1 flex items-center gap-2 p-2 rounded-md text-left text-sm",
                        "hover:bg-primary/10 transition-colors duration-fast",
                        "focus:outline-none focus:ring-2 focus:ring-ring",
                        selectedService?.name === service.name && 
                        "bg-primary/20 text-primary font-medium",
                        isCompleted(service.name) && "bg-emerald-50 dark:bg-emerald-950/20"
                      )}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate">{service.name}</span>
                          {service.isExamCritical && (
                            <Award className="h-3 w-3 text-accent shrink-0" />
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {filteredCategories.length === 0 && searchTerm && (
          <div className="p-4 text-center text-muted-foreground">
            <p>No services found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}