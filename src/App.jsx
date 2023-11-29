import './App.css'
import Header from './Componentes/Header/Header'
import Footer from "./Componentes/Footer/Footer"
import TaskList from './Componentes/TaskList/TaskList'

function App() {

  return (
    <div className="body">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App


