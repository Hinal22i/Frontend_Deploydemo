import { useEffect, useState } from 'react'
import pacmanLoader from 'react-spinners/PacmanLoader'
import './App.css'

function App() {
  const [fighters, setFighters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("#000");

  // const getData = fetch("http://localhost:8080/fighters")
  // .then((res) => res.json())
  // .catch((e) => console.log(e));

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch("http://localhost:8080/fighters")
        const data = await response.json();
        setFighters(data);
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    getData();
  }, [])

  const myStyle = { border: "1px solid black", margin: "10px", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 14px 12px rgba(0,0,0,0.1)" }
  return (
    <div>
      <h1>Fetching our Backend </h1>
      {isLoading ? '<PacmanLoader />' :
        fighters.map((fighter) => (
          <div key={fighter.id} style={myStyle}>
            <h3>{fighters.first_name} {fighters.first_name}</h3>
            <p>Style: {fighter.style} </p>
          </div>
        ))
      }
    </div>
  )
}

export default App
