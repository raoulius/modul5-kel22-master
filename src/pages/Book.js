import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";
import { useNavigate } from 'react-router-dom';

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        {
            title: "Seven Husbands of Evelyn Hugo", id: 1,
            rate: 4,
            genre: "Romance, fiction",
            img: "https://m.media-amazon.com/images/I/71ZvnK+4JiL._SY522_.jpg",
            desc: "The Seven Husbands of Evelyn Hugo is a historical fiction novel by American author Taylor Jenkins Reid and published by Atria Books in 2017. The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who, at age 79, gives a final interview to an unknown journalist, Monique Grant."
        },
        {
            title: "On Earth We are Briefly Gorgeous", id: 2,
            rate: 4,
            genre: "Romance",
            img: "https://cdn2.penguin.com.au/covers/400/9781529110685.jpg",
            desc: "On Earth We're Briefly Gorgeous is the debut novel by Vietnamese-American poet Ocean Vuong, published by Penguin Press on June 4, 2019. An epistolary novel, it is written in the form of a letter from a Vietnamese American son to his illiterate mother"
        },
        {
            title: "Harry Potter and the Deathly Hallows (Book 7)", id: 3,
            rate: 5,
            genre: "Fiction, fantasy, mystery",
            img: "https://m.media-amazon.com/images/I/811t1pfIZXL._SY522_.jpg",
            desc: "Harry Potter adalah seri tujuh novel fantasi yang dikarang oleh penulis Inggris J. K. Rowling. Novel ini mengisahkan tentang petualangan seorang penyihir remaja bernama Harry Potter dan sahabatnya, Ronald Bilius Weasley dan Hermione Jean Granger, yang merupakan pelajar di Sekolah Sihir Hogwarts. Inti cerita dalam novel-novel ini berpusat pada upaya Harry untuk mengalahkan penyihir hitam jahat bernama Lord Voldemort, yang berambisi untuk menjadi makhluk abadi, menaklukkan dunia sihir, menguasai orang-orang non penyihir, dan membinasakan siapapun yang menghalangi jalannya, terutama Harry Potter."
        },
        {
            title: "Thinking, Fast and Slow", id: 4,
            rate: 5,
            genre: "Nonfiction, Psychology",
            img: "https://m.media-amazon.com/images/I/4150eh0V-rL.jpg",
            desc: "In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions."
        },
        {
            title: "Atomic Habits", id: 5,
            rate: 5,
            genre: "Nonfiction, personal development",
            img: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/49184/184449/1.jpg",
            desc: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal."
        },
        
    ];

    const navigateToDetail = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="books">Top Books</p>
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
                <p id="books">All Books</p>
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
