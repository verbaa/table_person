import Modal from "./Modal"
import {useState} from 'react'
import {useAddMemberMutation} from './services/peopleApi'

function AddMember({onClose, open}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState(null)
    const [about, setAbout] = useState('')
    const [addMember] = useAddMemberMutation()

    const handleAddMember = (e) => {
        e.preventDefault()
        const member = {
            name,
            about,
            id: Math.random()
        }
        addMember(member)
        onClose()
    }

    return (
        <Modal modalLable='Add Member' onClose={onClose} open={open}>
            <form className='addMember' name='addMember' onSubmit={handleAddMember}>
                <input
                    type='name'
                    name='name'
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                    value={name}
                    placeholder='Enter Name'/>
              <input
                  type='age'
                  name='age'
                  onChange={(e) => setAge(e.target.value.toUpperCase())}
                  value={age}
                  placeholder='Enter Age'/>
                <textarea
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder='Enter member about'
                    value={about}/>
                <button type='submit'>Done</button>
            </form>
        </Modal>
    )
}

export default AddMember
