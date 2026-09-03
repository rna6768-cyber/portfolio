import React from 'react';

export default function Profile() {
  return (
    <section className="section-pad">
      <div className="section-kicker">Player 1 Status</div>
      
      <div className="profile-card">
        <img 
          src="https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/701623829_1649867376266084_91816368445440806_n.jpg?stp=dst-jpg_tt6&cstp=mx1122x1123&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_ohc=IydbROWrOx8Q7kNvwEkkCRM&_nc_oc=AdoHvobVyIDp1PICPLlUK8yhReBJwgQLzKA9gQfqvQ7KTprjXhty6dTOCTuFEwI-QJM&_nc_zt=24&_nc_ht=scontent.fpnh5-5.fna&_nc_gid=ubeDKnNl9-NousBJdyto8w&_nc_ss=7b2a8&oh=00_AQIj5ndg6XUWTTaNaw_TJqirc7XZLAwYUJi4aLW_6la7iQ&oe=6A9F350B" 
          alt="Profile Avatar" 
          className="profile-avatar"
        />
        <h2 className="profile-name">PENGLY SIM </h2>
        <div className="profile-title">Lead Frontend Developer</div>
        
        <p className="profile-bio">
          Building arcade-inspired web experiences and high-performance interactive interfaces.
        </p>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">99+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">LEVEL 3</span>
            <span className="stat-label">Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Clear Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}