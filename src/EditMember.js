import Modal from "./Modal"
import {useState} from 'react'
import {useUpdateMemberMutation} from './services/peopleApi'

function EditMember({open, onClose, toEditName, toEditAbout, toEditAge, id}) {

  const [name, setName] = useState(toEditName)
  const [age, setAge] = useState(toEditAge)
  const [about, setAbout] = useState(toEditAbout)
  const [updateMember] = useUpdateMemberMutation()

  const handleUpdateMember = (e) => {
    e.preventDefault()
    const member = {
      name,
      about,
      age,
      id
    }
    updateMember(member)
    onClose()
  }

  return (
    <Modal modalLable='Edit Member' onClose={onClose} open={open}>
      <form className='editMember' name='updateMember' onSubmit={handleUpdateMember}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={(e) => setName(e.target.value.toUpperCase())}
          value={name}/>
        <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={(e) => setAge(e.target.value.toUpperCase())}
            value={age}/>
        <textarea onChange={(e) => setAbout(e.target.value)} value={about}/>
        <button type='submit'>Save</button>
      </form>
    </Modal>
  )
}

export default EditMember
