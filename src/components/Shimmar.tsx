type ShimmarProps = {
  type?: "restaurant" | "menu";
};

function Shimmar({ type = "restaurant" }: ShimmarProps) {
  if (type === "restaurant") {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="h-60 bg-gray-200 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  } else if (type === "menu") {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }
}

export default Shimmar;
