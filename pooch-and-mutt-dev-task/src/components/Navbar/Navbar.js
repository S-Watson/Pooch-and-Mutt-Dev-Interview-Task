import React from 'react';
import Image from '../Image/Image';
import logo from '../../assets/logos/Pooch-and-Mutt-Logo.png';
import searchIcon from '../../assets/icons/icon-search.svg';
import userIcon from '../../assets/icons/icon-user.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';

function Navbar() {
    return (
        <nav className="border-b border-border-minimal">
            <div className="container mx-auto flex items-center py-5">
                <div className="flex lg:hidden flex-1 space-x-8 justify-start">
                    {/* TODO: Implement mobile dropdown functionality */}
                    <Image src={menuIcon} alt="Mobile Menu Icon" className="" />
                </div>

                <div className="hidden lg:flex flex-1 text-secondary text-p2 justify-start">
                    <a href="#shop" className="mx-5">Shop</a>
                    <a href="#find-your-food" className="mx-5">Find your food</a>
                    <a href="#about" className="mx-5">About</a>
                    <a href="#blog" className="mx-5">Blog</a>
                </div>

                <div className="flex justify-center flex-none">
                    <a href="/" aria-label="Pooch & Mutt">
                        <Image src={logo} alt="Pooch & Mutt Logo" className="h-10" />
                    </a>
                </div>

                <div className="flex-1 flex justify-end">
                    <a href="#search" aria-label="Search" className="md:block hidden mx-5">
                        <Image src={searchIcon} alt="Search Icon" />
                    </a>
                    <a href="#profile" aria-label="User Account" className="md:block hidden mx-5">
                        <Image src={userIcon} alt="Profile Icon" />
                    </a>
                    <a href="#shopping-cart" aria-label="Shopping Cart" className=" mx-5">
                        <Image src={cartIcon} alt="Shopping Cart Icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
