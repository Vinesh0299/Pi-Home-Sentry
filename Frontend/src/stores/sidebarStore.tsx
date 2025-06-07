import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SidebarState {
    isExpanded: boolean;
    toggleSidebar: () => void;
    setIsExpanded: (isExpanded: boolean) => void;
}

export const useSidebarStore = create(
    persist(
        (set) => ({
            isExpanded: false,
            toggleSidebar: () => set((state: SidebarState) => ({ isExpanded: !state.isExpanded })),
            setIsExpanded: (isExpanded: boolean) => set({ isExpanded }),
        }),
        { name: 'sidebar-state' }
    )
)