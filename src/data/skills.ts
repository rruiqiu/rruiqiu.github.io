export interface SkillGroup {
  label: string;
  /** Items in display order. The first `primary` ones render in the foreground colour, the rest muted. */
  items: string[];
  primary: number;
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C#', 'TypeScript', 'C/C++', 'Rust', 'SQL (T-SQL)', 'Bash'],
    primary: 3,
  },
  {
    label: 'Backend & Data',
    items: ['.NET', 'FastAPI', 'gRPC', 'WebSockets', 'REST APIs', 'SQL Server', 'DynamoDB', 'Redis', 'React', 'Next.js'],
    primary: 3,
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS (Lambda, ECS, EC2, SQS, S3, API Gateway, CloudFront)',
      'Docker',
      'Terraform',
      'CI/CD pipeline design',
      'Jenkins',
      'Git',
      'Datadog',
    ],
    primary: 3,
  },
  {
    label: 'AI & Agents',
    items: ['LangGraph', 'LLM APIs', 'Tool/Function calling', 'Agent workflows', 'PyTorch', 'Reinforcement learning (DQN)', 'Claude Code', 'Codex'],
    primary: 3,
  },
  {
    label: 'Systems & Embedded',
    items: ['CUDA', 'OpenMP', 'AVX/SIMD', 'ROS', 'MQTT', 'Raspberry Pi', 'ESP32', 'Embedded C (I2C/UART)'],
    primary: 2,
  },
];
