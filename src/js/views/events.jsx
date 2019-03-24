import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Events extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let eventID = this.props.match.params;
					let event = store.events.find(item => {
						return item.ID == eventID;
					});
					return (
						<div className="container-fluid">
							<div className="row bg-secondary ">
								<div className="col-10 mx-auto text-light pt-5 pb-5">
									<h3>Placeholder</h3>
									<h1>Placeholder</h1>
									<Link
										to={
											"/group/" + event.meta_keys._meetup
										}>
										Placeholder
									</Link>
								</div>
							</div>
							<div />
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Events.propTypes = {
	match: PropTypes.object
};
