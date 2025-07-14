'use client';

import { use } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotePreview from './NotePreview.client';
import Modal from '@/components/Modal/Modal';

const queryClient = new QueryClient();

export default function ModalNotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const noteId = Number(id);

  if (!id || isNaN(noteId)) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Modal onClose={() => window.history.back()}>
        <NotePreview id={noteId} />
      </Modal>
    </QueryClientProvider>
  );
}







