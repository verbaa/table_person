import Member from './Member'
import AddMember from './AddMember'
import {useState} from 'react'
import { useMembersQuery } from './services/peopleApi'

function MemberHome() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const {data, error, isLoading, isSuccess} = useMembersQuery()

  return (
    <div className='memberHome'>
      <div className='memberHome__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Add member +
        </button>
        <div className='memberHome__members'>
          <div className='isErrorIsLoading'>
            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>}
          </div>
          {isSuccess && (
            <>
              {data.map((member) => (
                <Member
                  id={member.id}
                  key={member.id}
                  age={member.age}
                  name={member.name}
                  about={member.about}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {openAddModal &&
        <AddMember onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default MemberHome
