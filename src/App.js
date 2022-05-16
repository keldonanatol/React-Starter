import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Header from "./Header";
import Footer from "./Footer";
import Greeting from "./Greeting";
import Notifications from "./Notifications";
import GroceryList from "./GroceryList";
import Quote from "./Quote";

function EncouragingWords() {
  return <p>Believe you can and you're halfway there.</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>
}

function App() {
  return (
    <>
      <WelcomeBack name="Joe"/>
      <Quote quote={quote}/>
    </>
  )
//  return (
//  <>
//    <Header />
//    <Greeting language="ch"/>
//    <Greeting />
//    <WelcomeBack name="Joe" adjective="funny"/>
//    <WelcomeBack name="Pabitra" adjective="clever"/>
//    <WelcomeBack />
//    <EncouragingWords />
//    <DailyTip />
//    <Footer /> 
//  </>
//  );
}

const quote = {
  text:"I am gerat believer in luck, and I find the harder I work, teh more I have of it.",
  author:"Thomas Jefferson",
}
const notifications = ["You received a package", "The weather is sunny", "I love you","Sweet heart"];
const groceryItems = ["Bananas", "Apples", "Mangos"];
const groceryList = [
  {quantity: 6, item: "Bananas"},
  {quantity: 3, item: "Apples"},
  {quantity: 10, item: "Oranges"},
]
const todos = [
 {completed: false, description: "Finish the lists & Tables checkpoint"},
 {completed: false, description: "Clean my desk"},
 {completed: false, description: "Make lunch"},
];

//function App() {
//  const rows = todos.map(({completed, description}, index) => (
//    <tr key={index}>
//      <td>{description}</td>
//      <td>{completed ? "Yes" : "No"}</td>
//    </tr>
//  ));
//  return (
//    <table>
//      <thread>
//        <tr>
//          <th>Description</th>
//          <th>Completed?</th>
//        </tr>
//      </thread>
//      <tbody>{rows}</tbody>
//    </table>
//  )

//  const listItems = todos.map((todo, index) => <li key={index}>{todo}</li>);
  
//  return (
//<>
//  <GroceryList items={groceryList}/>
//  <Notifications notifications={notifications} />
//</>
//  )
//}

export default App;
