import { create } from "zustand";

interface LoginStore {
    user: string;
    login: (username: string) => void;
    logout: () => void;
}

const useLoginStore = create<LoginStore>(set => ({
    user: '',
    login: username => set(() => ({ user: username })),
    logout: () => set(() => ({ user: '' }))
}))

export default useLoginStore;