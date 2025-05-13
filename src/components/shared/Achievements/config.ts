import { useTranslation } from 'react-i18next';

interface CounterItem {
  id: string;
  number: number;
  label: string;
  suffix: string;
}

export const useAchievementsSectionCounter = (): CounterItem[] => {
  const { t } = useTranslation();

  return [
    {
      id: 'projects',
      number: Number(t('achievements.projectsNumber')),
      label: t('achievements.projectsLabel'),
      suffix: '+',
    },
    {
      id: 'customers',
      number: Number(t('achievements.customersNumber')),
      label: t('achievements.customersLabel'),
      suffix: '%',
    },
    {
      id: 'years',
      number: Number(t('achievements.yearsNumber')),
      label: t('achievements.yearsLabel'),
      suffix: '+',
    },
  ];
};
