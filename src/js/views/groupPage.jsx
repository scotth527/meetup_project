import React from "react";
import EventCard from "../component/eventCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import
const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

export class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
		this.handleImageLoaded.bind(this);
	}
	handleImageLoaded() {
		this.setState({ loading: false });
	}
	render() {
		return (
			<div className="container-fluid">
				<Context.Consumer>
					{({ store, actions }) => {
						let groupID = this.props.match.params.theid;

						return (
							<div className="row bg-secondary ">
								<div className="col-lg-8 col-12 ml-lg-4 ml-0 pt-4 pb-4 d-flex flex-wrap">
									<div
										onLoad={e => this.handleImageLoaded}
										className="col-lg-7 col-12 mr-lg-2 mr-0"
										style={{
											background: `url(${"https://picsum.photos/600/350/?random"}) center center no-repeat`,
											height: "350px"
										}}>
										<ClipLoader
											css={override}
											sizeUnit={"px"}
											size={150}
											color={"#123abc"}
											loading={this.state.loading}
										/>
									</div>

									<div className="col-lg-3 col-12 d-flex ml-lg-2 pl-0 pt-lg-0 pt-3 flex-column">
										<div>
											<strong>Group:</strong>
										</div>
										<h2 className="text-light">
											{
												actions.findGroupName(groupID)
													.post_title
											}
										</h2>
										<div>
											<strong>Location</strong>
										</div>
										<div className="text-light">
											Miami, FL
										</div>
										<div>
											<strong>Description:</strong>
										</div>
										<p className="text-light">
											{
												actions.findGroupName(groupID)
													.post_content
											}
										</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="row">
					<div className="col-12 mx-auto">
						<div className="col-lg-5 col-12 mt-3 mx-auto">
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
