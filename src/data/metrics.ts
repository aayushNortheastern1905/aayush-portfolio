export interface Metric {
  value: string;
  label: string;
  description: string;
  animatedValue: number;
  suffix: string;
}

export const metrics: Metric[] = [
  { value: '300+', label: 'Users Served', description: 'Active users on VeryDesi platform', animatedValue: 300, suffix: '+' },
  { value: '95%', label: 'Security Enhancement', description: 'Vulnerability reduction at eQ', animatedValue: 95, suffix: '%' },
  { value: '90%', label: 'Automation', description: 'Manual process elimination at EmTech', animatedValue: 90, suffix: '%' },
  { value: '5K+', label: 'Daily API Requests', description: 'Handled at production scale', animatedValue: 5000, suffix: '+' },
];
