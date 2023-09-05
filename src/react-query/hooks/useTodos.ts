import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>('/todos');

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        retry: 3,
        cacheTime: 300_000, //5m The amount of time before inactive queries get removed from the cache
        staleTime: 10 * 1000, //10s
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false,
    });
}

export default useTodos;