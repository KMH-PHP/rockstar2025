import { createContext, useContext, useMemo, useState } from "react"
import {

  CssBaseline,
  ThemeProvider,
  createTheme,

} from "@mui/material";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Template from "./Template";

import { deepPurple, grey } from "@mui/material/colors";
import Home from "./pages/Home";
import  Login  from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";
import Likes from "./pages/Likes";

import { QueryClient, QueryClientProvider} from "react-query";

export const queryClient = new QueryClient();


 const AppContext = createContext();

 export function useApp(){
  return useContext(AppContext);
 }

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ]
  }
 ])

export default function ThemedApp(){
    const [showDrawer, setShowDrawer] = useState(false);
    const [globalMsg, setGlobalMsg] = useState(false); 
    const [showForm, setShowForm] = useState(false);
    const [auth, setAuth] = useState(null);
    const [mode, setMode] = useState("dark");

    const theme = useMemo(() => {
      return createTheme({
      palette: { mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        },
       },
    });
},([mode]));

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          showDrawer,
          setShowDrawer,
          auth,
          setAuth,
          globalMsg,
          setGlobalMsg,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
 