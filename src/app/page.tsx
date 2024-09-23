import CreateButton from "./_components/create-quote";
import QuotesContainer from "./_components/quote-container";
import SearchBar from "./_components/search-bar";

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center border-b border-b-black px-4 py-2 gap-2">
                <SearchBar />
                <CreateButton />
            </div>
            <QuotesContainer />
        </div>
    );
}
