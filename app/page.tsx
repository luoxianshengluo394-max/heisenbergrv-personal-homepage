import { MilkFrogGallery } from "@/components/home/MilkFrogGallery";
import { MilkFrogPortrait } from "@/components/home/MilkFrogPortrait";
import { ProjectCard } from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到首页">
          LX
        </a>
        <div className="navLinks">
          <a href="#about">关于</a>
          <a href="#milk-frog">奶蛙</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="statusDot" aria-hidden="true" />
            EMBEDDED SYSTEMS&nbsp;&nbsp;EDGE AI
          </p>
          <h1>
            你好 我是
            <br />
            <span>luoxiansheng</span>
          </h1>
          <p className="heroLead">
            入门级嵌入式开发者 关注 Edge AI MCU Firmware Power
            Electronics 与 Hardware Systems
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">
              查看我的项目 <span aria-hidden="true">↘</span>
            </a>
            <a
              className="textLink"
              href="https://github.com/luoxianshengluo394-max"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <MilkFrogPortrait />
      </section>

      <section className="about shell" id="about">
        <div>
          <p className="sectionLabel">01 关于我</p>
          <h2>嵌入式系统与<br />Edge AI</h2>
        </div>
        <div className="aboutCopy">
          <p>目前在尝试嵌入式开发与软硬件系统整合</p>
          <p>主要关注单片机 实时控制 电力电子与边缘 AI</p>
          <div className="focusList">
            <span>MCU Firmware</span>
            <span>Edge AI</span>
            <span>Power Electronics</span>
            <span>Hardware Systems</span>
          </div>
        </div>
      </section>

      <section className="frogSection shell" id="milk-frog">
        <div className="frogIntro">
          <div>
            <p className="sectionLabel">02 奶蛙</p>
            <h2>这是奶蛙</h2>
          </div>
          <p>わりとかわいい</p>
        </div>
        <MilkFrogGallery />
      </section>

      <section className="projects shell" id="projects">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">03 开源项目</p>
            <h2>Selected work</h2>
          </div>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="sectionLabel">04 联系</p>
        <div className="contactRow">
          <h2>
            一起交流
            <br />
            一起做点有意思的东西
          </h2>
          <div className="contactLinks">
            <a
              className="roundLink"
              href="https://github.com/luoxianshengluo394-max"
              target="_blank"
              rel="noreferrer"
              aria-label="访问 luoxiansheng 的 GitHub"
            >
              GitHub ↗
            </a>
            <a
              className="emailLink"
              href="mailto:luoxianshengluo394@gmail.com"
              aria-label="发送邮件给 luoxiansheng"
            >
              luoxianshengluo394@gmail.com ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>2026 luoxiansheng</span>
        <span>heisenbergrv.com</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
