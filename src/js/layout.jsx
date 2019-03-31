import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import Store from "./store/appContext.jsx";
import { Events } from "./views/events.jsx";
import Navbar2 from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Group } from "./views/groupPage.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar2 />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/group/:theid" component={Group} />
							<Route path="/event/:theid" component={Events} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
