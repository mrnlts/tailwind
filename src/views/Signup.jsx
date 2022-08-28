import React, { useState } from "react";

export default function Signup() {
    const [userData, setUserData] = useState({ email: "", password: "", fullName: "" });
    const [validValues, setValidValues] = useState({ email: null, password: null, fullName: null });

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; // 8 characters long, 1 number and 1 uppercase letter
    const nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        });

        if (name === "email") {
            
            setValidValues(prev => {
                return {
                    ...prev,
                    email: emailRegex.test(value)
                }
            })
        } else if (name === "password") {
            setValidValues(prev => {
                return {
                    ...prev,
                    password: passwordRegex.test(value)
                }
            })
        } else {
            setValidValues(prev => {
                return {
                    ...prev,
                    fullName: nameRegex.test(value)
                }
            })

            console.log("here", validValues)
        }
    }

    const inputStyle = "mb-3 w-full rounded-lg border shadow-xl h-12 pl-4 ";
    const validStyle = "text-green-500 border-green-500";
    const invalidStyle = "text-red-500 border-red-500";

    return (
        <div className="h-screen">
            <form className="h-96 flex flex-col align-center justify-around mt-4">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    placeholder={"example@gmail.com"}
                    className={inputStyle + (validValues.email === true ? validStyle : validValues.email === false ? invalidStyle : "")}
                    onChange={handleChange}
                />
                
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    placeholder={"***********"}
                    className={inputStyle + (validValues.password === true ? validStyle : validValues.password === false ? invalidStyle : "")}
                    onChange={handleChange}
                />
                
                <label>Full name</label>
                <input
                    type="text"
                    name="fullName"
                    value={userData.fullName}
                    placeholder={"John Doe"}
                    className={inputStyle + (validValues.fullName === true ? validStyle : validValues.fullName === false ? invalidStyle : "")}
                    onChange={handleChange}
                />
                

                <div className="w-full text-center">
                    <button className={inputStyle + "bg-red-400 border-red-400 text-white"}>Signup</button>
                </div>
            </form>
        </div>
    )
}