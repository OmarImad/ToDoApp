import './Styles.css'

function Button(props) {
        return (
            <button
                className={props.isPurble ? 
                    "btn backgrounded-button" 
                    : "btn"}

                onClick={props.handleClick}
            >

                {props.text}
            </button>
        )
    
}

export default Button