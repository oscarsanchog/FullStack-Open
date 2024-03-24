import Persons from "./Persons"

const Filter = ({ handleFilter, newFilter }) => (
  <section>
    <div>
      <label htmlFor='filter'>Filter shown with: </label>
      <input onChange={handleFilter} type='text' id='filter' />
    </div>
    <Persons persons={newFilter} />
  </section>
)
export default Filter