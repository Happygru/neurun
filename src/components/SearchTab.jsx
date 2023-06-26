const SearchTab = (props) => {
  const { selected, children } = props;
  return (
    <div
      {...props}
      className={`text-md cursor-pointer rounded-[50px] border border-white px-[15px] py-[5px] transition-all hover:bg-white hover:text-black hover:transition-all ${
        selected ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      {children}
    </div>
  );
};

export default SearchTab;
