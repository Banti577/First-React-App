import React, { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)
    return (


        <>
     
            <div className="container">
                <p>you clicked {count} times</p>
                <button onClick={() => {
                    
                    
                    setCount(count+ 1)  }
                    
                    }>Click me!</button>
            </div>
        </>



    )
}

export default Counter