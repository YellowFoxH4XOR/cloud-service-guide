import { Cloud, MessageSquare } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onChatToggle: () => void;
}

export function Header({ searchTerm, onSearchChange, onChatToggle }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Cloud className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              AWS Services Explorer
            </h1>
            <p className="text-xs text-muted-foreground">
              Interactive service catalog with SAA-C03 insights
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            placeholder="Search AWS services, descriptions, or exam topics..."
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onChatToggle}
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <MessageSquare className="h-4 w-4" />
            AI Assistant
          </Button>
        </div>
      </div>
    </header>
  );
}