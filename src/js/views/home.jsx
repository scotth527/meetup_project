import React from "react";
import EventCard from "../component/eventCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row bg-secondary ">
					<div className="col-6 mx-auto text-center text-light pt-5 pb-5">
						<h1>Meet Up project</h1>
						<h2>This is a project created by yours truly.</h2>
						<p>
							Using: ReactJS, Bootstrap, @Fortawesome, Moment,
							React-router
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 mx-auto">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.events.map((item, index) => {
									return (
										<div key={item.ID}>
											<EventCard
												date={item.meta_keys.day}
												time={item.meta_keys.time}
												event={item.post_title}
												group={
													actions.findGroupName(
														item.meta_keys._meetup
													).post_title
												}
												eventID={String(item.ID)}
												groupID={parseInt(
													item.meta_keys._meetup
												)}
											/>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
