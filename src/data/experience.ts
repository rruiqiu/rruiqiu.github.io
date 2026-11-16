export interface Experience {
  company: string;
  url?: string;
  /** Optional path under /public to a logo (e.g. "/logos/arctrade.svg"); falls back to a monogram. */
  logo?: string;
  /** Set when the logo file already carries its own background colour. */
  logoFull?: boolean;
  role: string;
  location: string;
  start: string;
  end: string;
  /** Wrap phrases in **double stars** to emphasise them with an underline. */
  highlights: string[];
  /** How many highlights to show before the "Show more" toggle. Defaults to 2. */
  visible?: number;
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: 'ArcTrade',
    logo: '/logos/arctrade.png',
    logoFull: true,
    url: 'https://www.arctrade.com',
    role: 'Software Engineer',
    location: 'Toronto, ON (Remote)',
    start: 'Jul 2025',
    end: 'Present',
    highlights: [
      'Proposed and led a **multi-region, multi-account CI/CD pipeline** that deploys **300+ services** from a single pipeline, replacing manual VPN-switched deployments.',
      'Designed a **DB-backed Dockerfile platform** that composes images from reusable commands, so one edit rolls vulnerability fixes out to 300+ services in **hours instead of days**.',
      'Built **EC2 Spot CI/CD runners** with automatic On-Demand failover and job re-queuing, **cutting compute costs** without hurting pipeline reliability.',
      'Redesigned the **CI/CD logging pipeline** (SQS, Lambda, SQL Server) with runner-side S3 archiving, batched writes and an insert-only table, **fixing incomplete and out-of-order archives** while cutting DB load.',
      'Re-architected version resolution from sequential calls to **concurrent async queries** across ECR, ECS and Lambda, with state reconciliation that **ended recurring wrong-version production deploys**.',
      'Built post-promotion **drift detection** comparing production to source across Lambda/ECS images, ASG AMIs, SQL schemas and S3 import maps, catching failed rollouts in **nearly every release**.',
      'Built components of a centralized **workflow orchestration engine** on top of the internal messaging system, giving distributed services **asynchronous, decoupled communication** and end-to-end visibility into where each workflow stands.',
    ],
    stack: ['AWS', 'CI/CD', 'Python', 'C#', 'SQL Server', 'Terraform'],
  },
  {
    company: 'Veoneer',
    logo: '/logos/veoneer.png',
    logoFull: true,
    url: 'https://www.veoneer.com',
    role: 'Software Engineer Intern',
    location: 'Markham, ON',
    start: 'May 2023',
    end: 'Aug 2024',
    highlights: [
      'Built a **warehouse ordering and dispatch platform** (Next.js, FastAPI, SQL Server) linking SMT production lines to the warehouse, replacing a legacy PHP system and **reducing order cycle time by 70%**.',
      '**Primary engineer** for **10+ production-critical Manufacturing Execution Systems** in C#/.NET and VB6, root-causing failures to keep the factory running and deliveries on time.',
      'Created the **Smart Receiving Device**, a C#/.NET desktop app around a Keyence SR-5000X camera that reads **up to 8 barcodes per scan**, lifting receiving efficiency by 50%.',
      'Delivered an **image traceability web app** (Next.js, C#, Flask, SQL Server) so engineers can **search and download SMT reel images** for defect investigation and root-cause analysis.',
    ],
    stack: ['Next.js', 'FastAPI', 'C#', '.NET', 'SQL Server'],
  },
];
