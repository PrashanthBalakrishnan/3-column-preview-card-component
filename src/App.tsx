import Card from "./components/Card";
import data from "./data";

const App = () => {
  return (
    <div className="app">
      {data.map((item) => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};
export default App;
