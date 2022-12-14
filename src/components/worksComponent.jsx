import React from "react";

function HealthstatLink() {
    return(  
    <Worklink pageUrl='healthstat/index.html' image={'../includes/healthstatscreen.webp'} text="Healthstat"/>
    )
};


function CapioLink(){
    return(
        <Worklink pageUrl="/capio/index.html" image={'../includes/capio.webp'} text="Capio Marketing" />
    )
}



export {HealthstatLink};
export {CapioLink};





function Worklink(props) {
    return(
        <>
        <a href={props.pageUrl}>
            <img className='works clickables' src={props.image} alt={props.text}/></a>
        </>
    );
}
