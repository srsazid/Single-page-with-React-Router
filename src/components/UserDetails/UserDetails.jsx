import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website } = user;
    return (
        <div>
            <h4>Details About User:{name}</h4>
            <p>Web: {website}</p>
        </div>
    );
};

export default UserDetails;