import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
import Header from "./Components/Header";
import Card from "./Components/Card";
console.log("Data are ", data);
const entries = data.map((x) => {
  return (
    <Card
      title={x.title}
      img={x.imageUrl}
      location={x.location}
      startDate={x.startDate}
      endDate={x.endDate}
      description={x.description}
    />
  );
});
function App() {
  return (
    <div className="App">
      <Header />
      {entries}
    </div>
  );
}

export default App;

// {
//   title: "Mount Fuji",
//   location: "Japan",
//   googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//   startDate: "12 Jan, 2021",
//   endDate: "24 Jan, 2021",
//   description:
//     "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
