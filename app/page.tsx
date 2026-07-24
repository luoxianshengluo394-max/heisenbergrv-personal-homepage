const projects = [
  {
    index: "01",
    title: "DC Constant-Current Supply",
    subtitle: "2026 SEU Electronic Design Contest",
    description:
      "基于 STM32G474 的可编程直流恒流电源，包含完整固件、硬件资料与工程文档。",
    tags: ["STM32G474", "Power Electronics", "C"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-dc-constant-current-supply",
  },
  {
    index: "02",
    title: "AC Power Supply",
    subtitle: "Electronics Contest Training I",
    description:
      "交流电源训练工程，涵盖 STM32G474 控制固件、STM32H723 显示端与台架记录。",
    tags: ["STM32", "AC Supply", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-1-ac-power-supply",
  },
  {
    index: "03",
    title: "Energy Feedback Converter",
    subtitle: "Electronics Contest Training II",
    description:
      "三相逆变与能量回馈实验平台，包含有源整流相关控制固件和实验资料。",
    tags: ["Three-phase", "Converter", "Control"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-2-energy-feedback-converter",
  },
  {
    index: "04",
    title: "Single-Phase APF",
    subtitle: "Electronics Contest Training III",
    description:
      "单相有源电力滤波器，包含谐波分析、闭环补偿、CAN 遥测和显示端固件。",
    tags: ["APF", "Harmonics", "CAN"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-3-single-phase-apf",
  },
  {
    index: "05",
    title: "Wearable Fall Detection",
    subtitle: "AI for Social Good Challenge 2026 · Champion",
    description:
      "融合 nRF52840 Sense、TinyML、BLE、Python 仪表盘与可打印外壳的穿戴式跌倒检测系统。",
    tags: ["Edge AI", "TinyML", "BLE"],
    href: "https://github.com/luoxianshengluo394-max/ai-for-social-good-2026-fall-detection",
    featured: true,
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到首页">
          LL<span>.</span>
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
            <span>罗罗先生。</span>
          </h1>
          <p className="heroLead">
            一名正在持续学习的嵌入式开发者，关注边缘 AI、MCU
            固件、电力电子与硬件系统。
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
            <span className="chipLabel">LL</span>
            <span className="chipMeta">G474 · nRF52</span>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div>
          <p className="sectionLabel">01 / 关于我</p>
          <h2>从电路到代码，<br />把想法做成能运行的系统。</h2>
        </div>
        <div className="aboutCopy">
          <p>
            我喜欢在硬件与软件的交界处解决问题：阅读传感器数据、设计控制逻辑、
            调通通信链路，再把每一部分整合成可验证的完整工程。
          </p>
          <p>
            目前主要探索 STM32、实时控制、电力电子、TinyML 与可穿戴边缘设备，
            并把比赛和训练中的实践项目整理为公开仓库。
          </p>
          <div className="focusList">
            <span>MCU Firmware</span>
            <span>Edge AI</span>
            <span>Power Electronics</span>
            <span>Hardware</span>
          </div>
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">02 / 开源项目</p>
            <h2>Selected work</h2>
          </div>
          <p>比赛、训练与工程实践</p>
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
          <a
            className="roundLink"
            href="https://github.com/luoxianshengluo394-max"
            target="_blank"
            rel="noreferrer"
            aria-label="访问罗罗先生的 GitHub"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 罗罗先生</span>
        <span>heisenbergrv.com</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
