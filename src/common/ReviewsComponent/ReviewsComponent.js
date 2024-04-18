import React, { useState, useEffect, useRef } from "react";
import {
  Name,
  PublikDate,
  ReviewsContainer,
  ReviewsTile,
  UserContainer,
} from "./style";
import { Stars } from "./Stars";
const googleLogo = require("../../images/google_logo.png");

export const ReviewsComponent = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps JavaScript API library is not loaded.");
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 15,
    });

    const service = new window.google.maps.places.PlacesService(map);

    service.getDetails(
      {
        placeId: placeId,
        fields: ["name", "review"],
      },
      (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place.reviews
        ) {
          setReviews(place.reviews);
        } else {
          console.error("Failed to fetch reviews:", status);
        }
      }
    );
  }, [placeId]);

  return (
    <div>
      <div ref={mapRef} style={{ height: "1px", width: "1px" }}>
        Map is loading...
      </div>

      <ReviewsContainer>
        {reviews.map((review, index) => (
          <ReviewsTile key={index}>
            <UserContainer>
              <img
                src={review.profile_photo_url}
                width={"50px"}
                height={"50px"}
                alt="photo"
              />
              <Name>{review.author_name}</Name>
              <PublikDate>{review.relative_time_description}</PublikDate>
              <img src={googleLogo} width={"30px"} height={"30px"} />
            </UserContainer>
            <Stars count={review.rating} />
            <p>{review.text}</p>
          </ReviewsTile>
        ))}
      </ReviewsContainer>
    </div>
  );
};
