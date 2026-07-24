export type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "DC Constant-Current Supply",
    subtitle: "2026 SEU Electronic Design Contest",
    description:
      "基于 STM32G474 的可编程直流恒流电源，包含完整固件、硬件资料与工程文档。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-dc-constant-current-supply",
  },
  {
    index: "02",
    title: "AC Power Supply",
    subtitle: "Electronics Contest Training I",
    description:
      "交流电源训练工程，涵盖 STM32G474 控制固件、STM32H723 显示端与台架记录。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-1-ac-power-supply",
  },
  {
    index: "03",
    title: "Energy Feedback Converter",
    subtitle: "Electronics Contest Training II",
    description:
      "三相逆变与能量回馈实验平台，包含有源整流控制固件和实验资料。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-2-energy-feedback-converter",
  },
  {
    index: "04",
    title: "Single-Phase APF",
    subtitle: "Electronics Contest Training III",
    description:
      "单相有源电力滤波器，包含谐波分析、闭环补偿、CAN 遥测和显示端固件。",
    tags: ["STM32", "Power Electronics", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/seu-2026-training-3-single-phase-apf",
  },
  {
    index: "05",
    title: "Wearable Fall Detection",
    subtitle: "AI for Social Good Challenge 2026 · Champion",
    description:
      "融合 nRF52840 Sense、TinyML、BLE、Python 仪表盘与可打印外壳的穿戴式跌倒检测系统。",
    tags: ["nRF52", "Edge AI", "Firmware"],
    href: "https://github.com/luoxianshengluo394-max/ai-for-social-good-2026-fall-detection",
    featured: true,
  },
];
