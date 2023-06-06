import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  text-align: center;
  color: #4c63b6;
`

export const AddNoteContainer = styled.form`
  box-shadow: 2px 2px 2px 2px #cbd5e1;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
`

export const InputTitle = styled.input`
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
`

export const NoteTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 50px;
  border: none;
  &:focus {
    outline: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 20px;
`

export const Button = styled.button`
  color: white;
  background-color: #4c63b6;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
`

export const AllNotesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const EmptyNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const EmptyNotesImage = styled.img`
  width: 50px;
  height: 50px;
`

export const EmptyNotesHeading = styled.h1``

export const EmptyNotesParagraph = styled.p``
