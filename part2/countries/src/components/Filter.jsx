const Filter = ({ handleFilter }) => (
    <section>
      <div>
        <label htmlFor='countries'>Find countries</label>
        <input onChange={handleFilter} type='text' id='countries' />
      </div>
    </section>
  )

export default Filter
