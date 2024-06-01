import { InputAreaProps } from "./types"
import './table.css'
export const InputArea = ({ inputValue, setInputValue, isThere, setIsThere }: InputAreaProps) => {

    return (
        <div className="container">
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <br />
            <div>
                <input type="checkbox" checked={isThere} onChange={(e) => setIsThere(e.target.checked)} />
                <label htmlFor="">Only show products in stock</label>
            </div>
        </div>
    )
}