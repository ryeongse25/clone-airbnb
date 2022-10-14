import React, {useEffect, useRef} from 'react';

const Menu = (props) => {

    useEffect(() => {
        let item = document.querySelectorAll(".item");
        for (let i = 0; i<item.length; i++) {
            item[i].style.opacity = "0.6";
        }
    })


    const div = useRef();

    const onMouseOver = () => {
        div.current.style.cursor = "pointer";
        div.current.style.borderBottom = "2px solid lightgray";
        div.current.style.opacity = "1";
    }

    const onMouseLeave = () => {
        div.current.style.borderBottom = "2px solid transparent";
        div.current.style.opacity = "0.6";
    }
    
   const onClick = () => {
        console.log("clicked");
   }

    return (
        <div className="item" ref={div} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={onClick}>
            <img src={"./img/type" + props.img + ".jpeg"} />
            <p>{props.title}</p>
        </div>
    )
}

export default Menu;