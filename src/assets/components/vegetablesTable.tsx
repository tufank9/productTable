// Sebzeleri oluşturup listelediğim sayfa.

import { FruitOrVeggy, TableWrapperTypes } from "./types"
import './table.css'

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "Patlican", price: "15", category: "Veggie", stock: false },
        { id: 2, name: "Patates", price: "9", category: "Veggie", stock: true },
        { id: 3, name: "Soğan", price: "7", category: "Veggie", stock: false },
        { id: 4, name: "Domates", price: "12", category: "Veggie", stock: true },
    ]

    return (
        <div>
            <ul className="veggie">
                <h2>VEGITABLES</h2>
                {veggies.filter((veggie) => {
                    const input = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                    const checkbox = !isThere || veggie.stock;
                    return input && checkbox;
                }).map((veggie) => {
                    if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                        return (
                            <li key={veggie.id}>{`
                                ${veggie.name}- ${veggie.price}₺
                                `
                            }
                            </li>
                        )
                })
                }
            </ul>
        </div>
    )
}