import { Alert, Box, Button, TextField, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";
import { useRef, useState } from "react";
import { postLogin } from "../libs/fatcher";
import { useMutation } from "react-query";



const Login = () => {
    const [error, setError ] = useState(null);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    const { setAuth } = useApp();

    const handleSubmit = () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if(!username || !password){
            setError("username and password required");
            return false;
        }

        login.mutate({ username, password });
    }

    const login = useMutation(
        async ({username, password}) => postLogin({ username, password }, {
            onError: async() => {
                setError("Incorrect username or password");
            },
            onSuccess: async result => {
                setAuth(result.res);
                localStorage.setItem("token", result.token);
                navigate("/");
            }
        })
    )

  return (
    <Box>
        <Typography variant="h3">Login</Typography>

       {error && <Alert severity="warning" sx={{ mt: 2 }}>{error}</Alert>}

        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit();
            setAuth(true);
            navigate("/");
        }}>
            <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, }}
            >
                <TextField inputRef={usernameRef} placeholder="Username" fullWidth />
                <TextField inputRef={passwordRef} type="password" placeholder="Password"/>
                <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Box>
        </form>
    </Box>
  )
}

export default Login