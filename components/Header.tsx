'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useI18n } from '@/components/LanguageProvider';

export default function Header() {
  const { t } = useI18n();

  return (
    <Navbar className="w-full">
      <NavbarBrand className="w-sm">
        <Image
          src="/img/logo.svg"
          alt="3comp"
          width={120}
          height={36}
          priority
        />
      </NavbarBrand>

      <NavbarContent className="w-md" justify="end">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
