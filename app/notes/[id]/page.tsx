import NotePreview from '@/components/NotePreview/NotePreview';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function NotePage({ params }: PageProps) {
  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error('Invalid note ID');
  }

  return <NotePreview id={id} />;
}
