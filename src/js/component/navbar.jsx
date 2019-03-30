import React from "react";
import {
	Button,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
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
import PropTypes from "prop-types";

export default class Navbar2 extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			isOpen: false,
			modal: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	toggleModal() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
	render() {
		return (
			<div className="bg-secondary text-white">
				<Navbar color="secondary" light expand="md">
					<NavbarBrand className="text-light" href="/">
						Meetup
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button
									onClick={this.toggleModal}
									color="primary"
									size="sm">
									Login
								</Button>{" "}
							</NavItem>
						</Nav>
						<Modal
							isOpen={this.state.modal}
							toggle={this.toggleModal}
							className={this.props.className}>
							<ModalHeader toggle={this.toggle}>
								Login
							</ModalHeader>
							<ModalBody>
								<Form>
									<FormGroup row>
										<Label for="exampleEmail" sm={2}>
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
										<Label for="examplePassword" sm={2}>
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
									onClick={this.toggleModal}>
									Sign in
								</Button>{" "}
								<Button
									color="secondary"
									onClick={this.toggleModal}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

Navbar2.propTypes = {
	// boolean to control the state of the popover
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
