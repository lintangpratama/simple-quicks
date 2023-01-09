import SearchIcon from "@Assets/icons/search_24px.svg";
import Quicks from "./components/FloatingButton/Quicks";

export default function App() {
  return (
    <main className="flex w-full h-screen bg-background-main">
      <aside className="w-[285px] h-full border-r border-[#F2F2F2]"></aside>
      <div className="w-full">
        <div className="flex w-full bg-[#4F4F4F] h-[58px]">
          <img
            src={SearchIcon}
            width={16}
            height={16}
            className="items-center ml-[26px]"
            alt="search-icon"
          />
        </div>
      </div>
      <Quicks />
    </main>
  );
}
