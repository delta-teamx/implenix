'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

export const DOCS_NAV: DocsNavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'Prerequisites', href: '/docs/getting-started/prerequisites' },
      { title: 'First Call Test', href: '/docs/getting-started/first-call-test' },
    ],
  },
  {
    title: 'Agent Configuration',
    items: [
      { title: 'Call Scripts', href: '/docs/agent-configuration/call-scripts' },
      { title: 'Transfer Rules', href: '/docs/agent-configuration/transfer-rules' },
      { title: 'Business Hours', href: '/docs/agent-configuration/business-hours' },
      { title: 'Voicemail Handling', href: '/docs/agent-configuration/voicemail-handling' },
    ],
  },
  {
    title: 'CRM Integrations',
    items: [
      { title: 'GoHighLevel', href: '/docs/crm-integrations/gohighlevel' },
      { title: 'HubSpot', href: '/docs/crm-integrations/hubspot' },
      { title: 'Salesforce', href: '/docs/crm-integrations/salesforce' },
      { title: 'Zoho', href: '/docs/crm-integrations/zoho' },
      { title: 'Custom Webhook', href: '/docs/crm-integrations/custom-webhook' },
    ],
  },
  {
    title: 'Phone Setup',
    items: [
      { title: 'Number Provisioning', href: '/docs/phone-setup/number-provisioning' },
      { title: 'SIP Trunk Basics', href: '/docs/phone-setup/sip-trunk-basics' },
      { title: 'Call Forwarding Setup', href: '/docs/phone-setup/call-forwarding-setup' },
    ],
  },
  {
    title: 'Implementation Guide',
    items: [
      { title: 'How Implenix Deploys Your Agent', href: '/docs/implementation-guide/overview' },
      { title: 'Timeline', href: '/docs/implementation-guide/timeline' },
      { title: 'What You Need to Provide', href: '/docs/implementation-guide/what-you-provide' },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      { title: 'Common Issues', href: '/docs/troubleshooting/common-issues' },
      { title: 'Support Contact', href: '/docs/troubleshooting/support-contact' },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Documentation">
      <ul className="space-y-1">
        {DOCS_NAV.map((section) => (
          <SidebarSection key={section.title} section={section} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
}

function SidebarSection({
  section,
  pathname,
}: {
  section: DocsNavSection;
  pathname: string | null;
}) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left text-xs uppercase tracking-widest text-white/60 hover:text-white py-2"
      >
        {section.title}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="border-l border-brand-purple/20 ml-1 pl-3 space-y-1">
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block py-1.5 text-sm font-body transition-colors ${
                    active
                      ? 'text-brand-purple'
                      : 'text-white/80 hover:text-brand-cyan'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
