import formatDate from "./calendar-date.js"


function Complex(props){
    const A = formatDate(props.date)
    return(
        <div className="comment">
            <div className="userInfo">
                <img src={props.author.avatarUrl} alt={props.author.name} className="Avatar" />
            </div>
            <div className="userInfo-name">
                {props.author.name}
            </div>
            <div className="text">
                {props.text}
            </div>
            <div className="date">
                {A}
            </div>
        </div>
    )
}
export default Complex