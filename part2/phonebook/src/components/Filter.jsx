import Persons from "./Persons"

const Filter = ({ handleFilter, newFilter, deletePerson }) => (
  <section>
    <div>
      <label htmlFor='filter'>Filter shown with: </label>
      <input onChange={handleFilter} type='text' id='filter' />
    </div>
    <Persons persons={newFilter} deletePerson={deletePerson} />
  </section>
)
export default Filter