import { Results } from "@/app/components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themovie.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&lanquage=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
          0(<h1 className="text-center pt-6">No results found</h1>)}
      {results && <Results results={results} />}
    </div>
  );
}
