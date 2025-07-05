'use client';

import { useQuery } from '@tanstack/react-query';
import { getNotes } from '@/lib/api'; // ✅ Замість fetchNotes
import { Note } from '@/types/note';
import NoteList from '@/components/NoteList/NoteList';

interface Props {
  tag?: string;
  initialData: Note[];
}

export default function NotesClient({ tag, initialData }: Props) {
  const queryTag = !tag || tag === 'All' ? '' : tag;

  const { data = [] } = useQuery<Note[]>({
    queryKey: ['notes', queryTag],
    queryFn: () => getNotes(queryTag, 1).then(res => res.notes),
    initialData,
  });

  return <NoteList notes={data} />;
}


