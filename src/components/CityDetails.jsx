import { useParams } from "react-router-dom";

const cityDetails = () => {
    const { id } = useParams();

    return (
        <div className="">
            <h2>Details of: {id}</h2>
        </div>
    )
}

export default cityDetails;