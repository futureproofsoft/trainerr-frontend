import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { SignUp } from './components/SignUp';

export default function Auth(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return <SignUp />;
}