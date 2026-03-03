import { create } from 'zustand';

type User = {
  id: number;
  name: string;
  email: string;
};

type SearchState = {
  query: string;
  users: User[];
  loading: boolean;
  error: string;
  controller: AbortController | null;
  timeoutId: ReturnType<typeof setTimeout> | null;

  setQuery: (query: string) => void;
  fetchUsers: (query: string) => void;
  clear: () => void;
};

export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  users: [],
  loading: false,
  error: '',
  controller: null,
  timeoutId: null,

  setQuery: (query) => {
    set({ query });
    get().fetchUsers(query);
  },

  fetchUsers: (query) => {
    const { controller, timeoutId } = get();

    // limpiar timeout anterior
    if (timeoutId) clearTimeout(timeoutId);

    // cancelar request anterior
    if (controller) controller.abort();

    if (!query.trim()) {
      set({ users: [], loading: false });
      return;
    }

    const newController = new AbortController();

    const newTimeout = setTimeout(async () => {
      try {
        set({ loading: true, error: '', controller: newController });

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
          { signal: newController.signal }
        );

        const data: User[] = await response.json();

        set({ users: data });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          set({ error: err.message });
        }
      } finally {
        set({ loading: false });
      }
    }, 500);

    set({ timeoutId: newTimeout });
  },

  clear: () => {
    const { controller, timeoutId } = get();
    if (controller) controller.abort();
    if (timeoutId) clearTimeout(timeoutId);

    set({
      query: '',
      users: [],
      loading: false,
      error: '',
    });
  },
}));