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
			events: [
				{
					ID: 36,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Lorem Event",
					meta_keys: {
						day: "20180428",
						time: "07:00:00",
						_meetup: "9",
						_rsvpNo: ["robert", "jjtime", "username2"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					ID: 38,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Another Event",
					meta_keys: {
						day: "20190828",
						time: "09:00:00",
						_meetup: "9",
						_rsvpNo: [],
						_rsvpYes: []
					}
				},
				{
					ID: 49,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "This is a party",
					meta_keys: {
						day: "20181128",
						time: "05:00:00",
						_meetup: "10",
						_rsvpNo: [],
						_rsvpYes: []
					}
				}
			],
			groups: [
				{
					ID: 9,
					post_content: "The nicest Meetup ever",
					post_title: "Tech Enthusiasts"
				},
				{
					ID: 10,
					post_content: "The geeks' Meetup",
					post_title: "Let's code"
				},
				{
					ID: 11,
					post_content: "UFO meeting group",
					post_title: "Aliens, aliens everywhere"
				}
			]
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
					return group;
				}
			}
		}
	};
};

export default getState;
