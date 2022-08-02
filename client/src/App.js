import { Grid } from '@mui/material'

import Navbar from "./components/Navbar/Navbar"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
}

export default App