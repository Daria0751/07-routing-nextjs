'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface Props {
  children: ReactNode;
}

export default function Modal({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [router]);

  return createPortal(
    <>
      <div className={css.backdrop} onClick={() => router.back()} />
      <div className={css.modal}>{children}</div>
    </>,
    document.body
  );
}
