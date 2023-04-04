import React, { useEffect, useState } from "react";
import NavBar from "../../component/NavBar";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../../styles/Home.css";
import axios from "axios";
import moment from "moment";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Classement() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/ranking/playerWithMostCoins")
    .then((response) => {
      setData(response.data);
    }).catch((error) => console.error(error));
  }, []);
  return (
    <>
      <NavBar />
      <h2>CLASSEMENT</h2>
      <br />
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableRow sx={{ backgroundColor: "#FBCF0A" }}>
              <StyledTableCell align="center">N°</StyledTableCell>
              <StyledTableCell align="center">name</StyledTableCell>
              <StyledTableCell align="center">Coins</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
            </TableRow>
            <TableBody>
              {data.map((user, index) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell className="td" align="center">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="center">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="center">
                    {user.coins}
                  </StyledTableCell>
                  <StyledTableCell className="td" align="center">
                    {moment(user.created_at).format("DD/MM/YYYY HH:mm")}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}


