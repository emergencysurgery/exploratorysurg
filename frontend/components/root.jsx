import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import ScrollToTop from "./scroll_to_top"


const Root = ({ store }) => {
    return (
        <div>
            <Provider store={store}>
                <HashRouter>
                    <ScrollToTop >
                        <App />
                    </ScrollToTop>
                </HashRouter>

            </Provider>
        </div>
    )
}

export default Root;