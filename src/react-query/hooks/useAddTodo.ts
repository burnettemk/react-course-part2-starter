import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
    prevTodos: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: (todo: Todo) =>
        axios
          .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
          .then((res) => res.data),
      //  we use onMutate first to update the UI as soon as the form is submitted for an optimistic update
      onMutate: (newTodo: Todo) => {
        const prevTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
          newTodo,
          ...todos,
        ]);
  
        onAdd();

        return { prevTodos };
      },
      // if we are succesful, we save the new todo in the cache
      onSuccess: (savedTodo, newTodo) => {
        // Invalidating the cache
        // queryClient.invalidateQueries({
        //   queryKey: ['todos']
        // })
        queryClient.setQueryData<Todo[]>(
          CACHE_KEY_TODOS,
          (todos) => todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
      },
  
      onError: (error, newTodo, context) => {
        if (!context) return;
  
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodos);
      },
    });
}

export default useAddTodo;