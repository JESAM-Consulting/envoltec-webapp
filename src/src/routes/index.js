import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Datenschutz from "./datenschutz";
import DetailsPage from "./detailsPage";
import Home from "./home";
import Impressum from "./impressum";
import Landing from "./landing";

function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

const DefaultLayout = ({ children, match }) =>
    <div className="defult-layout">
        <div className="defult-layout-set">
            <Header />
            {children}
        </div>
        <Footer />
    </div>
;
const DefaultLayout3 = ({ children, match }) =>
<>
            <Header />
            {children}
     
        <Footer />
 </>
;
const Layout = ({ children, match }) =>
    <div className="">

            <Header />
            {children}

        <Footer />
    </div>
    ;

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <RouteWrapper
                        exact={true}
                        path="/"
                        component={Home}
                        layout={DefaultLayout}
                    />
                    <RouteWrapper
                        exact={true}
                        path="/details-page"
                        component={DetailsPage}
                        layout={DefaultLayout}
                    />
                    <RouteWrapper
                        exact={true}
                        path="/impressum"
                        component={Impressum}
                        layout={DefaultLayout3}
                    />
                    <RouteWrapper
                        exact={true}
                        path="/datenschutz"
                        component={Datenschutz}
                        layout={DefaultLayout3}
                    />
                    <RouteWrapper
                        exact={true}
                        path="/landing/:id"
                        component={Landing}
                        layout={Layout}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
