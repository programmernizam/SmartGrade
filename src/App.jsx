import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Hero />
      <StudentTable />
      <Footer />
    </div>
  );
}

export default App;
