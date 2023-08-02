
import React, { useState } from 'react'
import { profanity } from '@2toad/profanity';


const Feedback = () => {


    const [feedback, setFeedback] = useState('');

    
    const handleChange = event => {
        setFeedback(event.target.value)
    }

    const handleClick = () => {
        if (profanity.exists(feedback)) {
            alert('Please enter an appropriate message')
        } else {
            alert('Thank you for sending your feedback! Our administrators will receive it.')
        }
    }

    
    
    return (
        <div className='feedback'>
            <p>Welcome to the feedback page. Please enter recommendations, comments, or critiques into the text box below and press send. Thank you for your time and we hope you had a good experience using the site.</p>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Send Feedback</button>
        </div>
    )
}

export default Feedback
