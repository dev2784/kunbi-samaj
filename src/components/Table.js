import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Title from './Title';



export default function TableComponent({header, rows, title}) {
  return (
    <React.Fragment>
      <Title>{title.toUpperCase()}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {
              header?.map((item,index) => <TableCell key={index}>{item.name}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((item,index) => (
            <TableRow key={index}>
              {
                header?.map((data,subIndex) => <TableCell key={subIndex}>{data.name === 'Image' ? <Avatar
                alt={item.name}
                src={item[data.data]}
                sx={{ width: 24, height: 24 }}
              /> : item[data.data]}</TableCell>)
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}