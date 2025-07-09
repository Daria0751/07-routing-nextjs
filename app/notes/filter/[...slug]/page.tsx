import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes page',
};

interface Props {
  params: { slug?: string[] };
}

export default async function NotesPage({ params }: Props) {
  const tag = params.slug?.[0] || '';
  const safeTag = tag === 'All' ? '' : tag;

  const notes = await getNotes(safeTag, 1);

  return <NotesClient initialData={notes} tag={tag} />;
}
