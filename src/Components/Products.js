import { useNavigate } from "react-router-dom";
const Products = () => {
    const navigate = useNavigate();
    const handleSubmit = () =>{
        console.log("Submitted");
        navigate("/");
    }
    return (
        <>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Products