import Header from "./Header"
import Main from "./Main"


//function App(){}  ->   App()
//function App(){}  ->   <App />  (JSX)


//function App(parametros){} -> App("Hola")
//function App(props){}      -> <App props="Hola" />  (JSX)


const App = () => {
  return (
    <>
      <Header
        title="megatoys"
        links={["https://google.com", "https://mercado.com", "https://coder.com"]}
      />
      {/* 
      <Header title="horacio"/>
      <Header title="mercado coder"/> 
      */}
      <Main />
    </>
  )
}

export default App