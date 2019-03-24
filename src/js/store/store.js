const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			events: [],
			groups: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			findGroupName: groupID => {
				const store = getStore();

				if (store.groups !== []) {
					const group = store.groups.find(item => {
						return item.ID == groupID;
					});
					console.log(group);
					return group;
				}
			}
		}
	};
};

export default getState;
