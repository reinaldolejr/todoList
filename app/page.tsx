'use client';

import Image from 'next/image'
import React, { useState } from 'react';
import Todo from './components/todo';
import { Box, Container } from '@mui/material';
import { maxHeaderSize } from 'http';
import TodoForm from './components/todoForm';
import Search from './components/search';


const Home = () => {
    const [todoList, setTodoList] = useState<todoModel[] | null>([{
        id: 1,
        text: 'Clean House friday',
        category: 'Home',
        isCompleted: false,
    },
    {
        id: 2,
        text: 'Home Work to tuesday',
        category: 'College',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Code review of john',
        category: 'Work',
        isCompleted: false,
    }]);

    const [search, setSearch] = useState<string>("");

    const addTodo = (text: string, category: string): void => {
        let idMax: number = Math.max.apply(0, todoList?.map<number>(x => x.id) || []);

        const newTodoList: todoModel[] = [
            ...todoList || [],
            {
                id: idMax++,
                text,
                category,
                isCompleted: false,
            }
        ];

        setTodoList(newTodoList);
    }

    const deleteTodo = (id: number): void => {

        if (!todoList) return;
        const newTodoList: todoModel[] = [...todoList]
            .filter((item: todoModel) => item.id != id ? item : null);

        setTodoList(newTodoList);
    }

    const doneTodo = (id: number): void => {

        if (!todoList) return;
        const index: number = todoList.findIndex(todo => todo.id == id);
        const todo: todoModel = todoList[index];
        todo.isCompleted = !todo.isCompleted;
        const newTodoList: todoModel[] = [...todoList];
        newTodoList.splice(index, 1, todo);

        setTodoList(newTodoList);
    }


    return (
        <div>
            <Container>
                <Search search={search} setSearch={setSearch} ></Search>
                <h2>List</h2>
                <Box>
                    {todoList?.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()))
                        .map((todo: todoModel) => (
                            <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} doneTodo={doneTodo} />
                        ))}
                </Box>

                <h2>Create Task</h2>
                <Box>
                    <TodoForm addTodo={addTodo} ></TodoForm>
                </Box>
            </Container>
        </div>
    )
}

export default Home

