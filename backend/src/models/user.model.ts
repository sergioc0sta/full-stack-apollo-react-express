import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	surName: {
		type: String,
		require: true
	},
	country: {
		type: String,
		require: true
	},
	birthday: {
		type: Date,
		require: true
	}
});

const User = mongoose.model('user', UserSchema);

export default User;
