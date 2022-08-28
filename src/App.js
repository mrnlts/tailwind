import "./App.css";
import cards from "./cards.json";
import Card from "./components/Card";
function App() {
  return (
    <div className="bg-red-100 h-full w-full flex flex-col align-center md:flex-row md:flex-wrap">
      {cards.data.map((card) => (
        <Card info={card} key={card._id} />
      ))}
    </div>
  );
}

export default App;
