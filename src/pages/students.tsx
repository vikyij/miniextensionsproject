import { useState, ChangeEvent, FormEventHandler } from 'react'
import './students.css'

const Students = () => {
  const [studentName, setStudentName] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentName(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault()
    console.log(studentName)
  }

  return (
    <form className='wrapper-div' onSubmit={handleSubmit}>
      <section>
        <label htmlFor='student-name' style={{ marginRight: '10px' }}>
          Student Name:
        </label>
        <input
          type='text'
          value={studentName}
          id='student-name'
          name='studentName'
          onChange={handleChange}
          required
        />
      </section>

      <button type='submit' style={{ marginTop: '20px' }}>
        Login
      </button>
    </form>
  )
}

export default Students
