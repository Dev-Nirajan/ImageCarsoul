const CatCard = (props) => {
  const { Cat } = props;
  return (
    <div className="flex justify-center mt-8 overflow-hidden">
      <div className="transform origin-center scale-90 sm:scale-100 transition-transform w-[300px] rounded-lg overflow-hidden border-2 border-grey-300">
        <img
          src={Cat.imageUrl}
          className="w-[300px] h-64 object-cover rounded-t-lg"
        />
        <div className="px-4 py-3 text-slate-600">
          <div className="flex">
            <p className="w-20 flex-shrink-0 font-bold">Name:</p>
            <p className="truncate">{Cat.name}</p>
          </div>

          <div className="flex">
            <p className="w-20 flex-shrink-0 font-bold">Age:</p>
            <p>{Cat.age}</p>
          </div>

          <div className="flex">
            <p className="w-20 flex-shrink-0 font-bold">Breed:</p>
            <p className="truncate">{Cat.breed}</p>
          </div>

          <div className="flex">
            <p className="w-20 flex-shrink-0 font-bold">Location:</p>
            <p className="truncate">{Cat.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
