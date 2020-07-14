import React, { useState, useEffect } from "react";
import Collapse from "./Collapse";
import { withRouter, Link } from "react-router-dom";

const Navigation = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "menu",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">kofa</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Collapse state={state} />
    </header>
  );
};

export default withRouter(Navigation);
