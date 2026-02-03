'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useI18n } from '@/components/LanguageProvider';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t("nav.about"), href: "/about-us"}
  ];

  return (
    <Navbar className="w-full">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand className="w-sm">
        <Image
          src="/img/logo.svg"
          alt="3comp"
          width={120}
          height={36}
          priority
        />
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/" color="foreground">
            {t('nav.home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/services" color="foreground">
            {t('nav.services')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing" color="foreground">
            {t('nav.pricing')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about-us" color="foreground">
            {t("nav.about")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="w-md" justify="end">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={`w-full rounded-2xl px-6 py-5 text-xl font-semibold backdrop-blur-md transition-all duration-200 ${
                pathname === item.href
                  ? `bg-[rgba(1,108,207,0.75)] text-(--brand-white) shadow-md hover:-translate-y-px hover:shadow-lg`
                  : `bg-transparent text-(--brand-blue) shadow-md hover:-translate-y-px hover:bg-[var(--brand-blue)/10] hover:shadow-lg`
              }`}
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
