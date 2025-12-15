const CatCard = (props) => {
  const { Cat } = props;
  return (
    <div className="border-2 border-grey-300 mt-8 rounded-lg w-[300px]">
      <img
        src={Cat.imageUrl}
        className="w-[300px] h-64 object-cover rounded-t-lg border-b-2 border-grey-300"
      />
      <div className="ml-2 text-slate-600">
        <div className="flex">
          <p className="w-[80px] font-bold">Name:</p>
          <p>{Cat.name}</p>
        </div>

        <div className="flex">
          <p className="w-[80px] font-bold">Age:</p>
          <p>{Cat.age}</p>
        </div>

        <div className="flex">
          <p className="w-[80px] font-bold">Breed:</p>
          <p>{Cat.breed}</p>
        </div>

        <div className="flex">
          <p className="w-[80px] font-bold">Location:</p>
          <p>{Cat.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
