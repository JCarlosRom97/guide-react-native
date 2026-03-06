import { create } from "zustand";

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

  setQuery: (query: string) => void;
  fetchUsers: (query: string) => Promise<void>;
  clear: () => void;
};

let controller: AbortController | null = null;
let timeoutId: ReturnType<typeof setTimeout> | null = null;

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  users: [],
  loading: false,
  error: "",

  setQuery: (query) => {
    set({ query });
    get().fetchUsers(query);
  },

  fetchUsers: async (query) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (controller) controller.abort();

    if (!query.trim()) {
      set({ users: [], loading: false });
      return;
    }

    controller = new AbortController();

    timeoutId = setTimeout(async () => {
      try {
        set({ loading: true, error: "" });

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
          { signal: controller?.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        set({ users: data });
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;

        set({
          error: err instanceof Error ? err.message : "Unknown error",
        });
      } finally {
        set({ loading: false });
      }
    }, 500);
  },

  clear: () => {
    if (controller) controller.abort();
    if (timeoutId) clearTimeout(timeoutId);

    set({
      query: "",
      users: [],
      loading: false,
      error: "",
    });
  },
}));