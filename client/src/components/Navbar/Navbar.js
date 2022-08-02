import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import { Search } from '@mui/icons-material'

import './Navbar.css'

const Navbar = () => {
  return (

    <div className="navbar">
      <div className="leftBox">
        <h2>Travel Guide</h2>
      </div>

      <div className="rightBox">
        <h2>Explore new places</h2>
        {/* <Autocomplete> */}
        <div className="searchBox">
          <Search />
          <input 
            type="text" 
            placeholder='Search...' 
          />
        </div>
        {/* </Autocomplete> */}

      </div>
    </div>

  )
}

export default Navbar