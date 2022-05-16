import "./WelcomeBack.css"

function WelcomeBack({name ="valued customer", adjective="nice"}) {
    const pStyle = {
        color: "black",
        fontFamily: "Zen Dots, cursive",//can put css in jsx like this. But can also write in css your choice
    };
    const userName = {
        padding: "2px 4px",
        marginRight: "2px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "4px",
    }
    return (
   <div style={{border: "1px solid #000", textAlign: "center", borderRadius: "4px" }}>
    <p style={pStyle}> 
        Welcome back, <span style={userName}>{adjective} {name}</span>!
    </p>
   </div>
    )
}

export default WelcomeBack;