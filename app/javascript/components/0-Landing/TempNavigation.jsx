import React, { useState, useEffect } from "react";
import TempCollapse from "./TempCollapse";
import { withRouter, Link } from "react-router-dom";

const TempNavigation = ({ history }) => {
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
    <div className="container mx-auto relative">
      <div id="ax" className="relative flex justify-between my-8">
        <Link to="/">kofa</Link>
        <button disabled={disabled} onClick={handleMenu}>
          {state.menuName}
        </button>
      </div>
      <TempCollapse state={state} />
    </div>
  );
};

export default withRouter(TempNavigation);
