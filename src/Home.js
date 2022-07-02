import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    const showProducts = () => {
        navigate('/products')
    }
    return (
        <button className="btn btn-primary" onClick={showProducts}>Products</button>
    )
};

export default Home;