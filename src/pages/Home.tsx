import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle.length !== 0) {

      let objeto: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }

      setTasks((oldState) => [...oldState, objeto])

      //console.warn(newTaskTitle);


    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let tarefas: Task[] = [];

    tasks.map((item) => {
      if (item.id === id && item.done === false) {
        item.done = true;
        tarefas.push(item);
      } else {
        item.done = false;
        tarefas.push(item);
      }
    });

    //console.log(JSON.stringify(tarefas));


    setTasks(tarefas);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter((task) => task.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}