import JuegosContainer from "./containers/JuegosContainer"
import Header from "./layouts/Header"

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        <JuegosContainer />
      </>
    </LocalizationProvider>
  )
}

export default App