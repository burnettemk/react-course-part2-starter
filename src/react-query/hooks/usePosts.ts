import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => useQuery<Post[], Error>({
    // if we wanted to build our own API, the data should go from more general to more specific
    // /users/1/posts
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
    queryFn: () => 
        axios
        .get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId,
            }
        })
        .then(res => res.data),
    staleTime: 1 * 60 * 1000, // 1m
})

export default usePosts;