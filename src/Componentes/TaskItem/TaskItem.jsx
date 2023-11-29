import {
  UnorderedList,
  ListItem,
  ChakraProvider,
  extendTheme,
  Checkbox,
} from "@chakra-ui/react";
import "../TaskItem/TaskItem.css";

const theme = extendTheme({
  styles: {
    global: {
      ".chakra-checkbox .chakra-checkbox__control": {
        borderRadius: "50%",
        borderColor: "#AD97FD",
        _checked: {
          bgColor: "#AD97FD",
          borderColor: "#AD97FD",
          _hover: {
            bgColor: "#D0C3FB",
            borderColor: "#D0C3FB",
          },
        },
        _hover: {
          borderColor: "#AD97FD",
        },
        _focus: {
          boxShadow: "none",
          borderColor: "#AD97FD",
        },
      },
      ".chakra-checkbox .chakra-checkbox__label": {
        marginLeft: "10px",
      },
    },
  },
  colors: {
    custom: {
      500: "#AD97FD",
    },
  },
});

function TaskItem({ tasks, setTasks }) {
  const handleCheckboxChange = (index) => {
    if (tasks) {
      const updatedTasksList = [...tasks];
      updatedTasksList[index].completada = !updatedTasksList[index].completada;
      setTasks(updatedTasksList);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <UnorderedList style={{ listStyleType: "none" }}>
        {tasks &&
          tasks.map((task, index) => (
            <ListItem
              key={index}
              style={{
                color: task.completada ? "#D0C3FB" : "#AD97FD",
                paddingBottom: "2%",
              }}
            >
              <div className="tasks">
                <div>{task.date}</div>
                <div className="nombretask">
                  {" "}
                  <p className={task.completada ? "textDecoration" : ""}>
                    {task.nombre}
                  </p>
                </div>
                <div className="checkbox">
                  <Checkbox
                    isChecked={task.completada}
                    onChange={() => handleCheckboxChange(index)}
                    size="lg"
                  ></Checkbox>
                </div>
              </div>
            </ListItem>
          ))}
      </UnorderedList>
    </ChakraProvider>
  );

}

export default TaskItem;
