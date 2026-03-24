type NotesProps = {
  notes: string;
};

export function Notes({ notes }: NotesProps) {
  return (
    <div className="relative z-[1] -mt-0.5 flex w-full items-center justify-center overflow-hidden rounded-b-[8px] border-t border-neutral-100 bg-neutral-50 px-6 py-4 text-center text-sm text-neutral-500">
      {notes}
    </div>
  );
}
