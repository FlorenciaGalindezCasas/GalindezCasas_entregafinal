import React from "react";
import { useState } from "react";
import {
  Input,
  Button,
} from "@chakra-ui/react";
import "../TaskForm/TaskForm.css"

export default function TaskForm({ addTask, closeModal }) {
  const [taskData, setTaskData] = useState({
    date: "00:00",
    task: "",
  });

  const handleDate = (e) => {
    const value = e.target.value
    const partes = value.split(':')

    let horas = parseInt(partes[0], 10)
    let min = parseInt(partes[1], 10);


    if(min === 60){
        min = 0
        horas ++
    }

    const nuevaHora =
      (horas < 10 ? "0" : "") +
      horas +
      ":" +
      (min < 10 ? "0" : "") +
      min
      setTaskData({...taskData, date: nuevaHora})
  };

  const handleTask = (e) => {
    setTaskData({ ...taskData, task: e.target.value });
  };

  
  const handleForm = () => {
   let currentId = 0;
   const newTask = {
     id: currentId,
     nombre: taskData.task,
     completada: false,
     color: "#AD97FD",
     date: taskData.date,
   };
    
    addTask(newTask)
    currentId++;
    setTaskData({ date: "00:00", task: "" });
    closeModal();
  };

  return (
    <div className="formTask">
      <Input
        type="time"
        value={taskData.date}
        onChange={handleDate}
        focusBorderColor="#AD97FD"
      />
      <Input
        placeholder="New Task"
        value={taskData.task}
        onChange={handleTask}
        focusBorderColor="#AD97FD"
      />
      <Button onClick={handleForm}>Save</Button>
    </div>
  );
}
