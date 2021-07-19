import React, { useState } from "react";
// import MapContainer from "MapContainer";

function addrSearch() {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }

    return (
        <div>
            <form className="inputForm" onSubmit={handleSubmit}>
                <input placeholder="검색어를 입력 하십시오" onChange={onChange} value={InputText} />
                <button type="submit">검색</button>
            </form>

            <MapContainer searchPlace={Place} />
        </div>
    )
}

export default addrSearch;