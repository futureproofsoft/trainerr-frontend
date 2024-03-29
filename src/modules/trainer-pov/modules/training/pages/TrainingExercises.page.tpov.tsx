import { useTranslation } from 'react-i18next';

export default function TrainingExercisesPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex">
      <div>Hello from ExercisesTrainer & {t('training:rnd')}!</div>
    </div>
  );
}
