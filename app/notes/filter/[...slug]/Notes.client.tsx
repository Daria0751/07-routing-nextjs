'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getNotes } from '@/lib/api';
import type { Note } from '@/types/note';

import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import NoteList from '@/components/NoteList/NoteList';
import NoteForm from '@/components/NoteForm/NoteForm';
import Modal from '@/components/Modal/Modal';

interface Props {
  tag?: string;
  initialData: {
    notes: Note[];
    totalPages: number;
  };
}

export default function NotesClient({ tag = '', initialData }: Props) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['notes', { tag, search, page }],
    queryFn: () => getNotes(`${tag} ${search}`.trim(), page),
    placeholderData: initialData,
    staleTime: 1000 * 60 * 5,
  });

  if (!data) return null; // ✅ захист від undefined

  return (
    <>
      <SearchBox value={search} onChange={setSearch} />
      <NoteList notes={data.notes} />
      <Pagination
        totalPages={data.totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
      <button onClick={() => setIsModalOpen(true)}>Add Note</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm
  onClose={() => setIsModalOpen(false)}
  onSuccess={() => setIsModalOpen(false)}
/>
        </Modal>
      )}
    </>
  );
}

