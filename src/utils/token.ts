export const decode = (token: string) => {
	return decodeURIComponent(
		atob(token)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);
};

export const authHeader = () => {
	const headerToken = localStorage.getItem('token');
	return headerToken;
};
