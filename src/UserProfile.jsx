function UserProfile({ name, email }) {
  // receiving name and email as props

  return (
    <div className="profile-card">
      <h2>User Profile</h2>

      {/* profile image */}
      <div className="profile-image">👤</div>

      {/* displaying the name */}
      <p>Name: {name}</p>

      {/* displaying the email */}
      <p>Email: {email}</p>

      {/* link that opens email client */}
      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;