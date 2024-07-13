const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
		},
		actions: {

			login: async (email, password) => {

				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					})
			
					if (resp.status == 200) {
						const data = await resp.json()
						console.log(data)
						setStore({ user: data.user })
						localStorage.setItem("token", data.access_token)
						// don't forget to return something, that is how the async resolves
						return true;
					} else {
						console.log("usuario erroneo") //201
						return false
					}

				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			register: async (email, password,name,lastname) => {

				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password,
							name: name,
							lastname: lastname
						})
					})
			
					if (resp.status == 200) {
						const data = await resp.json()
						console.log(data)
						// setStore({ user: data.user })
						// localStorage.setItem("token", data.access_token)
						// don't forget to return something, that is how the async resolves
						return true;
					} else {
						console.log("usuario erroneo") //201
						return false
					}

				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			logout:() => {
				localStorage.removeItem("token")
				return true
			}

		}
	};
};

export default getState;
