import { create } from "zustand";

type MessengerStore = {
    selectedDepartment: string | null;
    setSelectedDepartment: (_value: string | null) => void;
};

export const useDepartmentsListStore = create<MessengerStore>((set) => ({
    selectedDepartment: null,
    setSelectedDepartment: (selectedDepartment) => set({ selectedDepartment }),
}));
