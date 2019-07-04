import React from 'react';
import Spinner from '../spinner/spinner';

import './home-page.css';

function HomePage() {
    return (
        <div className='home-page'>
            <div class="jumbotron col-12 mb-0">
                <h1 class="display-4">SWAPI</h1>
                <p class="lead">The Star Wars Api</p>
                <hr class="my-4" />
                <p>All the Star Wars data you've ever wanted:</p>
                <p>Planets, Spaceships, Vehicles, People, Films and Species</p>
                <p>From all SEVEN Star Wars films</p>
                <p>Now with The Force Awakens data!</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="https://swapi.co" role="button">Learn more</a>
                </p>
            </div>

            {/* <div>
                <h3>Swapi</h3>
                <p>
                    The Star Wars Api
                </p>
                <p>All the Star Wars data you've ever wanted:</p>

                <p>Planets, Spaceships, Vehicles, People, Films and Species</p>

                <p>From all SEVEN Star Wars films</p>

                <p>Now with The Force Awakens data!</p>
            </div> */}
            {/* <Spinner /> */}
        </div>
    );
};

export default HomePage;