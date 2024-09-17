
import { Box, Typography } from "@mui/material";
import FakeProgress from "./FakeProgress";




const InComingPage = () => {

    

    return (
      

        <div className="bg-gray-100 min-h-screen w-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center flex-grow">
        <div className="flex flex-col justify-center items-center gap-4 w-full px-4">
          
          
          <Typography variant="h1" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}>You are PQC ready?</Typography>
          <p className="text-lg sm:text-2xl font-semibold text-center">
            <Typography variant="h3" gutterBottom sx={{ display: 'flex', marginBottom: 3, marginTop: 2, padding: 1 }}> 🚧 Page under construction, please wait... </Typography>
          </p>
        </div>
        <Box sx={{ marginBottom: 10 }} />
      </div>
      <div className="w-full flex justify-center mb-10">
        <FakeProgress></FakeProgress>
      </div>
      <Box sx={{ marginBottom: 30 }} />
    </div>
    


    );

};

export default InComingPage