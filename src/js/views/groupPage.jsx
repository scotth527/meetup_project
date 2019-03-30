import React from "react";
import EventCard from "../component/eventCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class Group extends React.Component {
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
						<div className="col-lg-5 col-12 mt-3">
							<h4>Next Events</h4>
						</div>
						<Context.Consumer>
							{({ store, actions }) => {
								let groupID = this.props.match.params.theid;
								return store.events
									.filter(item => {
										if (item.meta_keys._meetup == groupID) {
											return item;
										}
									})
									.map((item, index) => {
										return (
											<EventCard
												key={item.ID}
												date={item.meta_keys.day}
												time={item.meta_keys.time}
												event={item.post_title}
												group={
													actions.findGroupName(
														item.meta_keys._meetup
													).post_title
												}
												eventID={item.ID}
												groupID={item.meta_keys._meetup}
											/>
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

Group.propTypes = {
	match: PropTypes.object
};
