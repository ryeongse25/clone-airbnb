import React, {useEffect, useRef, useState} from 'react';

const Menu = (props) => {
    const [clicked, setClicked] = useState("");

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

    const onMouseLeave = (title) => {
        if (clicked != title) {
            div.current.style.borderBottom = "2px solid transparent";
            div.current.style.opacity = "0.5";
        }
    }

    const changeColor = (title) => {
        let divs = document.querySelectorAll(".item");
        
        for (let i=0; i<divs.length; i++) {
            divs[i].style.borderBottom = "2px solid transparent";
            divs[i].style.opacity = "0.5";
        }

        setClicked(title);
        div.current.style.opacity = "1";
        div.current.style.borderBottom = "2px solid lightgray";
    }

    return (
        <div className="item" ref={div} onClick={()=>{ props.function( props.title ); changeColor( props.title ) }} onMouseOver={onMouseOver} onMouseLeave={() => {onMouseLeave(props.title)}}>
            <img src={"./img/type" + props.img + ".jpeg"} />
            <p>{props.title}</p>
        </div>
    )
}

export default Menu;