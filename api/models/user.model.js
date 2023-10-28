import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		avatar: {
			type: String,
			default:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ablvNoAMTxtDwRDwbeUyju4uubIZwb8qUh5EwsETFVaB4FglswUWy9xbgPuX4fLLhn8&usqp=CAU",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
