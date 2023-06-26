import { HiOutlineStar } from "react-icons/hi2";
import Button from "@/components/Button";

import InputSearch from "@/components/InputSearch";
import thumbnail1 from "@/assets/img/video_thumbnail1.png";
import playButton from "@/assets/img/play_button.png";

import news from "@/assets/img/news.png";

const Result = () => {
  return (
    <div className="w-full bg-white/10">
      <div className="m-auto w-4/6 max-w-[800px] py-[50px]">
        <InputSearch />
      </div>
      <div className="container m-auto min-h-screen">
        <h1 className="mb-[40px] py-[20px] text-center text-[40px] font-bold text-white">
          Ok, Here Are The
          <span className="text-[#B085FF]">Top 5 Places</span> To Mountain Bike
          in Switzerland...
        </h1>
        <div className="grid grid-cols-6">
          <div className="col-span-4 flex flex-col gap-12">
            <div className="flex gap-6">
              <div className="group relative flex w-1/3 min-w-[250px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
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
              <div>
                <h1 className="text-lg font-bold text-white">Verbier:</h1>
                <p className="text-md text-white">
                  Located in the Swiss Alps, Verbier offers a vast network of
                  trails suitable for all levels of mountain bikers. You can
                  enjoy a mix of downhill tracks, cross-country trails, and
                  freeride routes, all while surrounded by stunning mountain
                  scenery.
                </p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                  </div>
                  <Button color="white" bgColor="#299807">
                    Easy
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="group relative flex w-1/3 min-w-[250px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
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
              <div>
                <h1 className="text-lg font-bold text-white">Zermatt:</h1>
                <p className="text-md text-white">
                  Known for its iconic Matterhorn peak, Zermatt also offers
                  excellent mountain biking opportunities. The trails range from
                  easy rides in the valley to challenging descents at higher
                  altitudes. You can enjoy panoramic views of the surrounding
                  mountains as you explore the area.
                </p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                  </div>
                  <Button color="white" bgColor="#00A9CA">
                    Intemediate
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="group relative flex w-1/3 min-w-[250px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl">
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
              <div>
                <h1 className="text-lg font-bold text-white">
                  Davos-Klosters:
                </h1>
                <p className="text-md text-white">
                  This region in the canton of Graubünden is famous for its
                  extensive network of mountain bike trails. You'll find a
                  diverse range of routes, from leisurely rides to
                  adrenaline-pumping downhill tracks. The area also hosts the
                  annual Swiss Epic mountain bike race.
                </p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                    <HiOutlineStar className="text-3xl text-[#75F691]" />
                  </div>
                  <Button color="white" bgColor="#000000">
                    Hard
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-end justify-center">
            <div className="absolute mb-4">
              <Button color="white" bgColor="red">
                Learn more
              </Button>
            </div>
            <img src={news} className="m-auto w-4/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
