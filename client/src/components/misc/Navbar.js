import React from 'react';

class Navbar extends React.Component {
    render() {
        const getClassNames = page => {
            console.log(this.props.activePage)
            if (page === this.props.activePage) {
                return "active item"
            }
            return "item"
        }
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <a href="/" className={getClassNames("Home")}>
                        Home
                        </a>
                    <a href="/gcSurvey" className={getClassNames("Gestational Carriers")}>
                        Gestational Carriers
                    </a>
                    <a href="ipSurvey" className={getClassNames("Intended Parents")}>
                        Intended Parents
                    </a>
                    <div className="right menu">
                        <a href="/sign_up" className="ui item" className={getClassNames("signUp")}>
                            Sign Up
                        </a>

                        <a href="/sign_in" className={getClassNames("signIn")}>
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar;