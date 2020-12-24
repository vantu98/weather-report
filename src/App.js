import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Empty from "./components/Weather/Empty";

const bgByWeatherCode = {
  Clear: ["#EC631F", "#FDDD17"],
  Snow: ["#1D77C4", "#31D2CA"],
  Rain: ["#563C2D", "#BEAA92"],
  Drizzle: ["#659ACC", "#A7D5D7"],
  Atmosphere: ["#187534", "#83D71F"],
  Thunderstorm: ["#AC2658", "#F29B4C"],
  Clouds: ["#6B6B6B", "#E0E0E0"],
};

function App() {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  const [bg, setBg] = useState("linear-gradient(45deg, #EC631F, #FDDD17)");

  function handleData(data) {
    const code = data.cod;

    if (code === 200) {
      setData(data);
      setFlag(true);
    } else {
      // handle when can search location
      setFlag(false);
    }
  }

  useEffect(() => {
    if (flag) {
      const bgColors = bgByWeatherCode[data.weather[0].main];
      const bgGradient = `linear-gradient(45deg, ${bgColors.join(",")})`;

      setBg(bgGradient);
    }
    return () => {};
  }, [data, flag]);

  return (
    <section
      className="App w-full min-h-screen relative text-white"
      style={{ background: bg }}
    >
      <Header handleFetchData={handleData} />

      {flag ? <Weather data={data} /> : <Empty />}
    </section>
  );
}

export default App;
