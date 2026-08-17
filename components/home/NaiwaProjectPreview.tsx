import Image from "next/image";
import Link from "next/link";
import { naiwaAnimationPath, naiwaAnimations } from "@/data/naiwa";

const previewAnimations = [
  naiwaAnimations[0],
  naiwaAnimations[3],
  naiwaAnimations[4],
  naiwaAnimations[1],
];

export function NaiwaProjectPreview() {
  return (
    <Link
      className="naiwaPreview"
      href="/naiwa"
      aria-label="查看奶蛙桌面宠物的完整动画预览与 GitHub 仓库"
    >
      <div className="naiwaPreviewTop">
        <div>
          <p className="naiwaPreviewKicker">OPEN SOURCE · CODEX DESKTOP PET</p>
          <h3>
            奶蛙 <span>/ naiwa</span>
          </h3>
        </div>
        <span className="naiwaPreviewArrow" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="naiwaPreviewFrames" aria-hidden="true">
        {previewAnimations.map((animation) => (
          <div className="naiwaPreviewFrame" key={animation.file}>
            <Image
              src={naiwaAnimationPath(animation.file)}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 620px) 44vw, (max-width: 900px) 22vw, 250px"
            />
            <span>{animation.englishLabel}</span>
          </div>
        ))}
      </div>

      <div className="naiwaPreviewBottom">
        <p>点击进入，查看 9 个动作预览与完整项目仓库。</p>
        <span>查看完整预览 →</span>
      </div>
    </Link>
  );
}
