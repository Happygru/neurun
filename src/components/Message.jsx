const Message = (props) => {
  const { position, children, color } = props;
  return (
    <div
      className={`my-[20px] flex w-full ${
        position === "center"
          ? "justify-center"
          : position === "right"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        {...props}
        className={`w-full max-w-[700px] rounded-tl-2xl rounded-br-2xl border bg-black/20 p-[25px] text-sm leading-8`}
        style={{ borderColor: `${color}`, color }}
      >
        {children}
      </div>
    </div>
  );
};

export default Message;
