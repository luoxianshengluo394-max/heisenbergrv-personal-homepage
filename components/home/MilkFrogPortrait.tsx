import Image from "next/image";

export function MilkFrogPortrait() {
  return (
    <div className="heroArtwork">
      <div className="heroVisual">
        <Image
          className="heroAvatar"
          src="/images/milk-frog/hero-leaf.webp"
          alt="雨中拿着荷叶的奶蛙"
          fill
          priority
          sizes="(max-width: 900px) min(520px, 100vw), 390px"
        />
      </div>
      <p className="avatarCaption">这是奶蛙，本站的黄色吉祥物。</p>
    </div>
  );
}
