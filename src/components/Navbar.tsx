import { ReactComponent as Logo } from '../assets/svgs/TikTok_logo.svg';
import { ReactComponent as SearchIcon } from '../assets/svgs/icon-search.svg';
import { ReactComponent as PlusIcon } from '../assets/svgs/plus.svg';
import { ReactComponent as SendIcon } from '../assets/svgs/send.svg';
import { ReactComponent as InboxIcon } from '../assets/svgs/inbox.svg';
import avatar from '../assets/images/ava-1.jpeg';

const Navbar = () => {
  return (
    <div className="border-b-lightGrey/20 border-b-[1.5px]">
      <div className="w-5/6 mx-auto px-20 flex justify-between items-center py-[9px] ">
        <Logo className="w-[118px] h-[42px]" />
        <form
          action=""
          className="flex items-center rounded-[92px] px-[16px] py-[12px] overflow-hidden relative bg-[rgba(22,24,35,0.06)]"
        >
          <input
            type="text"
            className="w-[292px] text-lightGrey/100 caret-pink outline-none font-roboto leading-[22px] bg-[transparent] border-none appearance-[textfield]"
            placeholder="Search accounts and videos"
          />
          <span className="bg-lightGrey w-[1px] h-[28px] mx-[-3px]"></span>
          <button className="pl-4">
            <SearchIcon width={24} height={24} fill="rgba(22,24,35,0.5)" />
          </button>
        </form>
        <div className="flex items-center relative gap-7">
          <a
            href=""
            className="cursor-pointer flex items-center border h-[36px] px-[16px] rounded-sm border-lightGrey/20"
          >
            <PlusIcon className="mr-2" />
            <span className=" leading-[24px] font-roboto text-[#161823]">Upload</span>
          </a>
          <a href="" className=" h-8 cursor-pointer flex items-center justify-center w-8 relative">
            <SendIcon className="block w-[26px] h-[26px]" />
          </a>
          <a href="" className=" h-8 cursor-pointer flex items-center justify-center w-8 relative">
            <InboxIcon className="block w-[26px] h-[26px]" />
            <span className="absolute text-xs font-roboto font-bold rounded-2xl bg-pink text-[#fff] w-[20px] h-[20px] flex items-center justify-center top-[-5px] right-[-5px]">
              3
            </span>
          </a>
          <div className="h-8 w-8 flex items-center justify-center rounded-[50%] cursor-pointer">
            <img src={avatar} alt="ava" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
