const PersonForm = ({newPerson, handleOnChange, handleOnSubmit}) => (
    <form onSubmit={handleOnSubmit}>
        
        <div>
          <label htmlFor='name'>Name: </label>
          <input value={newPerson.name} id='name' onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor='number'>Number: </label>
          <input
            value={newPerson.number}
            id='number'
            onChange={handleOnChange}
          />
        </div>

        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
  )

export default PersonForm