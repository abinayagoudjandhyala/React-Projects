

const ProfileCard =()=>{
    const name = "Abinaya";
    const language = "JavaScript";
    const bio = "I am a passionate JavaScript developer.";
    const imageUrl = "https://tse1.mm.bing.net/th/id/OIP.gYl9v1MYG3M5sqHGZN3XAAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
    const hobbies =['Coding','Reading','Writting','Arts'];
    return (
        <div style={{padding:'2rem', fontFamily:'Arial, sans-serif'}}>
            <h1>{name}</h1>
            <p>Language: {language}</p>
            <p>Bio: {bio}</p>
            <img src={imageUrl} alt={name} />
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileCard;

