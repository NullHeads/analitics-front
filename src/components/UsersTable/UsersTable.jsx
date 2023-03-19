
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { getUser, getUsers } from '../../api/api';

const criterions = {
  id:"id", 
  firstName: "Имя", 
  lastName: "Фамилия",
  jobTitle: "Должность"
}

export const UsersTable = ({setUser}) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(resEmployees => setUsers(resEmployees))
  }, [])

  const getUserHandler = async (userId) => {
    const {data} = await getUser(userId)
    setUser(data)
  }

  return (
      <Table sx={{ minWidth: 650, maxWidth: 1280 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           {Object.values(criterions).map((criterion) => (
              <TableCell align="center" key={criterion}>{criterion}</TableCell>
           ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id} onClick={() => getUserHandler(user.id)}>
              {Object.keys(criterions).map(criterion => (
                <TableCell align="center" key={criterion}>{user[criterion]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
