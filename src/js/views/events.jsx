import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export class Events extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let eventID = this.props.match.params.theid;
					let event = store.events.find(item => {
						return item.ID == eventID;
					});
					console.log(event);
					return (
						<div className="container-fluid">
							<div className="row bg-secondary d-flex justify-content-between ">
								<div className="col-4 text-light">
									<h3>{event.meta_keys.day}</h3>
									<h1>{event.post_title}</h1>
									<Link to={"/group/"}>Placeholder</Link>
								</div>
								<div className="col-4">
									<div>
										<h3>People going</h3>
										<button>Login to RSVP</button>
										<div className="d-flex">
											<FontAwesomeIcon
												size="2x"
												icon={faTwitter}
											/>
											<FontAwesomeIcon
												size="2x"
												icon={faFacebook}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="d-flex">
									<div>Image</div>
									Date
									<p>Every blank of the month</p>
									<div />
								</div>
							</div>
							<div />
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
