import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes page',
};

export default async function NotesPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const tag = params.slug?.[0] || '';
  const safeTag = tag === 'All' ? '' : tag;

  const notes = await getNotes(safeTag, 1);

  return <NotesClient initialData={notes} tag={tag} />;
}
