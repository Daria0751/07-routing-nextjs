import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filtered Notes',
};

export default async function NotesFilteredPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug ?? [];
  const tag = slug[0] || '';
  const safeTag = tag === 'All' ? '' : tag;

  const notes = await getNotes(safeTag, 1);

  return <NotesClient initialData={notes} tag={tag} />;
}



