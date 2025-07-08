export default function Item(props) {
  return (
    <div
      className="grid place-items-center"
      onClick={() => props.onSelect && props.onSelect()}
    >
      <div className="grid place-items-center bg-gray-800 m-5 p-2 w-150 rounded font-bold cursor-pointer hover:bg-gray-700 transition">
        <li className="list-none grid place-items-center">
          <ul className="text-3xl font-serif">{props.iName}</ul>
          <ul>Quantity: {props.iQuantity}</ul>
          <ul>Category: {props.iCategory}</ul>
        </li>
      </div>
    </div>
  );
}
