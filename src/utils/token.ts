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

export const getToken = () => {
	const headerToken = localStorage.getItem('token');
	return headerToken as string;
};

export const setToken = (token: string) => {
	localStorage.setItem('token', token);
	const newToken = getToken();
	return newToken;
};
