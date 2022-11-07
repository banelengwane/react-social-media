import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import Banele from "../../assets/banele.jpg"
import './stories.scss'

const Stories = () => {
    const {currentUser } = useContext(AuthContext)
    //temp dummy data
    const stories = [
        {
            id: 1,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 4,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 5,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 6,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 7,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 8,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 9,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 10,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 11,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 12,
            name: "Banele Ngwane",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]
  return (

    <div className='stories'>
        <div className="story">
                <img src={Banele} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories