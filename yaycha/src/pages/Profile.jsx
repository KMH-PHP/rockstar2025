import { Avatar, Box, Typography, Alert } from "@mui/material";
import { pink } from "@mui/material/colors";

import Item from "../components/Item";
import { useParams } from "react-router-dom";
import { fetchUser } from "../libs/fatcher";
import { useQuery } from "react-query";

export default function Profile() {
    const {id} = useParams;

    const {data, isLoading, isError, error } = useQuery(
        `user/${id}`, async () => fetchUser(id)
    );
    if (isError) {
      return (
        <Box>
          <Alert severity="warning">{error.message}</Alert>
        </Box>
      );
    }
    if (isLoading) {
      return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
    }
    return(
        <Box>
            <Box sx={{ bgcolor: "banner", height: 150, borderRadius: 4 }}></Box>
            <Box
                sx={{
                    mb: 4, 
                    marginTop: "-60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500] }}/>
                <Box>
                    <Typography>Alice</Typography>
                    <Typography sx={{ fontSize: "0.8em", color: "text.fade" }}>
                        Alice's profile bio content here
                    </Typography>
                </Box>
            </Box>

            <Item 
            key={1}
            remove={() => {}}
            item={{
                id: 1,
                content: "A post content from Alice",
                name: "Alice",
            }}
            />
        </Box>
    );
}