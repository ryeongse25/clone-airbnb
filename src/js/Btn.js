const Btn = (props) => {
    return (
        <div className="btn">
            <span>{props.name}</span>
            <i className={"bi " + props.class}></i>
        </div>
    )
}

export default Btn;