import { createBrowserRouter } from 'react-router-dom';
import { homeRouter } from './modules/home/Home.router';
import { settingsRouter } from './modules/settings/Settings.router';
import { authRouter } from '@modules/auth/Auth.router';
import { WrappedOutlet } from '@shared/components/WrappedOutlet.component';
import { trainingTrainerRouter } from '@modules/training/trainer/TrainingTrainer.router';
import { trainingClientRouter } from '@modules/training/client/TrainingClient.router';
import { clientsRouter } from '@modules/clients/trainer/Clients.router';

const env = import.meta.env;

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <WrappedOutlet />,
      children: [
        homeRouter,
        settingsRouter,
        authRouter,
        trainingTrainerRouter,
        trainingClientRouter,
        clientsRouter,
      ],
    },
  ],
  {
    basename: env.DEV ? '/' : '/trainerr-frontend/',
  },
);
