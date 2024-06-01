// MEyveleri oluşturup listelediğim sayfa

import { TableWrapperTypes, FruitOrVeggies } from "./types"

export const FruitsTable = ({ inputValue, isThere }: TableWrapperTypes) => {
    const fruits: FruitOrVeggies = [
        { id: 1, name: "Armut", price: "12", category: "Fruit", stock: true },
        { id: 2, name: "Muz", price: "9", category: "Fruit", stock: true },
        { id: 3, name: "Avakado", price: "50", category: "Fruit", stock: false },
        { id: 4, name: "Ejderha Meyvesi", price: "20", category: "Fruit", stock: false },
    ]

    return (
        <div >
            <ul className="fruit">
                <h2 style={{ textAlign: "center" }}>FRUITS</h2>
                {fruits.filter((fruit) => {
                    const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                    const matchesStock = !isThere || fruit.stock;
                    return matchesName && matchesStock;
                }).map((fruit) => (
                    <li key={fruit.id}>
                        {`${fruit.name} - ${fruit.price} ₺`}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}