import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
  tablePagination: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2)
  }
}));


const createData = (id, date, name, shipTo, paymentMethod, amount) => {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  createData(5, '16 Mar, 2019', 'Elvis Presleyss', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(6, '16 Mar, 2019', 'Paul McCartneyss', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(7, '16 Mar, 2019', 'Tom Scholzss', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(8, '16 Mar, 2019', 'Michael Jacksonss', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(9, '15 Mar, 2019', 'Bruce Springsteenss', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  createData(10, '16 Mar, 2019', 'Elvis Presleysss', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(11, '16 Mar, 2019', 'Paul McCartneysss', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(12, '16 Mar, 2019', 'Tom Scholzsss', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(13, '16 Mar, 2019', 'Michael Jacksonsss', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(14, '15 Mar, 2019', 'Bruce Springsteensss', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];


const Orders = () => {

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(8);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const classes = useStyles();



  const handleChangeRowsPerPage = ({ target: { value } }) => {
    setRowsPerPage(parseInt(value, 10));
    setPage(0);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Ship To</TableCell>
          <TableCell>Payment Method</TableCell>
          <TableCell align="right">Sale Amount </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter className={classes.tablePagination}>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[2, 5, 8, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </Table>
  )
}


export default Orders;