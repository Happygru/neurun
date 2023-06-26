import InputSearch from "@/components/InputSearch";
import icon1 from "@/assets/img/svg_icon1.svg";
import icon2 from "@/assets/img/svg_icon2.svg";
import icon3 from "@/assets/img/svg_icon3.svg";
import icon4 from "@/assets/img/svg_icon4.svg";

import thumbnail1 from "@/assets/img/video_thumbnail1.png";
import thumbnail2 from "@/assets/img/video_thumbnail2.png";
import thumbnail3 from "@/assets/img/video_thumbnail3.png";
import playButton from "@/assets/img/play_button.png";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="m-auto w-4/6 max-w-[800px] py-[30px]">
        <InputSearch />
      </div>
      <div className="bg-[rgba(255,255,255,0.2)]">
        <div className="container m-auto">
          <h1 className="py-[20px] text-center text-[50px] font-bold text-white">
            Tlps on <span className="text-[#B085FF]">Exploring</span> Your
            Journey
          </h1>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vitae hendrerit magna, et maximus sem.
          </p>
          <p className="text-center text-white">
            Cras sed augue lacinia, dapibus elit at, volutpat nunc.
          </p>
          <div className="h-[80px]" />
          <div className="flex flex-wrap justify-center pb-[80px] sm:justify-between">
            <div className="flex w-full max-w-[250px] flex-col items-center gap-4 sm:w-1/2 lg:w-1/4">
              <img
                src={icon1}
                alt="Featured Icon"
                className="my-4 w-full max-w-[80px]"
              />
              <p className="text-bold text-center text-2xl text-white">
                Featured Trails
              </p>
              <p className="text-bold text-md text-center text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex w-full max-w-[250px] flex-col items-center gap-4 sm:w-1/2 lg:w-1/4">
              <img
                src={icon2}
                alt="Featured Icon"
                className="my-4 w-full max-w-[80px]"
              />
              <p className="text-bold text-center text-2xl text-white">
                Help Me find my bike
              </p>
              <p className="text-bold text-md text-center text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex w-full max-w-[250px] flex-col items-center gap-4 sm:w-1/2 lg:w-1/4">
              <img
                src={icon3}
                alt="Featured Icon"
                className="my-4 w-full max-w-[80px]"
              />
              <p className="text-bold text-center text-2xl text-white">
                Tlps from riders
              </p>
              <p className="text-bold text-md text-center text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex w-full max-w-[250px] flex-col items-center gap-4 sm:w-1/2 lg:w-1/4">
              <img
                src={icon4}
                alt="Featured Icon"
                className="my-4 w-full max-w-[80px]"
              />
              <p className="text-bold text-center text-2xl text-white">
                Local Stores
              </p>
              <p className="text-bold text-md text-center text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px] pb-[80px]">
        <div className="container m-auto">
          <h1 className="mb-[40px] text-center text-4xl font-bold text-white">
            Trending Searches
          </h1>
          <div className="flex w-full flex-wrap justify-center sm:flex-nowrap sm:justify-between">
            <div className="w-full max-w-[250px] sm:w-1/3">
              <div className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src={playButton}
                  alt="playButton"
                  className="absolute z-20 w-10"
                />
                <img
                  src={thumbnail1}
                  alt="thumbnail1"
                  className="transition-all duration-300  group-hover:scale-110"
                />
              </div>
              <p className="text-bold py-[15px] text-center text-lg text-white">
                Hells Cliff
              </p>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-full max-w-[250px] sm:w-1/3">
              <div className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src={playButton}
                  alt="playButton"
                  className="absolute z-20 w-10"
                />
                <img
                  src={thumbnail2}
                  alt="thumbnail1"
                  className="transition-all duration-300  group-hover:scale-110"
                />
              </div>
              <p className="text-bold py-[15px] text-center text-lg text-white">
                Gravel Adventures
              </p>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-full max-w-[250px] sm:w-1/3">
              <div className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src={playButton}
                  alt="playButton"
                  className="absolute z-20 w-10"
                />
                <img
                  src={thumbnail3}
                  alt="thumbnail1"
                  className="transition-all duration-300  group-hover:scale-110"
                />
              </div>
              <p className="text-bold py-[15px] text-center text-lg text-white">
                Clibming High
              </p>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
