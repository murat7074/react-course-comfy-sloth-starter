import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({reviews,stars}) => {

  // 5 yıldızımızın olucağı array oluşturduk
    const tempStars = Array.from({length:5},(_,index)=>{  

      const number = index + 0.5  // 0.5, 1.5 vb sayılar da yarım yıldız için gerekli
      return <span key={index}>
             
          {stars >= index + 1 ? <BsStarFill/> : stars >= number ? <BsStarHalf/> : <BsStar/>} 
        </span>
    }) 

  return <Wrapper>
    <div className="stars"> {tempStars}




        {/* <span>    NOT: MANUEL olarak yıldız yerleştirme
          {stars >=1 ? <BsStarFill/> : stars >= 0.5 ? <BsStarHalf/> : <BsStar/>} tam yıldız, yarım yıldız veya boş yıldız olucak
        </span>
         <span>
          {stars >=2 ? <BsStarFill/> : stars >= 1.5 ? <BsStarHalf/> : <BsStar/>} 
        </span>
          <span>
          {stars >=3 ? <BsStarFill/> : stars >= 2.5 ? <BsStarHalf/> : <BsStar/>} 
        </span>
          <span>
          {stars >=4 ? <BsStarFill/> : stars >= 3.5 ? <BsStarHalf/> : <BsStar/>}
        </span>
          <span>
          {stars === 5 ? <BsStarFill/> : stars >= 4.5 ? <BsStarHalf/> : <BsStar/>} 
        </span> */}
        
     </div>
    <p className='reviews'>({reviews} customer reviews)</p>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
