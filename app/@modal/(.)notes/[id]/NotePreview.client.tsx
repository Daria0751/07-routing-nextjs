'use client';

import Modal from '@/components/Modal/Modal';
import { getSingleNote } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export default function NotePreview({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
  });

  if (isLoading) return null;
  if (error || !note) return null;

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Tag: {note.tag}</p>
      <p>Created: {note.createdAt}</p>
    </Modal>
  );
}


