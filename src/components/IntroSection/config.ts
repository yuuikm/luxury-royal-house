import { useTranslation } from 'react-i18next';

interface CounterItem {
  id: string;
  number: number;
  label: string;
}

export const useIntroSectionCounter = (): CounterItem[] => {
  const { t } = useTranslation();

  return [
    {
      id: 'projects',
      number: Number(t('intro.projects')),
      label: t('intro.projectsText'),
    },
    {
      id: 'years',
      number: Number(t('intro.years')),
      label: t('intro.yearsText'),
    },
  ];
};
