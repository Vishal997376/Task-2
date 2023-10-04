const express= require("express");
const app= express();
 const userRoutes = require("/routes/user");
const dotenv = require("dotenv");
// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use(express.json());
// app.use(cookieParser());
// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// );
// database.connect();
 app.use("/api/v1/auth", userRoutes);
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);

});