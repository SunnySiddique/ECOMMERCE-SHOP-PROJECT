import Item from "./utlis/Item";
import Title from "./utlis/Title";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center gap-7 ${ifExists ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 mt-7" : "lg:gap-5 mt-7 grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"}`}
      >
        {items?.map((item, i) => (
          <Item {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
