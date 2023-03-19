import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomBar from '../CustomBar.js';
import "./UserProfile.css"



export const UserProfile = ({user}) => {
  const {analyticsData} = user
  return (
    <div className="user-profile">
      <Card sx={{ minWidth: 275, maxHeight: 250 }}>
        <CardContent>
        <Typography >
            id: {user.id}
          </Typography>
          <Typography >
            Имя: {user.firstName}
          </Typography>
          <Typography >
            Фамилия: {user.lastName}
          </Typography>
          <Typography >
            Должность: {user.jobTitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} >
            Вероятность выгорания: {user.burnoutPercent}%
          </Typography>
        </CardContent>
      </Card>
      {!!analyticsData && !!Object.entries(analyticsData).length && (
        <CustomBar analyticsData={analyticsData}/>
      )}
    </div>
  );
}