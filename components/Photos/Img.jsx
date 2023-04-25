import Image from "next/image";

function Img({ imgSrc }) {
  return (
    <div className="relative h-[100px] xs:h-[200px] md:h-[300px] 2xl:h-[400px] mx-2">
      <Image
        src={`/img/${imgSrc}`}
        alt="Camp pics"
        fill
        sizes="(min-width: 0) 100vw"
        className="object-contain"
      />
    </div>
  );
}

export default Img;

{
  /* logo */
}
//  <div className="relative w-full h-[211px] 2xl:h-[347px] mx-4 z-10">
//  <Image
//    src={logoCamp}
//    alt="logo Camp"
//    fill
//    quality={100}
//    className="object-contain"
//  />
// </div>

{
  /* <Image
src="/img/t1.jpeg"
alt="Picture of the author"
width={500}
height={500}
/> */
}
