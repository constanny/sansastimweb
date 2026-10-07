import JuegosContainer from "./containers/JuegosContainer"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <JuegosContainer />
      </>
    </LocalizationProvider>
  )
}

export default App