import { getNotes } from '@/lib/api';
import NotesClient from './[...slug]/Notes.client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Notes',
};

export default async function NotesPage() {
  const notes = await getNotes('', 1);

  return <NotesClient initialData={notes} tag="All" />;
}
