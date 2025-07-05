import NotePreview from '@/components/NotePreview/NotePreview';
import type { JSX } from 'react';

type PageProps = {
  params: { id: string };
};


export default async function NotePage({ params }: PageProps): Promise<JSX.Element> {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error('Invalid note ID');
  }

  return <NotePreview id={id} />;
}

