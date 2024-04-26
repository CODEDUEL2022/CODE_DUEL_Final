import { useRouter } from 'next/navigation';

type UseProfileStatus = () => {
  name: string;
  rate: number;
};

export const useProfileStatus: UseProfileStatus = () => {
  const name = localStorage.getItem('user_name') ?? '';
  const rate = localStorage.getItem('rate') ?? '';

  if (name === '' || rate === '') {
    const router = useRouter();
    router.push('/home');
  }

  return {
    name: name,
    rate: Number(rate),
  };
};
