import React ,{useState} from 'react'

function App() {
    const dummyData = [
        {
            id: 1,
            name: "ABC",
            email: "abc@gmail.com",
            password: "12"
        },
        {
            id: 2,
            name: "DEF",
            email: "def@gmail.com",
            password: "1234"
        },
        {
            id: 3,
            name: "GHI",
            email: "ghi@gmail.com",
            password: "123456"
        }
    ];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [noUser, setNoUser] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        for(const data of dummyData){
            if(data.email === email){
                if(data.password === password){
                    setTimeout(() => console.log(data), 3000);
                    setError(false);
                    setNoUser(false);
                    return;
                }
                else{
                    setError(true);
                    setTimeout(() => console.log('wrong password'), 3000);
                    return;
                }
            }
        }

        setNoUser(true);
    }

  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit}>
            <input type="email" name="" value={email} id="input-email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="password" value={password} id='input-password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <input type="submit" id='submit-form-btn' value="Submit" />
        </form>
        <p id="password-error">{error && "Password Incorrect"}</p>
        <p id="user-error">{noUser && "User not found"}</p>
    </div>
  )
}

export default App
