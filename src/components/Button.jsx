const Button = (props) => {
  const { color, bgColor, children } = props;

  return (
    <button
      {...props}
      className="text-md w-[130px] cursor-pointer rounded-[50px] px-[15px] py-[3px]"
      style={{ ...props.style, color, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

export default Button;
