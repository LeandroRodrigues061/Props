import './App.css'
import CarDetails from "../src/components/carDetails";

function App() {
  const cars = [
    { marca: "Toyota", km: 0, cor: "Preto", ano: 2024 },
    { marca: "Ford", km: 30000, cor: "Branco", ano: 2019 },
    { marca: "Honda", km: 15000, cor: "Vermelho", ano: 2021 },
  ];

  return (
    <div>
      <h1>Detalhes dos Carros:</h1>
      {cars.map((carro, index) => (
        <CarDetails
          key={index}
          marca={carro.marca}
          km={carro.km}
          cor={carro.cor}
          ano={carro.ano}
        />
      ))}
    </div>
  );
}

export default App;