import Follow from "../../../shared/components/Follow";
import ProfileName from "../../../shared/components/ProfileName";

function UserProfile() {
    const userName = "anil sidhu";
    const handleFollow = () => {
        console.log("handleFollow");

    }
    return (
        <div className="profile-border">
            <img className="profile-img" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" />
           <ProfileName  name={userName} />
            <p>Frontend Developer</p>
            <Follow handleFollow={handleFollow} />
        </div>
    );
}

export default UserProfile