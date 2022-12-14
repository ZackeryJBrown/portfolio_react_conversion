import React from 'react';

function Emailer() {
    return (
        <div className="columncontainer">
        <div className="bodycontent">
            <h3>Contact Me</h3>
            <a>Zackery J. Brown</a>
            <br />
            <a>Phone: (682)472-8129</a>
            <br></br>
        </div>

        <form className="sidemargin" accept-charset={"utf-8"} action={"index.html"} method="POST">
            <label for="name">Your Name: </label>
            <input className="bgfix" type="text" id="name" placeholder=""></input>
            <br></br> 
            <label for="email">Your Email: </label>
            <input className="bgfix" type="text" id="email" placeholder=""></input> 
            <br></br>
            <label for="message">Your Message: </label>
            <br></br>
            <textarea className="bgfix" rows="10" cols="30" id="message" placeholder="Type your message here, and then click Send Email below."></textarea> 
            <br></br>
            <input className="clickables" type="submit" id="submitbutton" value="Send Email"></input> 
        </form>
        
    </div>

     );
}

export default Emailer;