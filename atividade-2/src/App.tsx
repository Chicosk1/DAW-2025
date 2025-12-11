import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <Header />
      <SearchBar />

      <h2 className="text-center text-xl font-semibold mt-6">
        Filme em destaque
      </h2>

      <MovieCard
        titulo="Filme Exemplo"
        ano={2025}
        descricao="Este é um pequeno exemplo de card utilizado para praticar React e Tailwind."
        imagem="https://via.placeholder.com/400x250"
      />
    </div>
  );
}
