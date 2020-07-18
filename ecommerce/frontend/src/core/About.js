import React from "react";

import { Link, withRouter } from "react-router-dom";

import Footer from "./Footer";
import Menu from "./Menu";

const About = () => (
  <div>
    <Menu />
    <section class="carousel-about-wrapper">
      <div class="carousel-about">
        <div class="carousel-item">
          <div class="carousel-item__img">
            <img src="assets/images/generic-on-sale.jpg" alt="generic" />
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-item__img">
            <img src="assets/images/nfl.jpg" alt="nfl" />
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-item__img">
            <img src="assets/images/sunset.jpg" alt="sunset" />
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-item__img">
            <img src="assets/images/football.jpg" alt="football" />
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-item__img">
            <img src="assets/images/theater.jpg" alt="theater" />
          </div>
        </div>
      </div>

      <div class="carousel-caption">
        <h1>About Us</h1>
      </div>
    </section>

    <section class="about-hero">
      <img src="assets/images/wave.png" alt="" class="wave" />
      <h2>What's SeatGeek?</h2>
    </section>

    <section class="features">
      <div class="feature">
        <div class="feature-img">
          <img src="assets/images/search-tickets.png" alt="search tickets" />
        </div>
        <div class="feature-text">
          <div class="small">SEARCH TICKETS</div>
          <h4>The largest inventory on the web</h4>
          <p>
            SeatGeek is a ticket search engine that makes finding tickets to
            live entertainment a cinch. We search dozens of the biggest ticket
            sites and present the results all in one place.
          </p>
        </div>
      </div>
      <div class="feature reverse">
        <div class="feature-img">
          <img src="assets/images/save-money.png" alt="save money" />
        </div>
        <div class="feature-text">
          <div class="small">SAVE MONEY</div>
          <h4>The most bang for your dollar</h4>
          <p>
            SeatGeek’s Deal Score system analyzes thousands of ticket listings
            and rates the best bargains. The higher the Deal Score, the better
            the value.
          </p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-img">
          <img src="assets/images/be-seated.png" alt="be seated" />
        </div>
        <div class="feature-text">
          <div class="small">BE SEATED</div>
          <h4>Know where you'll sit</h4>
          <p>
            Our gorgeous interactive maps with 3D views make finding the perfect
            seat simple. No more seats behind a concrete pillar. To make things
            easier, we display the Deal Score on every row.
          </p>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="service">
        <div class="service-img">
          <img src="assets/images/recommendations.png" alt="recommendations" />
        </div>
        <div class="service-text">
          <h4>Recommendations</h4>
          <p>
            Track your favorite teams and artists to receive personal
            recommendations for upcoming events.
          </p>
        </div>
      </div>
      <div class="service">
        <div class="service-img">
          <img src="assets/images/notifications.png" alt="notifications" />
        </div>
        <div class="service-text">
          <h4>Notifications</h4>
          <p>
            Get notified when your teams or favorite artists announce a new
            event in your city.
          </p>
        </div>
      </div>
      <div class="service">
        <div class="service-img">
          <img src="assets/images/mobile-ready.png" alt="mobile ready" />
        </div>
        <div class="service-text">
          <h4>Available on Mobile</h4>
          <p>
            Android? iPhone? Mobile web? Android? iPad? Tablet? Phablet? We've
            We've got you covered.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default withRouter(About);
