import React, { useState } from "react";

const Settings = () => {
  // State for profile
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  // State for theme (dark/light mode)
  const [theme, setTheme] = useState("light");

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>

      {/* Profile Update Section */}
      <div className="profile-section">
        <h2>Update Profile</h2>
        <form onSubmit={handleProfileUpdate}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              required
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>

      {/* Theme Toggle Section */}
      <div className="theme-section">
        <h2>Theme</h2>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default Settings;