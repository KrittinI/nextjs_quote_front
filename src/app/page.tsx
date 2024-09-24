import CreateButton from "./_components/create-quote";
import QuotesContainer from "./_components/quote-container";
import Search from "./_components/search-bar";
import { fetchAllQuote } from "./_lib/quote-data";

interface HomeProps {
    searchParams: string;
}

export default async function Home({ searchParams }: HomeProps) {
    const result = await fetchAllQuote(searchParams.title || "");
    const quotes = result.data;
    console.log(result.data);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center border-b border-b-black px-4 py-2 gap-2">
                <Search placeholder="Search..." />
                <CreateButton />
            </div>
            <QuotesContainer quotes={quotes} />
        </div>
    );
}
