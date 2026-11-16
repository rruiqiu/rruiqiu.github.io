import type { ImageMetadata } from 'astro';
import tradingAgents from '../assets/projects/trading-agents-platform.webp';
import polymarket from '../assets/projects/polymarket-trading-engine.webp';
import autoBike from '../assets/projects/autobike.jpg';
import hpc from '../assets/projects/HPC.png';
import portfolio from '../assets/projects/personal-website.png';
import ekanban from '../assets/projects/ekanban.jpg';
import srd from '../assets/projects/SRD.jpg';
import lunarLander from '../assets/projects/lunar_lander.gif';
import ooo from '../assets/projects/4dm4.jpg';
import xv6 from '../assets/projects/xv6.png';
import aev from '../assets/projects/AEV.png';
import nns from '../assets/projects/NNS.png';
import tof from '../assets/projects/tofsensor.png';
import plant from '../assets/projects/plant.png';

export interface Project {
  name: string;
  year: number;
  /** Shown on the home page. Keep this to ~4. */
  featured?: boolean;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    name: 'Multi-Agent Trading Research Platform',
    year: 2026,
    featured: true,
    description:
      'Turned the open-source TradingAgents multi-agent LLM CLI into a full-stack research platform with stock screening, backtesting and portfolio analytics, on a serverless AWS backend.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'React', 'AWS Serverless'],
    demo: 'https://dqbiyhu9fc151.cloudfront.net/#/demo',
    image: tradingAgents,
    imageAlt: 'TradingAgents job history dashboard with completed multi-ticker analysis runs',
  },
  {
    name: 'Polymarket BTC Trading Engine',
    year: 2026,
    featured: true,
    description:
      'Async Rust engine for Polymarket’s five-minute BTC UP/DOWN markets: fair-value model over Binance and CLOB WebSocket feeds, paired-order state machine, inventory caps and hedging.',
    stack: ['Rust', 'Tokio', 'WebSockets', 'Quant'],
    github: 'https://github.com/rruiqiu/Polymarket-Trading-Bot',
    image: polymarket,
    imageAlt: 'Dark dashboard illustration of BTC binary order books and hedge execution',
  },
  {
    name: 'Autonomous Driving Bike',
    year: 2025,
    featured: true,
    description:
      'Self-driving bike for last-mile bike sharing: Raspberry Pi and ESP32 control, MQTT link to a FastAPI backend on EC2, Next.js map UI. 3rd place, McMaster ECE Capstone.',
    stack: ['MQTT', 'AWS EC2', 'Raspberry Pi', 'ESP32', 'Next.js'],
    github: 'https://github.com/Auto-Bike',
    demo: 'https://www.macvideo.ca/media/t/1_e66vxp7g',
    image: autoBike,
    imageAlt: 'The autonomous bike prototype',
  },
  {
    name: 'High Performance Computing on SciNet',
    year: 2024,
    featured: true,
    description:
      'Optimized GEMM/GEMV/SpMM/SpMV kernels on the SciNet supercomputer with cache-aware algorithms, AVX, OpenMP and CUDA, reaching a 5000× speedup over the baseline.',
    stack: ['C++', 'OpenMP', 'CUDA', 'AVX', 'GoogleTest'],
    github: 'https://github.com/rruiqiu/HPC',
    image: hpc,
    imageAlt: 'Benchmark chart from the HPC project',
  },
  {
    name: 'Personal Website',
    year: 2024,
    description: 'This site. Static, zero-JS by default, deployed from a single build command.',
    stack: ['Astro', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/rruiqiu/CV',
    image: portfolio,
    imageAlt: 'Home page of this site',
  },
  {
    name: 'Warehouse Ordering System',
    year: 2024,
    description:
      'Real-time materials ordering system for Veoneer with history tracking and live sync; cut order cycle time by 70%.',
    stack: ['Next.js', 'TypeScript', 'FastAPI'],
    image: ekanban,
    imageAlt: 'Warehouse ordering dashboard',
  },
  {
    name: 'Smart Receiving Device',
    year: 2024,
    description:
      'Warehouse receiving station built around a Keyence SR-5000X camera, capturing up to 8 barcodes per scan; +50% receiving efficiency at Veoneer.',
    stack: ['C#', '.NET WinForms', 'Python'],
    image: srd,
    imageAlt: 'Receiving station with the barcode camera',
  },
  {
    name: 'Lunar Lander Agent',
    year: 2024,
    description: 'Deep Q-Network agent for OpenAI Gym’s LunarLander, averaging a score of 265.',
    stack: ['PyTorch', 'DQN', 'OpenAI Gym'],
    github: 'https://github.com/rruiqiu/Machine-Learning',
    image: lunarLander,
    imageAlt: 'Lunar lander touching down in the Gym environment',
  },
  {
    name: 'Out-of-Order Execution Pipeline',
    year: 2024,
    description:
      'CPU execution model with a reorder buffer and load-store queue, load forwarding, and IPC analysis of ROB/LSQ sizing.',
    stack: ['C++', 'Computer Architecture'],
    image: ooo,
    imageAlt: 'Pipeline diagram with reorder buffer and load-store queue',
  },
  {
    name: 'xv6 OS',
    year: 2024,
    description:
      'Kernel features and user utilities for MIT 6.S081: syscalls, page-table printing, backtraces, lazy allocation.',
    stack: ['C', 'Unix'],
    image: xv6,
    imageAlt: 'xv6 boot output',
  },
  {
    name: 'MAC AEV — Autonomous Electric Vehicle',
    year: 2023,
    description:
      '1/10-scale autonomous RC vehicle on Jetson Nano and ROS with SLAM for mapping and localization.',
    stack: ['C/C++', 'Python', 'ROS', 'VESC'],
    github: 'https://github.com/rruiqiu/MAC_AEV',
    image: aev,
    imageAlt: 'The 1/10-scale autonomous vehicle',
  },
  {
    name: 'Newcomer Navigating System',
    year: 2023,
    description:
      'DeltaHacks 9 project: one place for the housing, banking and settling-in resources international students need when they land in Canada.',
    stack: ['React', 'Google Maps API'],
    github: 'https://github.com/rruiqiu/delatahack9',
    demo: 'https://devpost.com/software/nns-newcomer-navigating-system',
    image: nns,
    imageAlt: 'Newcomer Navigating System map view',
  },
  {
    name: 'Spatial Mapping Device',
    year: 2022,
    description:
      'Embedded time-of-flight sensor rig that scans a room and rebuilds it in 3D with NumPy and Open3D.',
    stack: ['Embedded C', 'Python', 'I2C/UART'],
    github: 'https://github.com/rruiqiu/SPATIAL-MAPPING-USING-TIME-OF-FLIGHT',
    image: tof,
    imageAlt: 'Time-of-flight sensor rig',
  },
  {
    name: 'Recycling Plant Sorting System',
    year: 2022,
    description:
      'Infrared-based sorting for the McMaster recycling plant, lifting sorting accuracy from 50% to 93%.',
    stack: ['Python', 'Pandas'],
    github: 'https://github.com/rruiqiu/Recycling-Plant-Sorting-System',
    image: plant,
    imageAlt: 'Recycling plant sorting line',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
