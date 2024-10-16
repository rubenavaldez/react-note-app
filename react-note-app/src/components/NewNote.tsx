/** @format */

import NoteForm from "./NoteForm";
import { NewNoteProps } from "../interfaces";

export default function NewNote({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  return (
    <div>
      <h1 className="mb-4"> New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
}
