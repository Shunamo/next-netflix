'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Footer(): JSX.Element {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (activeImage) {
      router.push(`/${activeImage}`);
    }
  }, [activeImage]);

  const handleImageClick = (image: string) => {
    if (activeImage === image) return;
    const newActiveImage = activeImage === image ? '' : image;
    setActiveImage(newActiveImage);
  };
  const getImageSrc = (image: string) => {
    return activeImage === image ? `/${image}-active.svg` : `/${image}.svg`;
  };

  return (
    <>
      <div className="flex flex-col fix bottom-0">
        <div className="flex items-center justify-between h-[48px] w-full bg-[#121212] px-[26px] ">
          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('home')}
              alt="Home"
              width={24}
              height={24}
              onClick={() => handleImageClick('main')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Home
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('search')}
              alt="Search"
              width={24}
              height={24}
              onClick={() => handleImageClick('search')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Search
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src="/comingsoon.svg"
              alt="Coming Soon"
              width={20}
              height={20}
              onClick={() => handleImageClick('comingsoon')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Coming Soon
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src="/download.svg"
              alt="Download"
              width={16}
              height={19}
              onClick={() => handleImageClick('download')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Download
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image src="/more.svg" alt="More" width={21} height={17} onClick={() => handleImageClick('more')} />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              More
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center h-[31.7px] w-full bg-[#000000]"> {/*모바일에서는숨기기*/}
          <div className="w-[121px] h-[4.5px] bg-white mt-[13.12px]"></div>
        </div>
      </div>
    </>
  );
}