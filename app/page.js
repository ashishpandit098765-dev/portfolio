import Image from "next/image";
import FlowerImage from "./assets/Flower.webp";
import ImageImage from "./assets/image.png";
import NewdelhiImage from "./assets/Newdelhi.webp";
import PictureImage from "./assets/Picture.webp";
export default function Home() {
  return (
    <div className="p-4 md:p-10">
      <div className="bg-pink-200 flex flex-col justify-between  lg:flex-row   gap-8  md:py-16 py-14 px-6  rounded-3xl">
        <div className="  justify-between ">
          <p className="text-center md:text-left text-2xl italic font-stretch-50%">
            ASHISH
            <span className="font-bold text-2xl not-italic">PANDIT </span>
          </p>
        </div>
        <div className="flex md:gap-18  gap-8 item-center justify-center  font-stretch-50%">
          <p>PROJECT</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div className=" py-10 md:flex gap-8 ">
        <div className="  md:w-3/5 flex flex-col   ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className=" md:w-2/3  flex flex-col bg-pink-200 rounded-2xl ">
              <Image src={FlowerImage} alt="Image" />
              <div className="p-8 text-5xl font-bold">
                <p>Artist</p>
                <p>Redefining</p>
                <p className="italic">Architecture</p>
                <p>Al-Driven</p>
                <p>Design</p>
              </div>
            </div>

            <div className=" md:w-1/3">
              <Image
                className="h-full w-full rounded-xl"
                src={ImageImage}
                alt="Image"
              />
            </div>
          </div>

          <div className=" md:flex-row flex flex-col pt-8 gap-8 ">
            <div className=" md:w-1/2  bg-pink-200 px-8 rounded-xl">
              <div className="py-8">
                <Image className=" px-4" src={PictureImage} alt="image" />
              </div>
              <div className=" py-8 px-4 font-stretch-50% font-thin  text-2xl ">
                <p> Julia Huang is an innovative Al</p>
                <p> artist, renowned for blending</p>
                <p>cutting-edge technology with</p>
                <p>creative expresion. Based in LA,</p>
                <p>she crafts unique digital art </p>
                <p>experience accessible globlaly.</p>
              </div>
            </div>
            <div className=" md:w-1/2 w-full bg-red-300  py-8 rounded-xl  ">
              <p className=" text-3xl font-bold text-right px-6">↗</p>
              <p className="px-10">Have Some Question?</p>
              <p className="text-6xl px-8 pt-48 ">Contact me</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-2/5 flex flex-col  gap-8">
          <div className="h-3/4 bg-pink-200 rounded-xl ">
            <div className="flex justify-between m-4">
              <p className="px-8 text-2xl">Delhi</p>
              <p className="text-3xl font-bold mr-8">↗</p>
            </div>

            <div className="  px-6 w-full">
              <Image className=" rounded-xl" src={NewdelhiImage} alt="image" />
            </div>
            <div className="text-2xl px-6 ">
              <p className="mt-4 pt-4 pb-4 border-b-3 border-red-300 border-t-3">
                Elara
              </p>
              <p className="pb-4 mt-4 border-b-3 border-red-300  ">Verva</p>
              <p className="pb-4 mt-4">Zephyr</p>
            </div>
          </div>
          <div className="h-[20vh] md:h-1/4  bg-pink-200 rounded-xl ">
            <div className="h-full flex justify-center items-center gap-12">
              <p>Insta</p>
              <p>Twit</p>
              <p>LI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
