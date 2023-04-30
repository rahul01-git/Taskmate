import './App.css'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'
function App() {
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      <ShowTask/>
    </div>
  )
}

export default App
