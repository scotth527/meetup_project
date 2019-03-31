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
							<div className="row bg-secondary d-flex justify-content-between pt-3 pl-lg-4 pl-0 pb-5">
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
								<div className="col-lg-11 col-12 d-flex flex-wrap mx-auto">
									<div
										className="mr-lg-5 mr-0 col-lg-7 col-12"
										style={{
											background: `url(${"https://picsum.photos/800/500/?random"}) center center no-repeat`,
											height: "500px"
										}}
									/>
									<div
										className="col-lg-3 col-12 d-flex mt-lg-0 mt-2 ml-lg-3 ml-0  border border-secondary rounded p-4"
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
											<p>Twice a month</p>
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
