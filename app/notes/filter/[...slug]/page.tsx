import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filtered Notes',
};

interface PageProps {
  params: { slug: string[] };
}

export default async function NotesFilteredPage({ params }: PageProps) {
  // Від params.slug завжди приходить масив
  const [tag] = params.slug;
  const safeTag = tag === 'All' ? '' : tag;

  // Серверний виклик без хуків
  const notesData = await fetchNotes('', 1, safeTag);

  return <NotesClient initialData={notesData} tag={tag} />;
}



