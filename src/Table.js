import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function CustomTable(props) {
    var tableProps = props.tableProps
    return (
        <TableContainer id="tableDiv" className="table-cont" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{background: 'antiquewhite'}}>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Capital</TableCell>
                <TableCell align="right">Region</TableCell>
                <TableCell align="right">Languages</TableCell>
                <TableCell align="right">Timezones</TableCell>
                <TableCell align="right">Currencies</TableCell>
                <TableCell align="right">Flag</TableCell>
                <TableCell align="right">Population</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {tableProps.map((val) => (
                <TableRow
                key={val.area}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {val.name.common}
                </TableCell>
                <TableCell align="right">{val.capital}</TableCell>
                <TableCell align="right">{val.region}</TableCell>
                <TableCell align="right">{val.languages ? Object.values(val.languages).map((lang)=>(
                    '['+lang+']'
                )):''}</TableCell>
                <TableCell align="right">{'['+val.timezones+']'}</TableCell>
                <TableCell align="right">{val.currencies ? Object.values(val.currencies).map((curr)=>(
                    '['+curr.name+'-'+curr.symbol+']'
                )):''}</TableCell>
                <TableCell align="right">{val.flag}</TableCell>
                <TableCell align="right">{val.population}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
