import {
  EachNoteContainer,
  EachNoteHeading,
  EachNoteDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <EachNoteContainer>
      <EachNoteHeading>{title}</EachNoteHeading>
      <EachNoteDescription>{note}</EachNoteDescription>
    </EachNoteContainer>
  )
}

export default NoteItem
