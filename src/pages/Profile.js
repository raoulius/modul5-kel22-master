import React from "react";
import ProfileCard from "../component/ProfileCard";
import ProfileData from "../data/ProfileData";
 // Impor data profil dari file terpisah

export default function Profile(props) {
  return (
    <div style={{ alignItems: "center" }}>
      <h1 style={{ textAlign: "center", color: "white" }} className="profile-title">
        Profile
      </h1>
      {ProfileData.map((profile, index) => (
        <ProfileCard
          key={index}
          nama={profile.nama}
          genre={profile.genre}
          imageSrc={profile.imageSrc}
        />
      ))}
    </div>
  );
}