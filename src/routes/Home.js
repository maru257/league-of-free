import { useEffect, useState } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const getRotation = async() => {
        const response = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-a91e17c5-78c1-4fb8-80e7-29d183e6ec91"
        });
        const json = await response.json();
        console.log(json);
    }
    useEffect(() => {
        getRotation();
    }, []);


    return (
        <div>
            {loading ? ( <h1>Loading...</h1> 
            ) : (
                <div>
                    <p>somethingsomething</p>
                </div>
            )
        }
        </div>
    );
}

export default Home;