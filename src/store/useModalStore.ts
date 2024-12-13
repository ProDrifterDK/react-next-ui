import { create } from "zustand";
import { ModalItem } from "../types/ModalItem";

interface ModalState {
  isOpen: boolean;
  selectedItem: ModalItem | null;
  openModal: (item: ModalItem) => void;
  closeModal: () => void;
  selectItem: (item: ModalItem) => void;

  isKpiModalOpen: boolean;
  openKpiModal: () => void;
  closeKpiModal: () => void;

  isLayoutModalOpen: boolean;
  openLayoutModal: () => void;
  closeLayoutModal: () => void;

  isStoryboardModalOpen: boolean;
  openStoryboardModal: () => void;
  closeStoryboardModal: () => void;

  isDataVizModalOpen: boolean;
  openDataVizModal: () => void;
  closeDataVizModal: () => void;

  isAccessRequestModalOpen: boolean;
  openAccessRequestModal: () => void;
  closeAccessRequestModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedItem: null,
  openModal: (item: ModalItem) => set({ isOpen: true, selectedItem: item }),
  closeModal: () => set({ isOpen: false, selectedItem: null }),
  selectItem: (item: ModalItem) => set({ selectedItem: item }),

  isKpiModalOpen: false,
  openKpiModal: () => set({ isKpiModalOpen: true }),
  closeKpiModal: () => set({ isKpiModalOpen: false }),

  isLayoutModalOpen: false,
  openLayoutModal: () => set({ isLayoutModalOpen: true }),
  closeLayoutModal: () => set({ isLayoutModalOpen: false }),

  isStoryboardModalOpen: false,
  openStoryboardModal: () => set({ isStoryboardModalOpen: true }),
  closeStoryboardModal: () => set({ isStoryboardModalOpen: false }),

  isDataVizModalOpen: false,
  openDataVizModal: () => set({ isDataVizModalOpen: true }),
  closeDataVizModal: () => set({ isDataVizModalOpen: false }),

  isAccessRequestModalOpen: false,
  openAccessRequestModal: () => set({ isAccessRequestModalOpen: true }),
  closeAccessRequestModal: () => set({ isAccessRequestModalOpen: false }),
}));

export default useModalStore;
