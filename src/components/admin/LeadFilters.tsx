import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { LeadFilters as LeadFiltersType } from '@/hooks/useLeads';

interface LeadFiltersProps {
  onFilterChange: (filters: LeadFiltersType) => void;
}

export const LeadFilters = ({ onFilterChange }: LeadFiltersProps) => {
  const [filters, setFilters] = useState<LeadFiltersType>({
    status: 'all',
    lawyer: '',
    specialty: '',
    search: '',
  });

  const handleFilterChange = (key: keyof LeadFiltersType, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: LeadFiltersType = {
      status: 'all',
      lawyer: '',
      specialty: '',
      search: '',
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome, telefone ou email..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="pl-9"
        />
      </div>

      <Select
        value={filters.status}
        onValueChange={(value) => handleFilterChange('status', value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="new">Novo</SelectItem>
          <SelectItem value="in_progress">Em atendimento</SelectItem>
          <SelectItem value="converted">Convertido</SelectItem>
          <SelectItem value="archived">Arquivado</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.specialty}
        onValueChange={(value) => handleFilterChange('specialty', value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Especialidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">Todas</SelectItem>
          <SelectItem value="CIVIL">Civil</SelectItem>
          <SelectItem value="TRABALHISTA">Trabalhista</SelectItem>
          <SelectItem value="PENAL">Criminal</SelectItem>
          <SelectItem value="FAMILIA">Família</SelectItem>
          <SelectItem value="PREVIDENCIARIO">Previdenciário</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="icon" onClick={clearFilters}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
