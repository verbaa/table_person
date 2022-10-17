import {useState} from 'react'
import EditMember from './EditMember'
import {useDeleteMemberMutation} from './services/peopleApi'
import {useUpdateMemberMutation} from './services/peopleApi'


function Member({id, name, about, age}) {

  const [open, setOpen] = useState({edit:false})
  const [deleteMember] = useDeleteMemberMutation()
  const [updateMember] = useUpdateMemberMutation()


  const handleClose = () => {
    setOpen({edit:false})
  }

  const handleDeleteMember = (e) => {
    e.preventDefault()
    deleteMember(id)
    handleClose()
  }



  return (
    <div className='member'>
      <div className='member__body'>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>{about}</p>
        <div className='member__buttons'>
          <div className='member__deleteNedit'>
            <button
              className='member__editButton'
              onClick={() => setOpen({...open, edit: true})}>
              Edit
            </button>
            <button className='member__deleteButton' onClick={handleDeleteMember}>Delete</button>
          </div>
        </div>
      </div>
      {open.edit &&
        <EditMember
          onClose={handleClose}
          toEditName={name}
          toEditAge={age}
          toEditAbout={about}
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Member
