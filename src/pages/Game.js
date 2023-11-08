import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";
import { useNavigate } from 'react-router-dom';

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();
    const poster = [
        {
            title: "Pokemon Yellow", id: 1,
            rate: 4,
            genre: "Adventure Game",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_YbZ3zATHkESnJvaSt-8EZmxGArndUTkHLq3aVb0gbZqzbZeq",
            desc: "Pokémon Yellow: Special Pikachu Edition is a remake of the multi-million selling Game Boy video games Pokémon Red and Blue that adapts the TV show's story. Rather than you being able to choose from three different starter Pokémon, there is already only one more Pokémon left, that one being Pikachu."
        },
        {
            title: "Mobile Legends", id: 2,
            rate: 4,
            genre: "MOBA",
            img: "https://esports.id/img/article/637920200914081250.png",
            desc: "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity; most prominently in Southeast Asiad."
        },
        {
            title: "Growtopia", id: 3,
            rate: 4,
            genre: "Sandbox",
            img: "https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/792214_279519408841086_511418404_o.png?_nc_cat=105&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=-JO7njn_FgcAX_0ewbK&_nc_ht=scontent-sin6-2.xx&oh=00_AfC_DlUB4KJr4J7g3oAE2PchzGCcwB_S-BtST7n5KGutEw&oe=65726D0B",
            desc: "Growtopia is a 2D creative sandbox platformer MMO game originally developed by Seth Robinson of Robinson Technologies alongside Mike Hommel of Hamumu Clubhouse. However, in February of 2017, game developing company Ubisoft bought the rights to the franchise."
        },
        {
            title: "Street Fighter", id: 4,
            rate: 4,
            genre: "Fighting Game",
            img: "https://game.capcom.com/cfn/sfv/as/img/index/mv/mv_ce_en.jpg?h=78b64a2a8c66b50b443aebaa4bb53546",
            desc: "Street Fighter, commonly abbreviated as SF or スト, is a Japanese media franchise centered on a series of fighting video and arcade games developed and published by."
        },
        {
            title: "CS:GO 2", id: 5,
            rate: 4,
            genre: "First Person Shooter",
            img: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1698860631",
            desc: "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2."
        },
        
    ];
    

    const navigateToDetail = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetail(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            
            <div className="rowcoba">
                <div className="column">
                <p id="games">All Games</p>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
                            onClick={() => navigateToDetail(item)} 
                        />
                        {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );

}
