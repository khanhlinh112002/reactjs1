import React,{Component} from "react";
import "./assets/css/macbookStyle.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            products:[],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    products: json,
                })
            })
    }

    render() {
        const {isLoaded, products} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>MACBOOK</h2>
                <div className="wrapper">
                    {/* eslint-disable-next-line array-callback-return */}
                    {products.map(product => {
                        return(
                            <div className="macbook__cart" key={product.id}>
                                <img src={product.image} alt=""/>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                                <p>{product.offer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}


export default App;
