const Home = () => {
  return (
    <>
      <div className="w-full">
        <img src="img/video.png" className="w-full" />
        <div className="w-full h-[20px] bg-gradient-to-r from-[#111111]/90 to-[#B085FF]/90"></div>
      </div>
      <div className="py-4">
        <h1 className="font-bold text-center text-2xl">
          Recommend Gear For Your Ride
        </h1>
        <div className="grid grid-cols-11 items-end p-8">
          <div className="col-span-3">
            <img src="img/bicycle.png" className="w-full opacity-30" />
            <p className="text-2xl font-bold text-center">
              Stumpjumper EVO Comp
            </p>
            <p className="text-2xl font-bold text-center">
              $3,749.99
            </p>
            <p className="text-2xl font-bold text-center">
              $5,400
            </p>
          </div>
          <div className="col-span-5 px-10">
            <img src="img/bicycle.png" className="w-full" />
            <p className="text-2xl font-bold text-center">
              Stumpjumper EVO LTD
            </p>
            <p className="text-2xl font-bold text-center">
              $6,300
            </p>
          </div>
          <div className="col-span-3">
            <img src="img/bicycle.png" className="w-full opacity-30" />
            <p className="text-2xl font-bold text-center">
              S-Works Stumpjumper EVO
              $8,799.99
              $11,500
            </p>
            <p className="text-2xl font-bold text-center">
              $3,749.99
            </p>
            <p className="text-2xl font-bold text-center">
              $5,400
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#10161B] py-6 w-full">
        <div className="grid grid-cols-7 px-[10%] gap-10">
          <div className="col-span-3">
            <p className="text-white text-sm font-bold uppercase">COMMUNITY POSTS  ABOUT THIS TRAIL</p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex gap-4 items-center">
                <img src="img/avatar1.png" className="w-[60px] h-[60px] rounded" />
                <p className="text-white">
                  Lawyaw uses AI to help lawyers draft documents faster
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src="img/avatar2.png" className="w-[60px] h-[60px] rounded" />
                <p className="text-white">
                  Going against the grain, AngelPad kills its demo day
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-white text-sm font-bold uppercase">FEATURED ACCESSORIES </p>
            <div className="mt-6 w-full flex items-center justify-between gap-[5%]">
              <div>
                <img src="img/part1.png" className="max-w-[200px] w-full" />
                <p className="text-white text-sm font-bold text-center mt-4">Helmets</p>
              </div>
              <div>
                <img src="img/part2.png" className="max-w-[200px] w-full" />
                <p className="text-white text-sm font-bold text-center mt-4">Shoes</p>
              </div>
              <div>
                <img src="img/part3.png" className="max-w-[200px] w-full" />
                <p className="text-white text-sm font-bold text-center mt-4">Tires</p>
              </div>
              <div>
                <img src="img/part4.png" className="max-w-[200px] w-full" />
                <p className="text-white text-sm font-bold text-center mt-4">Saddles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full flex justify-end gap-4 px-[10%]">
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.92885" cy="9.92885" r="9.92885" fill="#9DAFBD"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.55384 14.2835H10.3331C10.3331 14.2835 10.5685 14.2577 10.6887 14.1281C10.7993 14.0092 10.7958 13.7858 10.7958 13.7858C10.7958 13.7858 10.7806 12.7402 11.2659 12.5862C11.7443 12.4345 12.3586 13.5968 13.0098 14.0437C13.5022 14.382 13.8763 14.3078 13.8763 14.3078L15.6174 14.2835C15.6174 14.2835 16.5282 14.2274 16.0963 13.5113C16.0609 13.4527 15.8448 12.9816 14.8018 12.0135C13.7101 11.0002 13.8563 11.1641 15.1714 9.41133C15.9722 8.3439 16.2924 7.69222 16.1924 7.4131C16.097 7.14726 15.508 7.21753 15.508 7.21753L13.5476 7.22974C13.5476 7.22974 13.4023 7.20992 13.2945 7.27434C13.1892 7.33753 13.1214 7.48478 13.1214 7.48478C13.1214 7.48478 12.8112 8.3108 12.3974 9.01328C11.5245 10.4956 11.1754 10.5738 11.0328 10.4818C10.7009 10.2673 10.7837 9.62 10.7837 9.16018C10.7837 7.72372 11.0016 7.12478 10.3595 6.96974C10.1464 6.91823 9.98959 6.88425 9.44463 6.87877C8.74517 6.87151 8.15313 6.88089 7.81791 7.04514C7.5949 7.15434 7.42286 7.3977 7.52764 7.41169C7.6572 7.42903 7.95065 7.4908 8.10623 7.70266C8.30711 7.97593 8.30003 8.58974 8.30003 8.58974C8.30003 8.58974 8.41543 10.2807 8.03048 10.4908C7.76623 10.6349 7.40375 10.3407 6.62552 8.99593C6.22676 8.30708 5.9257 7.54567 5.9257 7.54567C5.9257 7.54567 5.86764 7.40337 5.7641 7.32726C5.63844 7.23505 5.46286 7.20567 5.46286 7.20567L3.60003 7.21788C3.60003 7.21788 3.32039 7.22567 3.21773 7.34726C3.1264 7.4554 3.21047 7.67912 3.21047 7.67912C3.21047 7.67912 4.66888 11.0912 6.32021 12.8106C7.83437 14.3871 9.55384 14.2835 9.55384 14.2835V14.2835Z" fill="#1B252C"/>
            </svg>
          </span>
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.92897" cy="9.92922" r="9.92885" fill="#9DAFBD"/>
              <path d="M10.7304 13.2959C9.97976 13.2378 9.66436 12.8656 9.07569 12.5083C8.75215 14.2058 8.35675 15.8331 7.1856 16.6832C6.82366 14.1175 7.71622 12.1904 8.13074 10.1449C7.42419 8.95554 8.21569 6.56156 9.70596 7.15147C11.5401 7.87678 8.11799 11.5739 10.4153 12.0357C12.8137 12.5178 13.7929 7.87412 12.3054 6.36368C10.1564 4.18297 6.05003 6.31412 6.55498 9.43589C6.67799 10.1991 7.46667 10.4308 6.87003 11.4839C5.49463 11.1793 5.08436 10.0945 5.13711 8.64828C5.22224 6.28103 7.26419 4.62351 9.31233 4.39412C11.9026 4.10421 14.3337 5.34527 14.6693 7.78174C15.0468 10.5316 13.4999 13.5097 10.7304 13.2959V13.2959Z" fill="#1B252C"/>
            </svg>
          </span>
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9456 5.30664H7.00067C6.05179 5.30664 5.27979 6.07864 5.27979 7.02753V12.9724C5.27979 13.9213 6.05179 14.6935 7.00067 14.6935H12.9456C13.8945 14.6935 14.6667 13.9215 14.6667 12.9724V7.02753C14.6667 6.07864 13.8947 5.30664 12.9456 5.30664ZM9.97312 13.0902C8.26934 13.0902 6.88312 11.704 6.88312 9.99997C6.88312 8.2962 8.26934 6.90997 9.97312 6.90997C11.6771 6.90997 13.0633 8.2962 13.0633 9.99997C13.0633 11.7038 11.6769 13.0902 9.97312 13.0902ZM12.4313 6.81775C12.4313 7.22086 12.7593 7.54886 13.1627 7.54886C13.5658 7.54886 13.8938 7.22086 13.8938 6.81775C13.8938 6.41464 13.5658 6.08664 13.1627 6.08664C12.7593 6.08664 12.4313 6.41464 12.4313 6.81775Z" fill="#9DAFBD"/>
              <path d="M9.97317 8.21582C8.98961 8.21582 8.18872 9.01626 8.18872 9.99982C8.18872 10.9838 8.98961 11.7845 9.97317 11.7845C10.9572 11.7845 11.7574 10.9838 11.7574 9.99982C11.7574 9.01649 10.9569 8.21582 9.97317 8.21582Z" fill="#9DAFBD"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.97311C0 4.46533 4.46533 0 9.97311 0C15.4809 0 19.9462 4.46533 19.9462 9.97311C19.9462 15.4809 15.4809 19.9462 9.97311 19.9462C4.46533 19.9462 0 15.4809 0 9.97311ZM12.9456 15.9991C14.6147 15.9991 15.9722 14.6416 15.9722 12.9724V7.02756C15.9722 5.35867 14.6147 4.00089 12.9456 4.00089H7.00067C5.33178 4.00089 3.974 5.35867 3.974 7.02756V12.9724C3.974 14.6416 5.33178 15.9991 7.00067 15.9991H12.9456Z" fill="#9DAFBD"/>
            </svg>
          </span>
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.92885" cy="9.92885" r="9.92885" fill="#9DAFBD"/>
              <path d="M16.5678 7.11292C16.1423 7.30159 15.6846 7.4292 15.2046 7.48619C15.6947 7.19257 16.0708 6.72796 16.2483 6.17345C15.7897 6.44549 15.2816 6.64283 14.7412 6.7492C14.3083 6.28814 13.6915 6 13.0085 6C11.6981 6 10.6352 7.06283 10.6352 8.37327C10.6352 8.55929 10.6563 8.74035 10.697 8.91416C8.7246 8.81522 6.97575 7.87044 5.80513 6.43416C5.60088 6.7846 5.48372 7.19257 5.48372 7.62743C5.48372 8.45062 5.90301 9.17735 6.53947 9.60283C6.15062 9.59062 5.78442 9.48389 5.4646 9.30566C5.46442 9.31575 5.46442 9.32584 5.46442 9.33575C5.46442 10.4857 6.28283 11.4448 7.36832 11.6627C7.16938 11.7172 6.95929 11.746 6.74319 11.746C6.58991 11.746 6.44142 11.7313 6.29664 11.7037C6.59858 12.6464 7.47487 13.3326 8.51363 13.3519C7.70124 13.9885 6.67805 14.3678 5.56584 14.3678C5.37469 14.3678 5.18531 14.3566 5 14.3345C6.04973 15.0081 7.29752 15.4009 8.6377 15.4009C13.003 15.4009 15.3903 11.7846 15.3903 8.64814C15.3903 8.54531 15.388 8.44283 15.3834 8.34124C15.8474 8.00673 16.2497 7.58885 16.5678 7.11292V7.11292Z" fill="#1B252C"/>
            </svg>
          </span>
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.92885" cy="9.92885" r="9.92885" fill="#9DAFBD"/>
              <path d="M12.4249 10.3175H10.6533V16.8081H7.96902V10.3175H6.69238V8.03641H7.96902V6.5603C7.96902 5.50473 8.47044 3.85181 10.6772 3.85181L12.6655 3.86013V6.07428H11.2228C10.9862 6.07428 10.6534 6.19251 10.6534 6.69605V8.03853H12.6595L12.4249 10.3175Z" fill="#1B252C"/>
            </svg>
          </span>
        </div>
        <div className="py-10 px-[10%] text-sm">
          <p className="text-[#9DAFBD]">Copyright &copy; Nurun</p>
          <p className="text-[#9DAFBD]">All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Home;
