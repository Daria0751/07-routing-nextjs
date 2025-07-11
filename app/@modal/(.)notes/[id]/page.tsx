import { getSingleNote } from '@/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import NotePreview from './NotePreview.client';
import Modal from '@/components/Modal/Modal';

export default async function ModalNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  if (!resolvedParams.id || isNaN(id)) {
    return notFound();
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal onClose={() => history.back()}>
        <NotePreview id={id} />
      </Modal>
    </HydrationBoundary>
  );
}






