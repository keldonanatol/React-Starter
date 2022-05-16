import "./Notifications.css"

function Notifications({notifications}) {
//    if (notifications.length > 0) {
//        return <p>You have {notifications.length} notifications today!</p>
//    }
//        return null
return (
    notifications.length > 0 && (
        <p>You have {notifications.length} notifications today!</p>
    )
  );
}




export default Notifications