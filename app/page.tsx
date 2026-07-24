import { HeroPortrait } from "@/components/home/HeroPortrait";
import { ProjectCard } from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到首页">
          LX<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="statusDot" aria-hidden="true" />
            EMBEDDED SYSTEMS · EDGE AI
          </p>
          <h1>
            你好，我是
            <br />
            <span>luoxiansheng。</span>
          </h1>
          <p className="heroLead">
            入门级嵌入式开发者，关注 Edge AI、MCU Firmware、Power
            Electronics 与 Hardware Systems。
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

        <HeroPortrait />
      </section>

      <section className="about shell" id="about">
        <div>
          <p className="sectionLabel">01 / 关于我</p>
          <h2>嵌入式系统与<br />Edge AI。</h2>
        </div>
        <div className="aboutCopy">
          <p>
            主要处理 Sensor Data Acquisition、Control Logic、Communication
            Links 与 Hardware-Software Integration。
          </p>
          <p>
            目前学习和使用 STM32、Real-Time Control、Power Electronics、TinyML
            与 Wearable Edge Devices。相关项目整理后公开于 GitHub。
          </p>
          <div className="focusList">
            <span>MCU Firmware</span>
            <span>Edge AI</span>
            <span>Power Electronics</span>
            <span>Hardware Systems</span>
          </div>
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">02 / 开源项目</p>
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
        <p className="sectionLabel">03 / 联系</p>
        <div className="contactRow">
          <h2>
            一起交流，
            <br />
            一起做点有意思的东西。
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
        <span>© 2026 luoxiansheng</span>
        <span>heisenbergrv.com</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
