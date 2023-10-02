// ModalContext.tsx
import React, { useState, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/modal/Modal';

interface ModalConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
}

const ModalContext = React.createContext<(config: ModalConfig) => void>(() => {});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

  const showModal = useCallback((config: ModalConfig) => {
    setModalConfig(config);
  }, []);

  const hideModal = useCallback(() => {
    setModalConfig(null);
  }, []);

  return (
    <ModalContext.Provider value={showModal}>
      {children}
      {modalConfig && (
        ReactDOM.createPortal(
          <Modal hide={hideModal} {...modalConfig} />,
          document.body
        )
      )}
    </ModalContext.Provider>
  );
};
