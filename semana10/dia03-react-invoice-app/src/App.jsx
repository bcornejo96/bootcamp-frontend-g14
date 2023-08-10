import { useEffect, useState } from "react"
import { fetchInvoice } from "./services/invoice"
import Header from "../components/Header"
import InvoicesList from "../components/invoices/invoicesList"


function App() {

  const [invoices, setInvoices] = useState([])
 
  useEffect(() => {
    

    // fetchInvoice().then((data) => setInvoices(data))
    fetchInvoice().then(setInvoices)


  },[] )

  return (
    <>

    <Header />

    <InvoicesList invoices={invoices} />

    
   
    </>
  )
}

export default App
