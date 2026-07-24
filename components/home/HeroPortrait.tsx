import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="heroArtwork">
      <div className="heroVisual">
        <Image
          className="heroAvatar"
          src="/images/rikka-avatar.webp"
          alt="小鸟游六花头像"
          fill
          priority
          sizes="(max-width: 900px) min(520px, 100vw), 390px"
        />
      </div>
      <p className="avatarCaption">これは小鳥遊六花です。</p>
    </div>
  );
}
