import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll,
        retry: 3,
        cacheTime: 300_000, //5m The amount of time before inactive queries get removed from the cache
        staleTime: 10 * 1000, //10s
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false,
    });
}

export default useTodos;