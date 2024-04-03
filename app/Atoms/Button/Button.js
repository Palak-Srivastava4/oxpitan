export const Button = ({
  onClick,
  className,
  btnName,
  icon = null,
  btn = false,
}) => {
  return (
    <>
      {btn ? (
        <button onClick={(e) => onClick(e)} className={className}>
          {icon}
          {btnName}
        </button>
      ) : (
        <button onClick={(e) => onClick(e)} className={className}>
          {btnName} {icon}
        </button>
      )}
    </>
  );
};
