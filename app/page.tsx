const projects = [
  {
    index: "01",
    title: "DC Constant-Current Supply",
    subtitle: "2026 SEU Electronic Design Contest",
    description:
      "基于 STM32G474 的可编程 DC Constant-Current Supply，包含完整 Firmware、Hardware Documentation 与 Engineering Notes。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-dc-constant-current-supply",
  },
  {
    index: "02",
    title: "AC Power Supply",
    subtitle: "Electronics Contest Training I",
    description:
      "AC Power Supply 训练工程，涵盖 STM32G474 Control Firmware、STM32H723 Display Firmware 与 Bench Records。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-1-ac-power-supply",
  },
  {
    index: "03",
    title: "Energy Feedback Converter",
    subtitle: "Electronics Contest Training II",
    description:
      "Three-Phase Inverter 与 Energy Feedback 实验平台，包含 Active Rectifier Control Firmware 和实验资料。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-2-energy-feedback-converter",
  },
  {
    index: "04",
    title: "Single-Phase APF",
    subtitle: "Electronics Contest Training III",
    description:
      "Single-Phase Active Power Filter，包含 Harmonic Analysis、Closed-Loop Compensation、CAN Telemetry 和 Display Firmware。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-3-single-phase-apf",
  },
  {
    index: "05",
    title: "Wearable Fall Detection",
    subtitle: "AI for Social Good Challenge 2026 · Champion",
    description:
      "融合 nRF52840 Sense、TinyML、BLE、Python Dashboard 与 3D-Printable Enclosure 的 Wearable Fall Detection System。",
    tags: ["nRF52", "Edge AI", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/ai-for-social-good-2026-fall-detection",
    featured: true,
  },
];

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

        <div className="heroVisual" aria-hidden="true">
          <div className="signal signalOne" />
          <div className="signal signalTwo" />
          <div className="signal signalThree" />
          <div className="chip">
            <span className="chipLabel">LX</span>
            <span className="chipMeta">G474 · nRF52</span>
          </div>
        </div>
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
            <a
              className={`projectCard${project.featured ? " featured" : ""}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="cardTop">
                <span>{project.index}</span>
                <span aria-hidden="true">↗</span>
              </div>
              {project.featured && <span className="award">CHAMPION · HKD 8,000</span>}
              <p className="projectSubtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
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
