import  './common.css'
function Button(props){
    return (
        <div>
            <button className="btn">{props.btnText}</button>
        </div>
    )
}

export default Button;