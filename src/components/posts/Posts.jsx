import './posts.scss'

const Posts = () => {
    //temp data
    const posts = [
        {
            id: 1,
            name: "Banele Ngwane",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/136623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgbw&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo=4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Banele Ngwane",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgbw&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

        },
    ]
  return (
    <div>
        {posts.map(post =>(
            <Posts oost={post} key={post.id} />
        ))}
    </div>
  )
}

export default Posts