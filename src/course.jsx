import IT from './assets/IT.jpg';       
function Course(props){
    return(
        <div className = "card">
            <img src={props.image} alt="IT Course"/>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        </div>
    );
}

export default Course
