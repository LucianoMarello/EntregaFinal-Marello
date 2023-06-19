import { Box, Grid } from "@mui/material"
import "./ProbandoMui.css"

export const ProbandoMui = () => {
  return (
    <Box>
        <h1>Material UI</h1>
        {/* los grid container son un sistema de grillas de 12 columnas */}
        <Grid container> 
            <Grid item xs={12} sm={6} md={4}>
                <h2 style={{backgroundColor: "red"}} className="cajas">Caja uno</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h2 style={{backgroundColor: "blue"}} className="cajas">Caja dos</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h2 style={{backgroundColor: "yellow"}} className="cajas">Caja tres</h2>
            </Grid>
        </Grid>
    </Box>
  )
}
