import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <main className="container">
            <Header />
            <Menu />
            <Footer />
        </main>
    );
}

function Header() {
    // const style = {color: 'red', fontSize: '50px', textTransform: 'uppercase'};
    return (
        <header className="header">
            <h1>Pacific Sea Pizza Co. </h1>
        </header>
    );
}

function Menu() {
    // const pizzas = [];
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <div className='menu'>
            <h2>🍕 Our Menu 🍕</h2>
            
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzas.map(pizza => <Pizza key={pizza.name} pizzaObj={pizza} />)}
                    </ul>
                </>
            ) : <div>
                    <div className="loader"></div>
                    <p>We're still working on our menu.</p><p>Please come back later. 😊</p>
                </div>}
            {/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price={10} photoName="pizzas/prosciutto.jpg"/>
            <Pizza name="Pizza Funghi" ingredients="Tomata, mushrooms, and onion" price={12} photoName="pizzas/funghi.jpg"/>
            <Pizza name="Pizza Salamino" ingredients="Cheese and Pineapple" price={15} photoName="pizzas/funghi.jpg"/> */}
        </div>
    )
}


function Pizza({pizzaObj}) {
    
    
    // if (pizzaObj.soldOut) return <Header/>;

    return ( 
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <div>
                <img src={pizzaObj.photoName} alt={pizzaObj.photoName}></img>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut? 'Sold out' : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer(props) {
    console.log(props);
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    
    if (!isOpen) {
        return (
            <p>test!!!!</p>
        );
    }
    // if (hour >= openHour && hour < closeHour) {
    //     alert('We are currently open.');
    // } else {
    //     alert('Our store is currently closed.');
    // }

    // if (hour >= openHour && hour < closeHour) alert('We are currently open.');
    // else alert('Our store is currently closed.');
    
    return (
        <footer className="footer">
            {isOpen ? ( 
               <Order openHour={openHour} closeHour={closeHour}/> 
            ) : (
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00. 👌</p>
            )}
        </footer>
    );
}

function Order({openHour, closeHour}) {
    return (
        <div className="order">
            <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
            <button className='btn'>Order</button>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App />);