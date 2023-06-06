import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHeading,
  AddNoteContainer,
  InputTitle,
  NoteTextarea,
  ButtonContainer,
  Button,
  EmptyNotesContainer,
  EmptyNotesImage,
  EmptyNotesHeading,
  EmptyNotesParagraph,
  AllNotesContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const changeTitle = e => {
    setTitle(e.target.value)
  }

  const changeNote = e => {
    setNote(e.target.value)
  }

  const addNote = () => {
    // console.log('clicked!!')
    setNotes(prev => [...prev, {title, note, id: uuid()}])
    setTitle('')
    setNote('')
  }

  const renderEmptyView = () => (
    <EmptyNotesContainer>
      <EmptyNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <EmptyNotesParagraph>Notes you add will appear here</EmptyNotesParagraph>
    </EmptyNotesContainer>
  )

  const renderAllNotes = () => {
    console.log(notes)
    return (
      <AllNotesContainer>
        {notes.map(eachNote => (
          <NoteItem key={eachNote.id} noteDetails={eachNote} />
        ))}
      </AllNotesContainer>
    )
  }

  const renderNotes = () =>
    notes.length === 0 ? renderEmptyView() : renderAllNotes()

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <AddNoteContainer onSubmit={addNote}>
        <InputTitle
          type="text"
          placeholder="Title"
          onChange={changeTitle}
          value={title}
        />
        <NoteTextarea
          placeholder="Take a Note..."
          onChange={changeNote}
          value={note}
        />

        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </AddNoteContainer>
      {renderNotes()}
    </MainContainer>
  )
}

export default Notes
