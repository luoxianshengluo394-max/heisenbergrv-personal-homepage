import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  naiwaAnimationPath,
  naiwaAnimations,
  naiwaRepository,
} from "@/data/naiwa";

export const metadata: Metadata = {
  title: "奶蛙 / naiwa | Codex Desktop Pet",
  description:
    "奶蛙 / naiwa 是一只可安装的 Codex 桌面宠物，包含 9 个动作预览与完整 GitHub 项目。",
  alternates: {
    canonical: "/naiwa",
  },
  openGraph: {
    title: "奶蛙 / naiwa | Codex Desktop Pet",
    description:
      "查看奶蛙的 9 个动画预览，并访问完整 GitHub 项目。",
    url: "/naiwa",
  },
  twitter: {
    card: "summary",
    title: "奶蛙 / naiwa | Codex Desktop Pet",
    description: "查看奶蛙的 9 个动画预览，并访问完整 GitHub 项目。",
  },
};

export default function NaiwaPage() {
  return (
    <main className="naiwaPage">
      <nav className="nav shell" aria-label="奶蛙页面导航">
        <Link className="brand" href="/" aria-label="回到首页">
          LX
        </Link>
        <div className="navLinks">
          <Link href="/#about">关于</Link>
          <Link href="/#milk-frog">奶蛙</Link>
          <a href={naiwaRepository} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </nav>

      <section className="naiwaHero shell">
        <div className="naiwaHeroCopy">
          <p className="sectionLabel">OPEN SOURCE · CODEX DESKTOP PET</p>
          <h1>
            奶蛙 <span>/ naiwa</span>
          </h1>
          <p>
            一只圆滚滚、憋着笑的黄色 3D 桌面宠物。它为 Codex 准备了待机、跑动、挥手、跳跃和审阅等完整动作。
          </p>
          <div className="heroActions">
            <a
              className="primaryButton"
              href={naiwaRepository}
              target="_blank"
              rel="noreferrer"
            >
              查看 GitHub 仓库 <span aria-hidden="true">↗</span>
            </a>
            <a className="textLink" href="#animations">
              动画预览 <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <div className="naiwaHeroAnimation">
          <div className="naiwaHeroAnimationFrame">
            <Image
              src={naiwaAnimationPath("idle.gif")}
              alt="奶蛙待机动画"
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) min(520px, 100vw), 420px"
            />
          </div>
          <p>Idle · 正在憋笑</p>
        </div>
      </section>

      <section className="naiwaAnimations shell" id="animations">
        <div className="naiwaAnimationsHeading">
          <div>
            <p className="sectionLabel">09 ANIMATIONS</p>
            <h2>动作预览</h2>
          </div>
          <p>所有动画均来自奶蛙项目的原始预览文件。</p>
        </div>

        <div className="naiwaAnimationGrid">
          {naiwaAnimations.map((animation) => (
            <article className="naiwaAnimationCard" key={animation.file}>
              <div className="naiwaAnimationVisual">
                <Image
                  src={naiwaAnimationPath(animation.file)}
                  alt={`奶蛙${animation.label}动画`}
                  fill
                  unoptimized
                  sizes="(max-width: 620px) calc(100vw - 48px), (max-width: 900px) 45vw, 32vw"
                />
              </div>
              <div className="naiwaAnimationCopy">
                <div>
                  <h3>{animation.label}</h3>
                  <span>{animation.englishLabel}</span>
                </div>
                <p>{animation.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="naiwaRepository shell">
        <div>
          <p className="sectionLabel">PROJECT</p>
          <h2>想把奶蛙带走？</h2>
        </div>
        <div>
          <p>
            仓库中包含 Codex 宠物清单、最终动画图集、安装脚本、预览文件与完整质量检查记录。
          </p>
          <a
            className="primaryButton"
            href={naiwaRepository}
            target="_blank"
            rel="noreferrer"
          >
            打开 GitHub 仓库 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>奶蛙 / naiwa</span>
        <span>heisenbergrv.com</span>
        <Link href="/">回到首页 ↑</Link>
      </footer>
    </main>
  );
}
