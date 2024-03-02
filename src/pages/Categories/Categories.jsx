import { useState,useEffect } from "react"



function categories() {
  const [categories,setCategories]=useState([]);
  const getCategories = async ()=>{
    const response =await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
    const data = await response.json();
    setCategories(data.categories)
    console.log(data);

  };
  useEffect(()=>{
    getCategories();
    
  },[]);
  return (
    <> 
    {categories.map(categorie=>
        
        <div className='categorie' key={categorie.id}>
        <h2>{categorie.name}</h2>
        <img src={categorie.image.secure_url}/>

        </div>
      )}
    </>
  
  )
}

export default categories