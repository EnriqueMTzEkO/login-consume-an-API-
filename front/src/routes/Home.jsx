import React, { useState } from "react";
import "../style/home.css";

const Home = () => {
    const [cat, setCat] = useState(null);
    const [http, setHttp] = useState('');

    const getCats = async (e) => {
        e.preventDefault();
        if (http !== "") {
            try {
                await fetch(`https://http.cat/${http}`, { mode: 'no-cors' });
                setCat(`https://http.cat/${http}`);
            } catch (error) {
                console.error('Network error', error);
                setCat(null);
            }
        }
    };

    return (
        <div id="home">
            <div>
                <div>
                    <h1 id="title">Un lindo gato para que entiendas los mensajes HTTP</h1>
                </div>
                <div id="note">
                    <form onSubmit={getCats}>
                        <label htmlFor="error">Busca error HTTP</label>
                        <input
                            type="text"
                            id="httpMsg"
                            onChange={(e) => setHttp(e.target.value)}
                            value={http}
                            required
                        />
                        <button type="submit">Buscar</button>
                    </form>
                    {cat && <img src={cat} alt="HTTP cat" />}
                </div>
            </div>
        </div>
    );
};

export default Home;
