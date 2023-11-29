import React from 'react'
import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Box,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react";
import "../TaskList/TaskList.css"
import TaskItem from '../TaskItem/TaskItem';
import ModalComponent from '../Modal/Modal';

export default function TaskList() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <Flex className="card-container">
      <Card className="card">
        <CardBody className="cbody">
          <Tabs isFitted variant="enclosed">
            <div className="listtab">
              <TabPanels>
                <TabPanel className="conten">
                  <Card className="list">
                    <CardHeader className="cheader">
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Avatar
                            className="imgPerfil"
                            size="lg"
                            name="Segun Adebayo"
                            src="/imgPerfil.jpeg"
                          />
                          <Box className="name">
                            <h1 className="nombre">
                              Florencia Denis Galindez Casas
                            </h1>
                            <p>Full Stack Developer</p>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody className="listcontainer">
                      <TaskItem tasks={tasks} setTasks={setTasks} />
                    </CardBody>
                  </Card>
                </TabPanel>
              </TabPanels>
              <TabList className="btn">
                <Tab>
                  <Flex>
                    <div className="modal">
                      <div className='date'>
                        <div>
                          <p className="day">30</p>
                        </div>
                        <div>
                          <p>Nov 2023</p>
                        </div>
                        <div>
                          <p>Wednesday</p>
                        </div>
                      </div>
                      <div className="btn-modal">
                        <ModalComponent addTask={handleAddTask} />
                      </div>
                    </div>
                  </Flex>
                </Tab>
              </TabList>
            </div>
          </Tabs>
        </CardBody>
      </Card>
    </Flex>
  );
}
