import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Input = () => {

    const { state, handleFunction } = useContext(GlobalContext);

    const {
        inputLogin, setInputLogin
    } = state

    const {
        handleChange, handleLogin
    } = handleFunction

    return(
        <form >
        <label>Email</label>
        <input onChange={handleChange} value={inputLogin.email} type={'text'} name="email"/><br/>
        <label>password</label>
        <input onChange={handleChange} value={inputLogin.email} type={'password'} name="password"/><br/>

        <input type={'submit'} />
    </form>

    )
}