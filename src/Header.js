import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className='header'>
            <img className="header_logo" 
            src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" 
            />
            <div
                className="header_search">
                <input
                className="header_searchInput" type="text" />
                <SearchIcon
                className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        Sign in
                    </span>
                </div>
                <div className="header_option">
                        <span className="header_optionLineOne">
                            Returns
                        </span>
                        <span className="header_optionLineTwo">
                            & Orders
                        </span>
                </div>
                <div className="header_option">
                        <span className="header_optionLineOne">
                            Your
                        </span>
                        <span className="header_optionLineTwo">
                            Prime
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Header
