import Image from "next/image";

const frogImages = [
  {
    src: "/images/milk-frog/wave.webp",
    alt: "张开双臂的奶蛙",
  },
  {
    src: "/images/milk-frog/bed.webp",
    alt: "躺在床上的两只奶蛙",
  },
  {
    src: "/images/milk-frog/laugh.webp",
    alt: "捧腹大笑的奶蛙",
  },
  {
    src: "/images/milk-frog/look.webp",
    alt: "侧头观察的奶蛙",
  },
];

export function MilkFrogGallery() {
  return (
    <div className="frogGallery">
      {frogImages.map((image) => (
        <figure className="frogTile" key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </figure>
      ))}
    </div>
  );
}
