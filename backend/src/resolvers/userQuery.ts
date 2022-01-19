import User from '../models/user.model';

const UserQuery = {
	getAllUsers: async () => {
		const users = await User.find();
		return users;
	},
};

export default UserQuery;
