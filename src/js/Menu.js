import React, {useRef} from 'react';

const Menu = (props) => {
    const div = useRef();

    const onMouseOver = () => {
        div.current.style.cursor = "pointer";
        div.current.style.borderBottom = "2px solid lightgray";
        div.current.style.opacity = "1";
    }

    const onMouseLeave = () => {
        div.current.style.borderBottom = "2px solid transparent";
        div.current.style.opacity = "0.9";
    }

    return (
        <div ref={div} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <img src={"./img/type" + props.img + ".jpeg"} />
            <p>{props.title}</p>
        </div>
    )
}

export default Menu;