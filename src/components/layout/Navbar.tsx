import { Link } from "gatsby";
import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import Hamburger from "hamburger-react";
import Logo from "./Logo";
import { Theme } from "../utils/Theme";
import Social from "./Social";

const Nav = ({ isDesktop, subitems, onClickItem }: any) => {
  const navbar = isDesktop ? "navbar-end has-text-centered" : "p-6";
  const item1 = isDesktop ? "navbar-item has-dropdown is-hoverable " : "";
  const item1Link = isDesktop ? "navbar-link" : "is-size-3 item-header";
  const item2 = isDesktop ? "navbar-dropdown" : "";
  const item2Item = isDesktop ? "navbar-item" : "item-link is-block";

  const whySpringClass = !isDesktop && !subitems[0] ? "subitems-hide" : "";

  const [expanded, setExpanded] = React.useState(false);

  const onClickHandler = (index: number) => {
    if (isDesktop) {
      setExpanded(!expanded);
    }
    if (!isDesktop && onClickItem) {
      onClickItem(index);
    }
  };

  return (
    <div aria-label="navigation" className={`${navbar}`}>
      <div className={`${item1} ${whySpringClass} navbar-group-item`}>
        <span
          role="button"
          aria-expanded={expanded}
          tabIndex={0}
          className={`${item1Link}`}
          onClick={() => {
            onClickHandler(0);
          }}
        >
          Documentation
        </span>
        <ul className={`${item2} is-boxed`}>
          <li>
            <Link className={`${item2Item}`} to="https://docs.micrometer.io/context-propagation/reference/">
              Context Propagation
            </Link>
          </li>
          <li>
            <Link className={`${item2Item}`} to="https://docs.micrometer.io/micrometer/reference/">
              Micrometer
            </Link>
          </li>
          <li>
            <Link className={`${item2Item}`} to="https://docs.micrometer.io/tracing/reference/">
              Micrometer Tracing
            </Link>
          </li>
          <li>
            <Link className={`${item2Item}`} to="https://docs.micrometer.io/micrometer-docs-generator/reference/">
              Micrometer Docs Generator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navItemsCount = 1;
  const [navbarActive, setNavbarActive] = React.useState(false);
  const [stateSubItems, setStateSubItems] = React.useState(
    new Array().fill(false, 0, navItemsCount)
  );

  const wrapper = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [lock, setLock] = React.useState(false);

  React.useEffect(() => {
    if (wrapper?.current && isOpen) {
      disableBodyScroll(wrapper?.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [wrapper, isOpen]);

  const toggleHamburger = () => {
    setStateSubItems(new Array().fill(false, 0, navItemsCount));
    setIsOpen(!isOpen);
    // setNavbarActive(!navbarActive)
  };

  const onEnter = () => {
    setLock(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 350);
  };
  const onEntered = () => {
    setLock(false);
  };

  const onEnded = () => {
    setLock(true);
    setIsOpen(false);
  };
  const onExited = () => {
    setLock(false);
  };

  return (
    <nav
      id="header"
      className={`navbar is-transparent ${isOpen ? "is-open" : ""}`}
    >
      <div className="container is-hidden-mobile is-hidden-tablet-only">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Home">
            <Logo />
          </Link>
        </div>
        <div className={`navbar-menu`}>
          <Nav isDesktop={true} />
          <div className="navbar navbar-social">
            <Social />
          </div>
          <Theme />
        </div>
      </div>

      <div className="container navbar-mobile is-hidden-desktop">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <Logo />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger ${navbarActive ? "is-active" : ""}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <Hamburger size={24} />
          </div>
        </div>
        <div
          id="navMenu"
          className={`has-background-dark has-text-white ${
            navbarActive ? "is-active" : ""
          }`}
        >
          <TransitionGroup component={null}>
            {isOpen && (
              <CSSTransition
                onEnter={onEnter}
                onEntered={onEntered}
                onExit={onEnded}
                onExited={onExited}
                classNames="wrapper"
                timeout={500}
              >
                <div className="wrapper" ref={wrapper}>
                  <Nav
                    onClickItem={(index: number) => {
                      const newVal = !stateSubItems[index];
                      const newState = new Array().fill(
                        false,
                        0,
                        navItemsCount
                      );
                      newState[index] = newVal;
                      setStateSubItems(newState);
                    }}
                    subitems={stateSubItems}
                    isDesktop={false}
                  />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
