import React, { useEffect, useState } from 'react'
import './Weather.css';
import Snackbar from "@mui/material/Snackbar";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const API_KEY=''
const API_URL=`https://api.openweathermap.org/data/2.5/forecast?q=`
function Weather() {
    const [city,setCity]=useState('')
    const [humidity,sethumidity]=useState('')
    const [pressure,setpressure]=useState('')
    const [description,setDescription]=useState('')
    const [temp,setTemp]=useState('')
    const [errors,setErrors]=useState('')
    const [isSnackbarOpen,setisSnackbarOpen]=useState(true)



    const [isOpen, setIsOpen] = useState(false);


    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    

  return (
    <>
        <h1>WEATHER API</h1>
    <div className='card'>
        <div className="field">
            <div className="label">Enter City</div>
            <input type="text" placeholder='Chennai...' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
        </div>
        {/* <div className="check">{city}</div> */}
        <div className="submit"><button onClick={()=>{weatherApi(city)}}>Know The Weather</button></div>
        <div>{temp&&humidity&&pressure&&description?Results():<div className="label">{errors}</div>}</div>
    </div>
    <Snackbar
      open={isSnackbarOpen}
      message="This is a snackbar!"
      autoHideDuration={3000}
    />;
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <p>This is dialog content.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
    <AppBar position="static">
<Toolbar>
    <Typography variant="h6">My App</Typography>
  </Toolbar>
</AppBar>


</>
  )

  async function weatherApi(city){
    try{
        const resp=await  fetch(`${API_URL}${city}&appid=${API_KEY}`)
        const data = await resp.json()
        const weatherList=data.list[0]
        const weatherListMain=data.list[0].main
        setDescription(weatherList.weather[0].description)
        sethumidity(weatherListMain.humidity)
        setpressure(weatherListMain.pressure)
        const kelvin = weatherListMain.temp;
        const celsius = kelvin - 273.15;
        setTemp(parseInt(celsius))
        console.log('Parsed Data:',data);
    }catch(error){        
        reset()

        if(!city){
            setErrors('Please Fill City Name')
        }else{
            setErrors('Please Enter Proper City Name')
        }
    }

}
function Results() {
    return (
        <div className="results">
            <div className="description">
                <label htmlFor="">Temperature:</label>
                <span className="resultAns">{temp}{temp ? '°C' : ''}</span>
            </div>
            <div className="description">
                <label htmlFor="">Description:</label>
                <span className="resultAns">{description}</span>
            </div>
            <div className="humidity">
                <label htmlFor="">Humidity:</label>
                <span className="resultAns">{humidity}{humidity ? '%' : ''}</span>
            </div>
            <div className="pressure">
                <label htmlFor="">Pressure:</label>
                <span className="resultAns">{pressure} {pressure ? 'atm' : ''}</span>
            </div>
        </div>
    );
}
function reset(){
    setCity('');
    sethumidity('');
    setpressure('');
    setDescription('');
    setTemp('');
    setErrors('');
}
}

export default Weather