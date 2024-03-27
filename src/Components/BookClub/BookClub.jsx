import { useLoaderData } from "react-router-dom";
import BookClubCards from "../BookClubCards/BookClubCards";

const BookClub = () => {
    const clubs = useLoaderData();
    return (
        <div className="container mx-auto">
            <section className="py-6 sm:py-12  ">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold font-playfair-dispaly text-black">Discover Diverse Book Clubs <br /> Explore, Engage, Enjoy!</h2>
			
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			{
                clubs.map((club,index) => <BookClubCards key={index} club={club}></BookClubCards>)
            }
			
		</div>
	</div>
</section>
        </div>
    );
};

export default BookClub;