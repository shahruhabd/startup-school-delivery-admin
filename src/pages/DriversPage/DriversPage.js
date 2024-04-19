import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Container,
  CssBaseline
} from '@mui/material';
import { AddCircleOutline as AddIcon } from '@mui/icons-material';

// Массив данных для таблицы в качестве примера
const data = [
  { name: 'Ернар', carNumber: '888KAZ02', carModel: 'Volkswagen Caravelle' }
  // ... добавьте другие данные
];

const DriversPage = () => {
  return (
    <Container>
      <CssBaseline />
      <TableContainer component={Paper} sx={{ marginTop: 8 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Номер машины</TableCell>
              <TableCell>Машина</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="add driver">
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.carNumber}</TableCell>
                <TableCell>{row.carModel}</TableCell>
                <TableCell align="right">
                  {/* Иконки действий с водителями, например редактирование или удаление */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DriversPage;
