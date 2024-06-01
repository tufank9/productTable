import { useState } from "react"
import { InputArea } from "./inputArea"
import { TableWrapper } from "./tableWrapper"
import './table.css'

export const AppWrapper = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [isThere, setIsThere] = useState(false)

    return (
        <div className="container-table">
            <InputArea
                inputValue={inputValue}
                setInputValue={setInputValue}
                isThere={isThere}
                setIsThere={setIsThere}
            />
            <TableWrapper
                inputValue={inputValue}
                isThere={isThere}
            />
        </div>


    )
}