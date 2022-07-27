

export const formatPrice = (number) => {

return Intl.NumberFormat("en-US",{
  style:"currency",
  currency:"USD",
 }).format(number/100)

}



export const getUniqueValues = (data,type) => {  
  let uniqe = data.map((item)=>item[type])
  if(type === "colors") {  
   
    uniqe = uniqe.flat()
  }

  return ["all", ...new Set(uniqe)]
 
}

