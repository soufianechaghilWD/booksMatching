function Books({ books, loading }) {
  return (
    <form className="ml-40 my-10 mr-5">
      <h1 className="text-prim text-[35px] font-extrabold mb-3">Your Books</h1>
      {loading && (
        <h3 className="text-center font-semibold">Loading your books...</h3>
      )}
      {!loading && books === null && (
        <h3 className="text-center font-semibold">
          Submit your preferences above
        </h3>
      )}
      {books?.length === 0 && (
        <h3 className="text-center font-semibold">
          We don't have any books for you now
        </h3>
      )}
      <div className="flex justify-between flex-wrap">
        {books?.map((book) => {
          return (
            <div
              className="bg-seco flex flex-col w-[300px] items-center py-5 mb-5"
              key={book._id}
            >
              <h2 className="font-bold text-[25px] mb-4">{book.name}</h2>
              <img src={book.picUrl} className="w-[80%]" />
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default Books;
