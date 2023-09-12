import './Bottol.css'

const Bottol = ({botol,handleBottole}) => {
    const {name,img,price } = botol
    return (
        <div className="bottol">
            
            <h4>Name: {name}</h4>
            <img   src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() =>handleBottole(botol)}>Purches</button>
        </div>
    );
};

export default Bottol;