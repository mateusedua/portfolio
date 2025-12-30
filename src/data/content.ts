// Portfolio content data - Easy to edit!

export const personalInfo = {
  name: "Mateus Eduardo",
  title: "Full Stack Developer",
  email: "mateuseduardobene@gmail.com",
  phone: "+55 43 99983-1861",
  location: "Paraná, Brasil",
  linkedin: "https://linkedin.com/in/mateus-eduardo-83025a161",
  github: "https://github.com/mateusedua",
  bio: "Desenvolvedor Full Stack com 5+ anos de experiência construindo aplicações escaláveis e sistemas de alta performance. Especialista em TypeScript, Python e infraestrutura cloud.",
  resumeUrl: "/resume.pdf", // Add your resume here
};

export const skills = {
  frontend: [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "SSR/CSR", icon: "ssr" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "APIs REST", icon: "api" },
    { name: "Node.js", icon: "nodejs" },
  ],
  devops: [
    { name: "Docker", icon: "docker" },
    { name: "NGINX", icon: "nginx" },
    { name: "Git", icon: "git" },
    { name: "GitHub Actions", icon: "github" },
    { name: "Cloudflare", icon: "cloudflare" },
  ],
  observability: [
    { name: "Prometheus", icon: "prometheus" },
    { name: "Grafana", icon: "grafana" },
    { name: "Loki", icon: "loki" },
    { name: "OTEL Collector", icon: "opentelemetry" },
  ],
};

export const experience = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Aguativa Golf Resort",
    period: "2020 - 2025",
    description:
      "Responsável pelo desenvolvimento e manutenção de sistemas críticos do resort.",
    achievements: [
      {
        text: "Aplicações web com Next.js usando Server Side e Client Side Rendering",
        metric: "SSR/CSR",
        metricLabel: "Next.js",
      },
      {
        text: "APIs REST em TypeScript processando 30.000+ transações mensais",
        metric: "30k+",
        metricLabel: "transações/mês",
      },
      {
        text: "Stack de observabilidade completa (Prometheus, Loki, Grafana)",
        metric: "100%",
        metricLabel: "visibilidade",
      },
      {
        text: "Pipelines CI/CD com GitHub Actions - deploy de horas para minutos",
        metric: "10x",
        metricLabel: "mais rápido",
      },
      {
        text: "Automação de relatórios com Python/Pandas",
        metric: "80%",
        metricLabel: "redução de tempo",
      },
      {
        text: "Containerização com Docker para todos os serviços",
        metric: "100%",
        metricLabel: "containerizado",
      },
    ],
  },
];

export const education = [
  {
    degree: "Engenharia de Software",
    institution: "UTFPR - Universidade Tecnológica Federal do Paraná",
    period: "2019 - Atual",
    icon: "🎓",
  },
];

export const projects = [
  {
    title: "Sistema de Reservas",
    description:
      "API REST de alta performance para gestão de reservas hoteleiras, processando milhares de transações diárias.",
    tags: ["TypeScript", "Node.js", "Docker", "REST API"],
    image: "/images/project-1.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Stack de Observabilidade",
    description:
      "Infraestrutura completa de monitoramento com Prometheus, Grafana e Loki para aplicações distribuídas.",
    tags: ["Prometheus", "Grafana", "Loki", "Docker Compose"],
    image: "/images/project-2.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Automação de Relatórios",
    description:
      "Sistema automatizado para geração de relatórios financeiros e operacionais com entrega via Slack e email.",
    tags: ["Python", "Pandas", "Automação", "Slack API"],
    image: "/images/project-3.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];
