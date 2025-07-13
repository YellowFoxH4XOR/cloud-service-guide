import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search AWS services..." 
}: SearchBarProps) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/50"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
    </div>
  );
}