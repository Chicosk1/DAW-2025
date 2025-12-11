type Props = {
  titulo: string;
  ano: number;
  descricao: string;
  imagem: string;
};

export default function MovieCard({ titulo, ano, descricao, imagem }: Props) {
  return (
    <div className="bg-white w-[350px] mx-auto mt-8 rounded-xl shadow-md overflow-hidden">
      <img src={imagem} alt={titulo} className="w-full" />

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{titulo}</h3>
        <p className="text-gray-600">{ano}</p>

        <p className="text-sm mt-3">
          {descricao}
        </p>
      </div>
    </div>
  );
}
