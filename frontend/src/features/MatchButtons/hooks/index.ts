import { useRouter } from 'next/navigation';

type UseMatchButtons = () => {
  handleRandomMatch: () => void;
  handleCustomMatch: () => void;
  handleCpuMatch: () => void;
};

export const useMatchButtons: UseMatchButtons = () => {
  const router = useRouter();

  const handleRandomMatch = () => {
    router.push('/match');
  };

  const handleCustomMatch = () => {
    router.push('/match');
  };

  const handleCpuMatch = () => {
    router.push('/match');
  };

  return {
    handleRandomMatch,
    handleCustomMatch,
    handleCpuMatch,
  };
};
