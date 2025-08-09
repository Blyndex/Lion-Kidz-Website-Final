
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface BackLinkProps {
  to: string;
  label: string;
  className?: string;
}

const BackLink = ({ to, label, className = "" }: BackLinkProps) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex items-center space-x-2 text-muted-foreground hover:text-brand-lime transition-colors duration-300 group ${className}`}
    >
      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="font-alegreya font-medium">{label}</span>
    </NavLink>
  );
};

export default BackLink;
