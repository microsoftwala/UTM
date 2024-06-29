const Continue = ({ handleClick, onDisable }) => {
  return (
    <button
      className={
        onDisable
          ? "font-semibold rounded button1"
          : "text-white font-semibold rounded button"
      }
      onClick={() => handleClick()}
    >
      Continue
    </button>
  );
};

export default Continue;
