const Continue = ({handleClick}) => {
  return (
      <button
      className=" text-white font-semibold rounded button"
      onClick={() => handleClick()}
    >
      Continue
    </button>
  )
}

export default Continue;