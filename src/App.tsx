import { Header } from "./componsnts/Header";
import { Hero } from "./componsnts/section/Hero";
import { Usps } from "./componsnts/section/Usps";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
      </main>
    </>
  );
}

export default App;
