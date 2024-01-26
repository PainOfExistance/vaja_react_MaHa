import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { NavItem, NavbarText } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavItem>
                        <NavbarText>
                            <Link to="/">Neke</Link>
                        </NavbarText>
                    </NavItem>
                </li>
                <li>
                    <NavItem>
                        <NavbarText>
                            <Link to="/frag">Frag</Link>
                        </NavbarText>
                    </NavItem>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;