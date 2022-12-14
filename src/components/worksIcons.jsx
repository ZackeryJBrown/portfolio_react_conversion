import React from "react";

function HealthstatIcons() {
    return(
    <>
    <div className="rowcontainer nomargin">
    <IconContainer image="includes/js50.webp" text="Javascript" />
    <IconContainer image="includes/sass50.webp" text="Sass" />
    <IconContainer image="includes/html50.webp" text="HTML" />
    <IconContainer image="includes/css50.webp" text="CSS" />
    <IconContainer image="includes/php50.webp" text="PHP" />
    <IconContainer image="includes/sql50.webp" text="SQL" />
    </div>
    </>
    )
}


function CapioIcons() {
  return (
    <>
    <div className="rowcontainer nomargin">
    <IconContainer image="includes/newreact50.webp" text="React" />
    <IconContainer image="includes/js50.webp" text="Javascript" />
    <IconContainer image="includes/sass50.webp" text="Sass" />
    <IconContainer image="includes/html50.webp" text="HTML" />
    <IconContainer image="includes/css50.webp" text="CSS" />
    </div>
    </>
  )
}


export {HealthstatIcons};
export {CapioIcons};


function IconContainer(props){
    return (
        <div className="techcontainer">
            <img src={props.image} alt=" "href="/"/> <a>{props.text}</a>
        </div>
    )
}