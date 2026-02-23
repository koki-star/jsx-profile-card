import UserProfile from "./UserProfile"; // importing the component

function App() {
  return (
    <div>
      <h1>JSX Profile Card Project</h1>

      {/* Normal test case 1 */}
      <UserProfile 
        name="Jane Doe" 
        email="jane.doe@example.com" 
      />

      {/* Normal test case 2 */}
      <UserProfile 
        name="Michael Smith" 
        email="michael.smith@email.com" 
      />

      {/* Normal test case 3 */}
      <UserProfile 
        name="Sara Johnson" 
        email="sara.johnson@gmail.com" 
      />

      {/* Edge case: empty name */}
      <UserProfile 
        name="" 
        email="noname@example.com" 
      />

      {/* Edge case: empty email */}
      <UserProfile 
        name="No Email User" 
        email="" 
      />

      {/* Edge case: very long name */}
      <UserProfile 
        name="Alexander Jonathan Christopher Williams the Third"
        email="longname@example.com" 
      />

    </div>
  );
}

export default App;