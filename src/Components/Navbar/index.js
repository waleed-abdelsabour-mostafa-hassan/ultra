import React  from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,LinkItem} from './style.js';

const Navbar = () =>
    {
            return (
        <NavbarSection>

                <div className="container">

                    <Logo>
                        <LogoText>Ultra Profile</LogoText>
                    </Logo>

                    <UlList>
                        <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
                        <ListItem><LinkItem to="/work">Work</LinkItem></ListItem>
                        <ListItem><LinkItem to="/portfolio">Portfolio</LinkItem></ListItem>
                        <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                        <ListItem><LinkItem to="/about">About</LinkItem></ListItem>
                        <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
                    </UlList>

                </div>

        </NavbarSection>
            );

    }

export default Navbar;
