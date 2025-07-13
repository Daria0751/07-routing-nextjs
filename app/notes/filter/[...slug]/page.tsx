import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filtered Notes',
};

interface PageProps {
  params: {
    slug?: string[];
  };
}

export default async function NotesFilteredPage({ params }: PageProps) {
  const slug = params.slug ?? [];
  const tag = slug[0] || '';
  const safeTag = tag === 'All' ? '' : tag;

  const notes = await fetchNotes('', 1, safeTag);

  return <NotesClient initialData={notes} tag={tag} />;
}



