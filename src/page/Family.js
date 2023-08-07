import React from 'react'
import Familyitem from './Familyitem'

function Family({data}) {
    return (
      <>
        <div class="product-col">
            <h2>토이스토리 가족들을 소개합니다!</h2>
            <div class="product-a">
                {
  
                    data.map((item,k)=>(
                        <Familyitem key={item.id} item={item}/>
                    ))
                }
                
            </div>
        </div>
         
      </>
    )
  }

export default Family;