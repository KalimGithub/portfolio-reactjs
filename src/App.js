import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Projects from "./pages/Home/Projects";
// import About from "./pages/Home/About";
// import Contact from "./pages/Home/Contact";

function App() {
  // const getPortfolioData = async () => {
  //   try {
  //     const response = await axios.get("/api/portfolio/get-portfolio-data");
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getPortfolioData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;