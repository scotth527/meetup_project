import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import {
	Card,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText
} from "reactstrap";
import Moment from "react-moment";

function EventCard(props) {
	return (
		<div className="mx-auto mt-3 mb-3 col-lg-5 col-12 ">
			<Card>
				<CardHeader className="h3">
					<Moment format="MMMM DD" date={props.date} />
				</CardHeader>
				<CardBody>
					<div className="d-flex">
						<div className="col-lg-4 pl-0">
							<p style={{ fontSize: "30px" }}>
								<Moment format="h:mm a" time={props.time} />
							</p>
						</div>
						<div className="d-flex flex-column col-8">
							<Link
								className="mb-2"
								to={"/meetup_project/event/" + props.eventID}>
								{props.event}
							</Link>
							<Link to={"/meetup_project/group/" + props.groupID}>
								{props.group}
							</Link>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

EventCard.propTypes = {
	date: PropTypes.string,
	time: PropTypes.string,
	event: PropTypes.string,
	group: PropTypes.string,
	groupID: PropTypes.number,
	eventID: PropTypes.string,
	key: PropTypes.number
};

EventCard.defaultProps = {
	date: "Placeholder",
	time: "Placeholder",
	event: "Placeholder",
	group: "Placeholder",
	groupID: 0,
	eventID: 0
};

export default EventCard;
