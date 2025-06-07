import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface SidebarItemsInterface {
    name: string,
    icon: ReactNode | LucideIcon,
    href: string
}

export type { SidebarItemsInterface };