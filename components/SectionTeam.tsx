'use client';

import { useI18n } from '@/components/LanguageProvider';
import { Button, Card, CardFooter, CardHeader, Image, Link as HeroLink, } from '@heroui/react';

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  linkedinUrl?: string;
  email?: string;
};

type TeamCardProps = TeamMember & {
  t: (key: string) => string;
};

function TeamCard({
  name,
  role,
  imageSrc,
  imageAlt,
  linkedinUrl,
  email,
  t,
}: TeamCardProps) {
  return (
    <Card
      isFooterBlurred
      shadow="none"
      className="card-hover h-120 w-full overflow-visible border border-black/10 bg-white"
    >
      {/* TOP OVERLAY */}
      <CardHeader className="absolute top-3 z-10 flex-col items-start px-4">
        <p className="text-tiny font-semibold text-white/70 uppercase">
          {role}
        </p>
        <h4 className="text-xl font-semibold text-white">{name}</h4>
      </CardHeader>

      {/* FULL BACKGROUND IMAGE */}
      <Image
        removeWrapper
        alt={imageAlt}
        src={imageSrc}
        className="z-0 h-full w-full object-cover"
      />

      {/* BLURRED FOOTER */}
      <CardFooter className="absolute bottom-0 z-10 w-full border-t border-white/20 bg-black/40 backdrop-blur-md">
        <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
          <div className="flex flex-col">
            <p className="text-tiny text-white/70">{t('team.connect')}</p>
            <p className="text-tiny text-white/60">{t('team.connectHint')}</p>
          </div>

          <div className="flex gap-2">
            {linkedinUrl && (
              <Button
                as={HeroLink}
                href={linkedinUrl}
                isExternal
                radius="full"
                size="sm"
                className="bg-white/20 text-white hover:bg-white/30"
              >
                LinkedIn
              </Button>
            )}

            {email && (
              <Button
                as={HeroLink}
                href={`mailto:${email}`}
                radius="full"
                size="sm"
                className="bg-white/20 text-white hover:bg-white/30"
              >
                Email
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function SectionTeam() {
  const { t } = useI18n();

  const team: TeamMember[] = [
    {
      name: 'Tristan Jerin',
      role: t('team.member1.role'),
      imageSrc: '/img/tristan.png',
      imageAlt: 'Team member 1',
      linkedinUrl: 'https://www.linkedin.com/in/tristan-jerin-06981a203/',
      email: 'tristan@3comp.si',
    },
    {
      name: 'Gašper Golja',
      role: t('team.member2.role'),
      imageSrc: '/img/gasper.png',
      imageAlt: 'Team member 2',
      linkedinUrl: 'https://www.linkedin.com/in/gašper-golja-960604276/',
      email: 'gasper@3comp.si',
    },
    {
      name: 'Jan Stupica',
      role: t('team.member3.role'),
      imageSrc: '/img/jan.png',
      imageAlt: 'Team member 3',
      linkedinUrl:
        'https://www.linkedin.com/in/jan-boštjan-de-stupica-153546178/',
      email: 'jan@3comp.si',
    },
  ];

  return (
    <section id="team" className="section">
      <div className="container-page">
        <h2 className="section-title">
          {t('team.title.prefix')}{' '}
          <span className="text-blue-600">{t('team.title.highlight')}</span>
        </h2>
        <p className="section-subtitle">{t('team.subtitle')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
