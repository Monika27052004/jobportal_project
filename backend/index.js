dotenv.config();
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import chatbotRoute from "./routes/chatbot.route.js"; // Import chatbot route
import { chatbotResponse } from './controllers/chatbot.controller.js';  // Adjust path as necessary
import path from "path";

dotenv.config({});
const app = express();

const _dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS options
const corsOptions = {
    origin: 'https://jobportal-project-6.onrender.com', // Frontend URL
    credentials: true
};
app.use(cors(corsOptions));

// APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/chatbot", chatbotRoute); // Add chatbot route
app.post('/api/chatbot', chatbotResponse);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_,res) =>{
    res.sendFile(path.resolve(_dirname, "frontend","dist","index.html"));
});

// Start the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
//import chatbotRoute from "./routes/chatbot.route.js";

// Add this after other routes
//app.use("/api/v1/chatbot", chatbotRoute);






// Define the POST route for the chatbot
  // This line is essential

