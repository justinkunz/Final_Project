import React from 'react';

class Navbar extends React.Component {
    getClassNames = page => {
        if (page === this.props.activePage) {
            return "active item"
        }
        return "item"
    }
    render() {
        if (this.props.signedIn) {
            return (
                <div>
                    <div className="ui secondary pointing menu">
                        <a href="/" className={this.getClassNames("Home")}>
                            Home
                        </a>
                        <a href="/my_account" className={this.getClassNames("Gestational Carriers")}>
                            My Account
                    </a>

                        <div className="right menu">
                            <a href="/sign_out" className="ui item" className={this.getClassNames("signUp")}>
                                Sign Out
                        </a>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <div className="ui secondary pointing menu">
                    {/* <a href="/" className={this.getClassNames("Home")}>
                        Home
                        </a> */}
                    <a href="/gcSurvey" className={this.getClassNames("Gestational Carriers")}>
                        Gestational Carriers
                    </a>
                    <a href="ipSurvey" className={this.getClassNames("Intended Parents")}>
                        Intended Parents
                    </a>
                    <div className="right menu">
                        <a href="/sign_up" className="ui item" className={this.getClassNames("signUp")}>
                            Sign Up
                        </a>

                        <a href="/sign_in" className={this.getClassNames("signIn")}>
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar;