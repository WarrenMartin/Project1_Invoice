import { useEffect } from "react"

export default function TableForm({description,setDescription,quantity,setQuantity,price,setPrice,amount,setAmount
}){

    useEffect(() => {
        const calculateAmount=(amount) => {
            setAmount(quantity*price)
        }
        calculateAmount(amount)
    },  [amount,price,quantity,setAmount])

    return (
        <>

        <div className="flex flex-col md:mt-16">
        <label htmlFor="description">Item description</label>
        <input type="text" 
        name="description"
         id="description"
        placeholder="Item description" 
        value={description} onChange={(e) =>setDescription(e.target.value)}
        />
        </div>

        <div className="md:grid grid-cols-3 gap-10 ">
            
            <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input 
            type="text" 
            name="quantity"
            id="quantity"
            placeholder="Quantity" 
            value={quantity} 
            onChange={(e) =>setQuantity(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input type="text" 
            name="price"
            id="price"
            placeholder="Price" 
            value={price} 
            onChange={(e) =>setPrice(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
            
            </div>
        </div>


        </>
    )
}