interface props {
  marca: string;
  km: number;
  cor: string;
  ano: number;
}

const CarDetails = ({ marca, km, cor, ano }: props) => {
  const isNovo = km <= 0;

  return (
    <div>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
            <li>Ano: {ano}</li>
            {isNovo ? <b>Carro novo</b> : <b>Carro usado</b>}
        </ul>
    </div>
  );
};

export default CarDetails;
