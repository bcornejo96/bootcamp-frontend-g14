const InvoicesList = ({ invoices }) => {
    return (
      <main className="w-[740px] m-auto flex flex-col gap-5">
        {/* {JSON.stringify(invoices)} */}
        {
          invoices.map(
            invoice => {
              return (
                <article 
                key={invoice.id}
                className="bg-slate-700 px-4 py-8 rounded-lg grid grid-cols-6 text-white text-xl">
                  <span>{invoice.bill.to.client.name}</span>
                </article>
              )
            }
          )
        }
      </main>
    )
  }
  
  export default InvoicesList