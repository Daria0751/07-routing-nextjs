'use client';

import { ReactNode, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: Props) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    onClose?.(); // якщо передано
    router.back(); // повертаємось назад
  }, [onClose, router]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [handleClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
}

