const Notification = ({ message }) => {
  const { successMessage, errorMessage } = message
  return successMessage ? (
    <div className='successMessage'>{successMessage}</div>
  ) : errorMessage ? (
    <div className='errorMessage'>{errorMessage}</div>
  ) : null

  /* if(successMessage) return <div className='successMessage'>{successMessage}</div>
  if(errorMessage) return <div className='errorMessage'>{errorMessage}</div>
  else return null */
}
export default Notification
