import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Col,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";

export class Events extends React.Component {
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			modal: false
		};
	}
	toggleModal() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
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
							<div className="row bg-secondary d-flex justify-content-between pt-3 pl-4 pb-5">
								<div className="col-4 text-light">
									<p>
										<Moment
											format="MMMM DD"
											date={event.meta_keys.day}
										/>
									</p>
									<h1>{event.post_title}</h1>
									<Link
										to={
											"/group/" + event.meta_keys._meetup
										}>
										<h4 className="mb-2">
											{
												actions.findGroupName(
													event.meta_keys._meetup
												).post_title
											}
										</h4>
									</Link>
								</div>
								<div className="col-lg-3 col-12">
									<div className="bg-dark text-white align-content-end rounded pt-3">
										<div className="text-center">
											<h3 className="mx-auto mb-3">
												People going
											</h3>
										</div>
										<div className="d-flex justify-content-center mb-3">
											<Button
												onClick={this.toggleModal}
												color="primary"
												size="lg"
												active>
												Login to RSVP
											</Button>
											<Modal
												isOpen={this.state.modal}
												toggle={this.toggleModal}
												className={
													this.props.className
												}>
												<ModalHeader
													toggle={this.toggle}>
													Login
												</ModalHeader>
												<ModalBody>
													<Form>
														<FormGroup row>
															<Label
																for="exampleEmail"
																sm={2}>
																Email
															</Label>
															<Col sm={10}>
																<Input
																	type="email"
																	name="email"
																	id="exampleEmail"
																	placeholder="Example@email.com"
																/>
															</Col>
														</FormGroup>
														<FormGroup row>
															<Label
																for="examplePassword"
																sm={2}>
																Password
															</Label>
															<Col sm={10}>
																<Input
																	type="password"
																	name="password"
																	id="examplePassword"
																	placeholder="Password"
																/>
															</Col>
														</FormGroup>
													</Form>
												</ModalBody>
												<ModalFooter>
													<Button
														color="primary"
														onClick={
															this.toggleModal
														}>
														Sign in
													</Button>{" "}
													<Button
														color="secondary"
														onClick={
															this.toggleModal
														}>
														Cancel
													</Button>
												</ModalFooter>
											</Modal>
										</div>
										<div className="d-flex">
											<div className="mx-auto mb-3">
												<FontAwesomeIcon
													size="2x"
													icon={faTwitter}
													className="mr-3"
												/>
												<FontAwesomeIcon
													size="2x"
													icon={faFacebook}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-3 mb-3">
								<div className="col-11 d-flex mx-auto">
									<div className="mr-5 col-lg-9 col-12">
										<img
											style={{
												height: "500px"
											}}
											src="data:image/jpeg;base64,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"
										/>
									</div>
									<div
										className="d-flex ml-3 border border-secondary rounded p-4"
										style={{ height: "175px" }}>
										<FontAwesomeIcon
											size="2x"
											icon={faClock}
										/>
										<div className=" ml-2 d-flex flex-column ">
											<p>
												<Moment
													format="dddd, MMMM DD, YYYY"
													date={event.meta_keys.day}
												/>
											</p>
											<p>
												<Moment
													format="h:mm a"
													time={event.meta_keys.time}
												/>
											</p>
											<p>Every blank of the month</p>
											<div />
										</div>
									</div>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-11 mx-auto">
									<h4>Details</h4>
									<p>{event.post_content}</p>
									<p>
										There are a few rules to follow for this
										event:
									</p>
									<ul>
										<li>Be kind</li>
										<li>
											You are encouraged to buy a drink
										</li>
										<li>No children under 12</li>
										<li>Stay as long as you like</li>
									</ul>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Events.propTypes = {
	match: PropTypes.object,
	isOpen: PropTypes.bool,
	autoFocus: PropTypes.bool,
	// if modal should be centered vertically in viewport
	centered: PropTypes.bool,
	// corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
	size: PropTypes.string,
	// callback for toggling isOpen in the controlling component
	toggle: PropTypes.func,
	role: PropTypes.string, // defaults to "dialog"
	// used to reference the ID of the title element in the modal
	labelledBy: PropTypes.string,
	keyboard: PropTypes.bool,
	// control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
	backdrop: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf(["static"])
	]),
	// if body of modal should be scrollable when content is long
	scrollable: PropTypes.bool,
	// allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
	// external: PropTypes.node,
	// called on componentDidMount
	onEnter: PropTypes.func,
	// called on componentWillUnmount
	onExit: PropTypes.func,
	// called when done transitioning in
	onOpened: PropTypes.func,
	// called when done transitioning out
	onClosed: PropTypes.func,
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	// boolean to control whether the fade transition occurs (default: true)
	fade: PropTypes.bool,
	cssModule: PropTypes.object,
	// zIndex defaults to 1000.
	zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	// backdropTransition - controls backdrop transition
	// timeout is 150ms by default to match bootstrap
	// see Fade for more details
	// backdropTransition: PropTypes.shape(Fade.propTypes),
	// modalTransition - controls modal transition
	// timeout is 300ms by default to match bootstrap
	// see Fade for more details
	// modalTransition: PropTypes.shape(Fade.propTypes),
	innerRef: PropTypes.object,
	// if modal should be destructed/removed from DOM after closing
	unmountOnClose: PropTypes.bool // defaults to true
};
