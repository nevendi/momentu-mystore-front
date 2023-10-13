import {useState} from "react";
import {useAuth} from "../../provider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

export const RegisterForm = () => {
    const {setToken} = useAuth();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    async function handleOnSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/api/v1/register', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(userInfo) // body data type must match "Content-Type" header
        });
        // const data = await response.json();
        navigate("/login", { replace: true });
    }

    function handleOnChange(event) {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    return (
        <div style={{
            width: '500px',
            height: '500px',
            display: 'flex',
            borderRadius: '8px',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
            justifyContent: 'center',
            alignContent: 'space-between'
        }}>
            <form onSubmit={handleOnSubmit}>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleOnChange}/>
                </section>
                <section>
                    <label htmlFor="paternalName">Paternal Name</label>
                    <input type="text" id="paternalName" name="paternalName" onChange={handleOnChange}/>
                </section>
                <section>
                    <label htmlFor="maternalName">Maternal Name</label>
                    <input type="text" id="maternalName" name="maternalName" onChange={handleOnChange}/>
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleOnChange}/>
                </section>
                <section>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleOnChange}/>
                </section>
                <section>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleOnChange}/>
                </section>
                <section>
                    <button onSubmit={handleOnSubmit}>Login</button>
                </section>
            </form>
        </div>
    )
}