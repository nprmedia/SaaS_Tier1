// components/global/Footer.tsx

import Link from 'next/link'

interface FooterLinkGroup {
  heading: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  logo: string
  legal: string
  contact: { label: string; href: string }
  navGroups: FooterLinkGroup[]
}

const Footer = ({ logo, legal, contact, navGroups }: FooterProps) => {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white px-6 py-12 text-sm text-gray-600 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Logo + Legal */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
          <p>{legal}</p>
          <Link href={contact.href} className="underline">
            {contact.label}
          </Link>
        </div>

        {/* Navigation Groups */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {navGroups.map((group) => (
            <div key={group.heading}>
              <h4 className="mb-3 font-semibold text-gray-800">{group.heading}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="hover:text-black hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
