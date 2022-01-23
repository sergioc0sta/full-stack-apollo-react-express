import React from "react";

const Form = () => {
    const cenas = (e) =>{
        console.log("🚀 ~ file: Form.tsx ~ line 7 ~ cenas ~ e", e.target.value)
        
    }
    return(
        <div>
            <form onChange={cenas}>
                <label >Name:</label>
                <input type="text" id="fname" name="fname" />
                <label >Surame:</label>
                <input type="text" id="fname" name="fname" />
                <label >Country:</label>
                <select id="cars" name="cars">
                    <option value="Portugal">Portugal</option>
                    <option value="Franca">Franca</option>
                    <option value="Espanha">Espanha</option>
                    <option value="Malta">Malta</option>
                </select>
                <label >Birthday:</label>
                <input type="date" id="birthdaytime" name="birthdaytime" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form