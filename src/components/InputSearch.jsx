const InputSearch = (props) => {
  return (
    <input
      type="text"
      {...props}
      className="w-full rounded-[50px] border border-white bg-transparent bg-[url('@/assets/img/search_icon.png')] bg-right bg-no-repeat py-[5px] px-[30px] text-[18px] text-white"
      style={{ backgroundSize: "20px", backgroundPosition: "98% center" }}
    />
  );
};

export default InputSearch;
