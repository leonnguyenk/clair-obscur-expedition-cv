import { publicUrl } from '~/publicUrl';

import { siSap } from 'simple-icons';

import type { TechId } from './tech';

export type CompanyLogo = { src: string } | { icon: typeof siSap };

export interface Experience {
  id: string;
  title: string;
  company: string;
  logo: CompanyLogo;
  start: string;
  end?: string;
  highlights: string[];
  stack: TechId[];
  figure?: { value: string; label: string };
  freelance?: boolean;
}

const POSITIONS: Experience[] = [
  {
    id: 'capgemini',
    title: 'Senior Platform Engineer',
    company: 'Capgemini',
    logo: { src: publicUrl('ui/logos/capgemini.svg') },
    start: '2026-05',
    figure: { value: '2,000+', label: 'Sessions' },
    highlights: [
      'Gestion de repositories et pipelines Azure DevOps pour les intégrations et déploiements continus',
      'Gestion de modules Terraform pour provisionner et maintenir les ressources Azure.',
      'Exploitation d’AKS, diagnostic des pods, services, ingress et communications réseau',
      'Administration de PostgreSQL et MySQL Flexible Server et automatisation des opérations de reprise',
      'Mise en œuvre de Private Endpoints, Private DNS Zones, VNets et règles de sécurité'
    ],
    stack: [
      'kubernetes',
      'azure',
      'terraform',
      'postgres',
      'aws',
      'elk',
      'cybersecurity',
      'devops',
      'aks',
      'cosmosdb',
      'ansible',
      'jenkins'
    ]
  },
  {
    id: 'aleysia',
    title: 'Ingénieur SysOps',
    company: 'Aleysia',
    logo: { src: publicUrl('ui/logos/aleysia.svg') },
    start: '2022-11',
    end: '2023-01',
    figure: { value: '200', label: 'Customers' },
    highlights: [
      'Apporter une expertise sur la philosophie DevOps à mettre en œuvre',
	  'Participer à l’automatisation, au déploiement et à l’intégration des applications (CI/CD)',
	  'Participer à l’optimisation continue de l’infrastructure : sécurité, performance',
	  'Participer au monitoring de l’infrastructure'
    ],
    stack: ['jenkins', 'gitlab', 'ansible', 'postgres', 'vsphere', 'elk', 'cybersecurity', 'devops', 'portainer', 'vmware']
  },
  {
    id: 'veolia',
    title: 'Ingénieur Sysops',
    company: 'Veolia',
    logo: { src: publicUrl('ui/logos/veolia.svg') },
    start: '2025-02',
    end: '2026-05',
    figure: { value: '80%', label: 'Coverage' },
    highlights: [
      'Migration des applications et services On-prem vers le Cloud GCP',
	  'Reconstruction des VM Bastion',
	  'Création et gestion des templates + blueprints VMWare',
	  'Hardening OS: Firewall, sécuration SSH, fail2ban, sécurisation FS, VG',
	  'Déploiement automatisé avec Puppet + Terraform',
	  'Gestion des VM et BDD sur GCP',
	  'Déploiement l’EDR Crowd Strike sur Linux + Windows',
	  'Supervision Centreon via Nagios',
	  'Gestion du VPN nomade et site2site'
    ],
    stack: ['kubernetes', 'terraform', 'docker', 'gcp', 'crowdstrike', 'puppet']
  },
  {
    id: 'edf-infra',
    title: 'Ingénieur SysOps',
    company: 'EDF',
    logo: { src: publicUrl('ui/logos/edf.svg') },
    start: '2023-01',
    end: '2025-02',
    freelance: true,
    highlights: [
      'Pilotage de l’équipe Infrastructures, Cloud et Cybersécurité',
	  'Infogérance du parc informatique de 1700 VM Linux + Windows',
	  'Approvisionnement, installation et configuration des serveurs',
	  'Virtualisation et conteneurisation',
	  'Participation à l’automatisation et au déploiement CI/CD',
	  'Gestion du Firewall et VLAN',
	  'Gestion des playbooks Ansible et jobs Jenkins',
	  'Suivi des CVE, patch de sécurité OS + Middlewares',
	  'Déploiement et maintenance de l’EDR',
	  'Supervision et monitoring des performances ',
	  'Optimisation de l’infrastructure: consommation + performance'
    ],
    stack: ['ansible', 'jenkins', 'docker', 'gitlab', 'postgres', 'vsphere', 'elk', 'cybersecurity', 'devops', 'portainer', 'vmware']
  },
  {
    id: 'edf-app',
    title: 'Ingénieur applicatif',
    company: 'EDF',
    logo: { src: publicUrl('ui/logos/edf.svg') },
    start: '2020-05',
    end: '2023-01',
    figure: { value: '16', label: 'React' },
    highlights: [
      'Analyse des besoins métier et planification des étapes de BUILD',
	  'Suivi, réception et validation des livraisons TMA',
	  'Déploiement automatisé et ordonnancement des tâches',
	  'Qualification et validation des pipelines CI/CD',
	  'Gestion des playbooks Ansible et orchestrer des jobs Jenkins',
	  'Rédaction des scénarios de tests',
	  'Participation aux recettes et accompagnement du métier',
	  'Support N3 auprès des utilisateurs',
	  'Accompagnement lors du déploiement de l’application',
	  'Maintenance applicative et évolutive'
    ],
    stack: ['ansible', 'jenkins', 'docker', 'gitlab', 'postgres', 'vsphere', 'elk', 'cybersecurity', 'devops', 'portainer', 'vmware']
  },
  {
    id: 'nextlane',
    title: 'Backoffice N2',
    company: 'Nextlane',
    logo: { src: publicUrl('ui/logos/nextlane.svg') },
    start: '2017-10',
    end: '2020-05',
    highlights: [
      'Prise en charge les demandes clients escaladées par les conseillers support front office et des demandes remontées par les partenaires internationaux.',
	  'Analyser, résoudre les demandes, établir le diagnostic en cas de bug.',
	  'Qualification les bugs, détection les urgences et les risques.',
	  'Rédaction des documentations, FAQ, newsletters client.',
	  'Alimentation la base de connaissance de la hotline.'
    ],
    stack: ['sqlserver', 'redhat', 'unix', 'oracle', 'zendesk']
  }
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parse = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
};
const label = (ym: string) => `${MONTHS[parse(ym).m - 1]} ${parse(ym).y}`;
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

const index = (ym: string) => parse(ym).y * 12 + parse(ym).m - 1;

export const monthsOf = (e: Experience) => Math.max(1, index(e.end ?? today) - index(e.start));

export const monthsAcross = (positions: Experience[]) => {
  const months = new Set<number>();
  for (const e of positions) {
    const start = index(e.start);
    const end = Math.max(start + 1, index(e.end ?? today));
    for (let m = start; m < end; m++) months.add(m);
  }
  return months.size;
};

export const yearsOf = (months: number) => Math.max(1, Math.round(months / 12));

export const periodOf = (e: Experience) => `${label(e.start)} – ${e.end ? label(e.end) : 'today'}`;

export const yearsSince = (start: string) => yearsOf(index(today) - index(start));

export const EXPERIENCES = POSITIONS;
