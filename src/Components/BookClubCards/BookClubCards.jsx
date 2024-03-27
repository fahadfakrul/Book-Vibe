
const BookClubCards = ({club}) => {
    const {name,description,meeting_schedule,image} = club;
    return (
        <article className="flex flex-col dark:bg-gray-50">
        <a rel="noopener noreferrer" href="#" >
            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500 rounded-2xl" src={image} />
        </a>
        <div className="flex flex-col flex-1 p-6">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            
            <h3 className="flex-1 py-2 text-2xl font-bold leading-snug font-playfair-display text-black">{name}</h3>
            <p className="flex-1 py-2 text-xl font-medium text-black">{description}</p>
            <p className="flex-1 py-2 text-lg font-medium leading-snug text-[#0D0D0DB3] ">Meeting Schedule: {meeting_schedule}</p>
            
            <button className="btn text-white bg-[#23BE0A] px-7  text-xl font-bold mt-8">Join Now</button>
        </div>
    </article>
    );
};

export default BookClubCards;