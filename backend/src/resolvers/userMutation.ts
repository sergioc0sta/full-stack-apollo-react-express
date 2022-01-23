import User from '../models/user.model';

const UserMutation = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	createUser: async (parent: any, args: any, context: any, info: any) => {
		const {name, surName, country, birthday} = args.user;
		console.log('🚀 ~ file: userMutation.ts ~ line 7 ~ createUser: ~ name', name);
		const userPost = new User({name, surName, country, birthday});
		await userPost.save();
		return userPost;

	}
};

export default UserMutation;