import Button from './Button'

function LuckyButton(props){
return(
    <div>
        <Button btnText={props.text}></Button>
    </div>
)
}

export default LuckyButton;