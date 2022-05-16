import "./GroceryList.css"



function GroceryList ({items}) {
  const rows = items.map(({ quantity, item }, index) => (
    <tr key={index}>
      <td>{quantity}</td>
      <td>{item}</td>
    </tr>
  ));

  return (
    <table>
      <thread>
        <tr>
          <th>Quantity</th>
          <th>Item</th>
        </tr>
      </thread>
      <tbody>{rows}</tbody>
    </table>
  )
//1b  const list = items.map((item, index) => <li key={index}> {item}</li>)
//  return <ul>{list}</ul>; //groceryItems

//1a  return (
//    <ul>
//      {items.map((item) => (
//        <li>{item}</li>
//      ))}
//    </ul>
//  )
}






export default GroceryList

