import StudentCard from './components/StudentCard/StudentCard'
import './App.css'
import image1 from './assets/image1.avif';
import image2 from './assets/image2.avif';
import image3 from './assets/image3.jpg';


function App() {

  const users_Data = [
    {
      username: "Aryan",
      user_desc: "Student and Developer",
      image: image1
    },
    {
      username: "Ishan Charan",
      user_desc: "B.Com Student and Explorer",
      image: image2
    },
    {
      username: "Parthsarthi",
      user_desc: "AI Enthusiast",
      image: image3
    }
  ];

  return (
    <>
      <StudentCard users = {users_Data}></StudentCard>
    </>
  )
}

export default App
