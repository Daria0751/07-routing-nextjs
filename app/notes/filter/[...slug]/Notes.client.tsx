'use client';

import NotesClient from '@/components/NotesClient/NotesClient';
import type { Note } from '@/types/note';

interface Props {
  tag?: string;
  initialData: {
    notes: Note[];
    totalPages: number;
  };
}

export default function NotesClientWrapper(props: Props) {
  return <NotesClient {...props} />;
}
