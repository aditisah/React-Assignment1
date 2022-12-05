import Button from "./Button";

function SearchButton(props){
return(
    <div>
        <Button btnText={props.text}></Button>
    </div>
)
}

export default SearchButton;