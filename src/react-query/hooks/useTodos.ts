import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    const fetchTodos = () =>
    axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data);

    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        retry: 3,
        cacheTime: 300_000, //5m The amount of time before inactive queries get removed from the cache
        staleTime: 10 * 1000, //10s
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false,
    });
}

export default useTodos;