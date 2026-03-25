type NotesProps = {
  notes: string;
};

export function Notes({ notes }: NotesProps) {
  return (
    <div className="relative z-0 -mt-4 flex w-full items-center justify-center overflow-hidden rounded-b-[8px] border border-neutral-100 bg-neutral-50 px-6 pt-6 pb-3 text-center text-sm text-neutral-500">
      {notes}
    </div>
  );
}
