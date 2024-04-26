import { QueryClient} from '@tanstack/react-query';

import { LocalStorageKey, deleteItem } from 'src/utils/storage';

const queryClient = new QueryClient({
  defaultOptions: {
    // Disable refetch on window focus
    // Navigate to login page on unauthorized error
    queries: { 
      refetchOnWindowFocus: false, 
      throwOnError: (error) => {
        if (error.message === 'Unauthorized') {
          deleteItem(LocalStorageKey.USER_SESSION_TOKEN);
          window.location.href = '/login';
        }

        return false;
      },
    },
    mutations: {
      onError: (error) => {
        if (error.message === 'Unauthorized') {
          deleteItem(LocalStorageKey.USER_SESSION_TOKEN);
          window.location.href = '/login';
        }
      }
    }
  },
});

export default queryClient;
