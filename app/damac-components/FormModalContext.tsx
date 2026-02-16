"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "roi" | "brochure" | "layout";

interface FormModalContextType {
  openFormModal: (type: ModalType) => void;
  isFormModalOpen: boolean;
  modalType: ModalType;
  closeFormModal: () => void;
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("roi");

  const openFormModal = (type: ModalType) => {
    setModalType(type);
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <FormModalContext.Provider
      value={{
        openFormModal,
        isFormModalOpen,
        modalType,
        closeFormModal,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (context === undefined) {
    throw new Error("useFormModal must be used within a FormModalProvider");
  }
  return context;
}

