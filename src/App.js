import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";

function App() {
  const handlePrint =() => {
    window.print()
  }
  
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
       
       <Header handlePrint={handlePrint} />

       <MainDetails></MainDetails>

      <ClientDetails></ClientDetails>

       <Dates />

      
       <Table></Table>

        <Notes></Notes>

        <Footer></Footer>
       

      </main>
    </>
  );
}

export default App;
