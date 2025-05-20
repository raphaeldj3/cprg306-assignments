import Item from "./item";
import ItemList from "./item-list";

export default function ShoppingListPage() {
    return(
        <main className="grid place-items-center">
            <h1 className="m-5 text-4xl text-serif font-extrabold">Shopping List</h1>
            <ItemList />
        </main>
    );
}