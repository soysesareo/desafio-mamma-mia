import { createContext, useState, useEffect } from "react"

const Context = createContext({})

export function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);


  //carro compras
  const [compra, setCompra] = useState([]);

  const addPizza = (pizza) => {
    setCompra([...compra, pizza])
  }

  const estadoGlobal = {
    pizzas, compra, setCompra, addPizza
  };

  return <Context.Provider value={estadoGlobal}>{children}</Context.Provider>

}

export default Context