import React from 'react'

function List() {
  return (
    <article>
        <h2>List</h2>
        <p className='total'>총 잔액 : <code>3,500</code></p>
        <ul>
            <li className="order">
                <div>8/19</div>
                <div>스타벅스 강남역점</div>
                <div>5,200</div>
            </li>
            <li className="order">
                <div>8/21</div>
                <div>투썸플레이스 강남점</div>
                <div>4,800</div>
            </li>
        </ul>
    </article>
  )
}

export default List