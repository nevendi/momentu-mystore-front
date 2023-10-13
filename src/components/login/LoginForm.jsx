import {useState} from "react";
import {useAuth} from "../../provider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const {setToken} = useAuth();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    async function handleOnSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/api/v1/login', {
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
            body: JSON.stringify(credentials) // body data type must match "Content-Type" header
        });
        const data = await response.json();
        setToken(data.access_token);
        navigate("/products", { replace: true });
    }

    function handleOnChange(event) {
        setCredentials({...credentials, [event.target.name]: event.target.value})
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
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleOnChange}/>
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