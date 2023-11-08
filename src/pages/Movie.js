import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "John Wick", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc: "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned.",
        },
        {
            title: "John Wick", id: 2,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc: "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned.",
        },
        {
            title: "John Wick", id: 3,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc: "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned.",
        },

        {
            title: "Ku Kira Kau Rumah", id: 4,
            rate: 4,
            genre: "Drama",
            img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2023/04/Ku-Kira-Kau-Rumah-364x485.jpg",
            desc: "Bercerita tentang seorang gadis muda bernama Niskala Widiatmika (Prilly Latuconsina) yang didiagnosa mengidap gangguan bipolar sejak remaja. Kondisi psikologis ini menyebabkan perubahan emosi secara konstan dan drastis. Ayahnya, Dedi (Kiki Narendra) begitu protektif hingga Niskala kesulitan menyelesaikan sekolahnya dan hanya boleh berinteraksi dengan dua teman masa kecilnya, Dinda (Shenina Cinnamon) dan Oktavianus (Raim Laode). Saat Dedi bekerja, Dinda dan Oktavianus selalu mengajak Niskala keluar atas izin ibunya, Mella (Unique Priscilla). Ketiga sahabat ini berkuliah di tempat yang sama hingga akhirnya Niskala dipertemukan dengan Pram (Jourdy Pranata). Pria itu bekerja sebagai pelayan di kafe Antologi dan hobi bermain musik akustik. Pram mengagumi Niskala karena kecantikan dan kebaikannya. Dia pun jatuh cinta sampai akhirnya berani melakukan pendekatan."
        },
        {
            title: "Interstellar", id:5,
            rate: 5,
            genre: "Science Fiction, Adventure, Drama",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUw076GR7JpnfExoBLTMpiE9otUzk518SylUdC1roF6Ah63NS9",
            desc: "In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base near Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet."
        },
    ];

    const navigateToDetail = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
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
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
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
