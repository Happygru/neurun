import { useState } from "react";
import InputSearch from "@/components/InputSearch";
import Message from "@/components/Message";
import SearchTab from "@/components/SearchTab";

const Search = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full bg-white/10">
      <div className="m-auto w-4/6 max-w-[800px] py-[50px]">
        <InputSearch />
        <div className="mt-[20px] flex gap-4">
          <SearchTab
            selected={selected === "all"}
            onClick={() => setSelected("all")}
          >
            All
          </SearchTab>
          <SearchTab
            selected={selected === "Courses"}
            onClick={() => setSelected("Courses")}
          >
            Courses
          </SearchTab>
          <SearchTab
            selected={selected === "Retailers"}
            onClick={() => setSelected("Retailers")}
          >
            Retailers
          </SearchTab>
          <SearchTab
            selected={selected === "Experts"}
            onClick={() => setSelected("Experts")}
          >
            Experts
          </SearchTab>
        </div>
      </div>
      <div className="container m-auto min-h-screen">
        <Message color="#ffffff" position="left">
          Switzerland is renowned for its breathtaking landscape and is a
          fantastic destination for mountain biking. Here are some of the best
          places to go mountain biking in Switzerland:
        </Message>
        <Message color="#9F72FF" position="right">
          Switzerland is renowned for its breathtaking landscape and is a
          fantastic destination for mountain biking. Here are some of the best
          places to go mountain biking in Switzerland:
        </Message>
        <Message color="#ffffff" position="left">
          Switzerland is renowned for its breathtaking landscape and is a
          fantastic destination for mountain biking. Here are some of the best
          places to go mountain biking in Switzerland:
        </Message>
        <Message color="#9F72FF" position="right">
          Switzerland is renowned for its breathtaking landscape and is a
          fantastic destination for mountain biking. Here are some of the best
          places to go mountain biking in Switzerland:
        </Message>
      </div>
    </div>
  );
};

export default Search;
