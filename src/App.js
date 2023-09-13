import { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";

function App() {

  const [showInvoice,setShowInvoice]=useState(true)

  const [name,setName]= useState("Warren Martin")

  const [address,setAddress]= useState("Martin Corner")

  const [email,setEmail]= useState("martin@gmail.com")

  const [phone,setPhone]= useState("123-456-789")

  const [bankName,setBankName]= useState("Dash Bank")

  const [bankAccount,setBankAccount]= useState("1234567")

  const [website,setWebsite]= useState("www.warren.com")

  const [clientName,setClientName]= useState("Calangute")

  const [clientAddress,setClientAddress]= useState("calangute")

  const [invoiceNumber,setInvoiceNumber]= useState("so123")

  const [invoiceDate,setInvoiceDate]= useState("2/2/2022")

  const [dueDate,setDueDate]= useState("3/2/2022")

  const [notes,setNotes]= useState("somehin somethin")

  const [description,setDescription]=useState("")
  const [quantity,setQuantity]=useState("")
  const [price,setPrice]=useState("")
  const [amount,setAmount]=useState("")
  const [list,setList]=useState([])


  const handlePrint =() => {
    window.print()
  }
  
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      { showInvoice ? <div>
       <Header handlePrint={handlePrint} />

       <MainDetails name={name} address={address}></MainDetails>

      <ClientDetails clientName={clientName} clientAddress={clientAddress}></ClientDetails>

       <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

      
       <Table description={description} quantity={quantity} price={price} amount={amount} />

        <Notes notes={notes}></Notes>

        <Footer 
        name={name} 
        address={address}
         website={website} 
         email={email}
         phone={phone}
         bankAccount={bankAccount}
         bankName={bankName}
         />

        <button onClick={() =>setShowInvoice(false)} className="mt-5 bg-blue-500  text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>

        </div> : (
         <>
         {/* name,address,client name, client address,email,phone,bank name,bank account number, website, invoice number, invoice date, due date, notes */}


      <div className="flex flex-col justify-center">

      <article className="md:grid grid-cols-2 gap-10">

        <div className="flex flex-col ">
          <label htmlFor="name">your full name</label>
          <input 
          type="text" 
          name="text" 
          id="name"
           placeholder="Enter your name"
           autoComplete="off"
           value={name}
           onChange={(e)=>setName(e.target.value)}
          />
        </div > 

         <div className="flex flex-col">
         <label htmlFor="address">Enter your address</label>
          <input type="text" 
          name="address" 
          id="address"
           placeholder="Enter your address"
           autoComplete="off"
           value={address}
           onChange={(e)=>setAddress(e.target.value)}
          />
         </div>
        </article>

        {/* Second  */}

        <article className="md:grid grid-cols-3 gap-10">

          <div className="flex flex-col">
          <label htmlFor="email">Enter your name</label>
            <input type="email" 
            name="email" 
            id="email"
            placeholder="Enter your name"
            autoComplete="off"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
          <label htmlFor="website">Enter your Website</label>
            <input
          type="url" 
            name="website" 
            id="website"
            placeholder="Enter your website"
            autoComplete="off"
            value={website}
            onChange={(e)=>setWebsite(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
          <label htmlFor="phone">Enter your phone</label>
            <input
          type="text" 
            name="phone" 
            id="phone"
            placeholder="Enter your phone"
            autoComplete="off"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
       
        </article>

        <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="bankName">Enter your bank Name</label>
          <input
         type="text" 
          name="bankName" 
          id="bankName"
           placeholder="Enter your bank name"
           autoComplete="off"
           value={bankName}
           onChange={(e)=>setBankName(e.target.value)}
          />

          </div>

          <div className="flex flex-col">
          <label htmlFor="bankAccount">Enter your bankAccount</label>
          <input
         type="text" 
          name="bankAccount" 
          id="bankAccount"
           placeholder="Enter your bank account number"
           autoComplete="off"
           value={bankAccount}
           onChange={(e)=>setBankAccount(e.target.value)}
          />
          </div>
       
      
        </article>


         <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
          <label htmlFor="clientName">Enter your clientName</label>
          <input
         type="text" 
          name="clientName" 
          id="clientName"
           placeholder="Enter your Client Name"
           autoComplete="off"
           value={clientName}
           onChange={(e)=>setClientName(e.target.value)}
          />
          </div>


          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter your clientAddress</label>
          <input
         type="text" 
          name="clientAddress" 
          id="clientAddress"
           placeholder="Enter your Client's Address"
           autoComplete="off"
           value={clientAddress}
           onChange={(e)=>setClientAddress(e.target.value)}
          />
          </div>
              

         </article>

         <article className="md:grid grid-cols-3 gap-10 ">
        <div className="flex flex-col">
        <label htmlFor="invoiceNumber">Invoice Number</label>
          <input
         type="text" 
          name="invoiceNumber" 
          id="invoiceNumber"
           placeholder="Invoice Number"
           autoComplete="off"
           value={invoiceNumber}
           onChange={(e)=>setInvoiceNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="invoiceDate">Invoice Date</label>
          <input
         type="date" 
          name="invoiceDate" 
          id="invoiceDate"
           placeholder="Invoice Date"
           autoComplete="off"
           value={invoiceDate}
           onChange={(e)=>setInvoiceDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="dueDate">Due Date</label>
          <input
         type="date" 
          name="dueDate" 
          id="dueDate"
           placeholder="Due Date"
           autoComplete="off"
           value={dueDate}
           onChange={(e)=>setDueDate(e.target.value)}
          />
        </div>       
       
         </article>

      
  
        {/* This is our table  */}

        <article>
          <TableForm  
          description={description} 
          setDescription={setDescription}
          quantity={quantity} 
          setQuantity={setQuantity}
          price={price} 
          setPrice={setPrice}
          amount={amount} 
          setAmount={setAmount}
          />
        </article>
      

     
          

        

        <label htmlFor="notes">Additional Notes</label>
        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>




          <button onClick={() =>setShowInvoice(true)} className="bg-blue-500  text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
          </div>

         </>
        )}
       

      </main>
    </>
  );
}

export default App;
