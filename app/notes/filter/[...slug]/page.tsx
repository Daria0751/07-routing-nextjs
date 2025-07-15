import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'Filtered Notes',
};

export default function NotesFilteredPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = use(params);
  const tag = slug[0] || '';
  const safeTag = tag === 'All' ? '' : tag;

  const notes = use(fetchNotes('', 1, safeTag));

  return <NotesClient initialData={notes} tag={tag} />;
}



