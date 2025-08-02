import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoContextProvider from './context/TodoContextProvider'
import Footer from "./components/Footer"

function App() {
  return (
    <TodoContextProvider>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
      <div>
        <Footer name="test123">
          <h3>StarTech.com</h3>
        </Footer>
      </div>
    </TodoContextProvider>
  )
}

export default App
