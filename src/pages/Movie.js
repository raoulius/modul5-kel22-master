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
            title: "John Wick 4", id: 1,
            rate: 4,
            genre: "Action, Crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc:"Condemned by the tyrannical High Table to be on the run for the rest of his life, deadly assassin maestro John Wick (2014) embarks on a Sisyphean mission of suicidal fury to decide his fate after the merciless carnage in John Wick: Chapter 3 - Parabellum (2019). At last, John's violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wick's head on a platter. But talk is cheap--now guns have the final say. Can Baba Yaga, the grim messiah of death, make every bullet count in this bloody, once-and-for-all struggle for freedom?"
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "Biography, Drama, History",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            desc:"J. Robert Oppenheimer, the creator of The Atomic Bomb, is put on trial for his supposed communist ties in the past, all while coming to terms with what it meant to change the history of the world for the sake of winning World War Two. This is the story of how America's Prometheus was cast out by The Gods for giving mankind an unthinkable gift: power unlike any other, the power to destroy the world; the power of Olympus."
        },
        {
            title: "Mencuri Raden Saleh", id: 3,
            rate: 5,
            genre: "Drama, Action, Comedy, Drama",
            img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2023/04/mencuri-raden-saleh-364x455.jpg",
            desc:"Film bergenre action, komedi, drama, dan heist ini bermula dari Piko (Iqbaal Ramadhan) dan Ucup (Angga Yunanda) dua anak muda yang tengah kebingungan mencari uang. Piko merupakan seorang mahasiswa seni rupa yang tengah mencari uang untuk memenuhi kebutuhan hidupnya. Untuk mencari uang, sehari-harinya Piko membuat lukisan imitasi untuk dijual. Sementara Ucup merupakan seorang hacker yang andal dalam membobol sistem keamanan.  Suatu hari keduanya mendapatkan tawaran untuk melukis lukisan imitasi dari maestro Raden Saleh. Dengan iming-iming imbalan yang besar, Piko mengiyakan tawaran itu tanpa berpikir panjang. Nominal bayaran tersebut, pikir Piko, cukup untuk membebaskan ayahnya dari penjara. Namun ketika lukisan imitasi telah dibuat, hal yang tak diduga muncul. Piko dan Ucup justru diminta untuk menjalankan misi lain yang begitu gila, yaitu menukar lukisan imitasi tersebut dengan lukisan asli di Istana Negara. Siapa sangka, klien mereka ternyata mantan presiden yang begitu menginkan lukisan “Menangkap Pangeran Diponegoro” karya Raden Saleh. Demi memuluskan keinginannya, sang mantan presiden mengancam Piko dan Ucup jika tak menolak misi tersebut, nyawa ayah Piko salah satunya."
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
