export const naiwaRepository =
  "https://github.com/luoxianshengluo394-max/naiwa";

export const naiwaAnimations = [
  {
    file: "idle.gif",
    label: "待机",
    englishLabel: "Idle",
    description: "安静呼吸，保持奶蛙标志性的憋笑表情。",
  },
  {
    file: "running-right.gif",
    label: "向右跑动",
    englishLabel: "Running right",
    description: "朝右侧迈步的完整跑动循环。",
  },
  {
    file: "running-left.gif",
    label: "向左跑动",
    englishLabel: "Running left",
    description: "朝左侧迈步的完整跑动循环。",
  },
  {
    file: "waving.gif",
    label: "挥手",
    englishLabel: "Waving",
    description: "抬起小手，向你打个招呼。",
  },
  {
    file: "jumping.gif",
    label: "跳跃",
    englishLabel: "Jumping",
    description: "用圆滚滚的身体轻轻跃起。",
  },
  {
    file: "failed.gif",
    label: "失败",
    englishLabel: "Failed",
    description: "任务受挫时的可爱反应。",
  },
  {
    file: "waiting.gif",
    label: "等待",
    englishLabel: "Waiting",
    description: "等待下一步任务时的轻微动作。",
  },
  {
    file: "running.gif",
    label: "奔跑",
    englishLabel: "Running",
    description: "准备行动时的原地跑动节奏。",
  },
  {
    file: "review.gif",
    label: "审阅",
    englishLabel: "Review",
    description: "认真查看工作结果时的动作。",
  },
] as const;

export function naiwaAnimationPath(file: string) {
  return `/images/naiwa/animations/${file}`;
}
