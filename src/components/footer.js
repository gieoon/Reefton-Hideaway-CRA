import React from 'react';

export default function Footer({}){
    return(
        <div className="Footer">
            {/* <a href="/longstay">Long term accomodation</a> */}
            {/* <a 
                // href="https://gieoon.github.io/" 
                href="https://www.linkedin.com/in/jun-kagaya-975695190/"
                target="_blank">Make me a website like this</a> */}
            <p>All Rights Reserved &copy; Reefton Hideaway 2020</p>
            <p>Designed by <a href="https://webbi.co.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                >Webbi</a>
            </p>
            <p id="login-footer">
                <a href="https://login.reefton_hideaway.craftie.xyz/" target="_blank" rel="noopener noreferer">Login</a>
            </p>
        </div>
    )
}