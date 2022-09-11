import { app, database } from '../../../firebaseConfig';
import { collection, addDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { useEffect, useInsertionEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './lore.module.scss';
import loreNav from './../../assets/images/loreNav-icon.svg';
import arrowRight from './../../assets/images/arrow-right-icon.svg';

export default function Lore() {
    const usersRef = collection(database, "users");
    const loreRef = collection(database, "lore");
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [context, setContext] = useState([]);
    const [allLore, setLore] = useState([]);
    const [loreText, setLoreText] = useState([]);
    const [test, setTest] = useState([]); // Test
    const [titleColor, setTitleColor] = useState('');
    const [contentCounter, setContentCounter] = useState('');
    const [mobileLore, setMobileLore] = useState(false);
    const { contentTitle } = useParams();


    useEffect(() => {
        getDocs(loreRef)
            .then(response => {
                setLore(response.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                }))
            })
    }, [])

    useEffect(() => {
        console.log("lmao ufckin", test);
    }, [test])

    // useEffect(() => {
    //     getDocs(collectionRef)
    //         .then(response => {
    //             setData(response.docs.map((item) => {
    //                 return { ...item.data(), id: item.id };
    //             }))
    //         })
    // }, [])

    useEffect(() => {
        getDocs(usersRef)
            .then(response => {
                setUsers(response.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                }))
            })
            .then(() => console.log(users))
    }, [])

    console.log(contentCounter)
    const getContext = (c_title) => {
        let tempCounter = 0;
        console.log("dsd", allLore);
        let check = '';
        allLore.map(e => {
            tempCounter++;
            if (e.title === c_title) {
                console.log("hueery", e)
                check = e;
                // Getting id for making 'previous' and 'next' button links
                setContentCounter(tempCounter);

            }
        })
        if (check) {
            console.log("hmm", check)
            setContext(check)


            // Finding usernames and replacing them with links
            let temp = check.text.split(' ');
            for (let i = 0; i < temp.length; i++) {
                for (let j = 0; j < users.length; j++) {
                    if (temp[i].includes(users[j].username)) {
                        temp[i] = <span className={style.loreUser}><a target="_blank" href={`https://myanimelist.net/profile/${users[j].username}`}>@{users[j].username}</a>&nbsp;</span>;
                        j = users.length;
                    }
                }
            }
            setLoreText(temp);
        }

    }

    useEffect(() => {
        let check = 0;
        allLore.map((e) => {
            let temp = e.title.replaceAll(' ', '-').replaceAll('/', '-').replaceAll('?', '').replaceAll('\'', '').replace(',', '').replaceAll('.', '').toLowerCase();
            console.log(temp)
            if (temp === contentTitle) {
                console.log("found", e.title)
                getContext(e.title);
                check++;
            }
        });
        if (check < 1) {
            getContext("Intro");
        }
    }, [allLore])

    const makeLink = (title) => {
        let tempLink = 'http://127.0.0.1:5173/lore/' + title.replaceAll(' ', '-').replaceAll('/', '-').replaceAll('?', '').replaceAll('\'', '').replaceAll(',', '').replaceAll('.', '').toLowerCase();
        navigator.clipboard.writeText(tempLink);
    }

    return (
        <>
            <div className={style.loreNavContainer}>
                <div className={`section-x padding-x ${style.loreNav}`}>
                    <div className={style.loreTabMobile} onClick={() => setMobileLore(!mobileLore)}>
                        <img src={loreNav} alt="" />
                    </div>
                    <div className={style.pagePath}>Lore <span>{`>`}</span> {context.title} </div>
                </div>
            </div>
            <div className={`section-x padding-x ${style.loreContainer}`}>
                <div className={`${style.loreTableContainer} ${mobileLore ? style.openMobileNav : ''}`}>
                    <h1>Content Of The Lore</h1>
                    <ul className={style.loreTable}>
                        {
                            allLore.map((item, key) => (
                                item.sub ? (
                                    <ul key={key} className={style.loreTableSub}>
                                        <li className={`${style.loreTableSubtitle} ${item.title === context.title ? style.chosen : ''}`}
                                            onClick={() => getContext(item.title)}>{item.title}</li>
                                    </ul>
                                ) : (
                                    <li key={key} className={`${style.loreTableTitle} ${item.title === context.title ? style.chosen : ''} `}
                                        onClick={() => getContext(item.title)}>{item.id}. {item.title}</li>
                                )
                            ))
                        }
                        {/* <li className={`${style.loreTableTitle} ${style.chosen}`}>Intro</li>
                    <li className={style.loreTableTitle}>Loli Kingdom</li>
                    <ul className={style.loreTableSub}>
                        <li className={style.loreTableSubtitle}>Creator</li>
                        <li className={`${style.loreTableSubtitle} ${style.chosen}`}>Judgement of the man</li>
                        <li className={style.loreTableSubtitle}>The Result</li>
                    </ul>
                    <li className={style.loreTableTitle}>Infinity of the KxS</li> */}
                    </ul>
                </div>
                <div className={style.loreContent}>
                    <div className={style.loreTop}>
                        <div className={style.loreTitle} onClick={() => makeLink(context.title)}>{context.id}. {context.title} <span>#</span></div>
                    </div>
                    <div className={style.loreText}>
                        {
                            loreText.map((e) => (
                                typeof (e) === "string" ? e.replaceAll('//n', '\n').concat(' ') : e
                            ))
                        }
                    </div>
                    <div className={style.pagination}>
                        <div className={`${style.prev} ${contentCounter === 1 ? style.disabledBtn : ''}`} onClick={() => getContext(allLore[contentCounter - 2].title)}>previous</div>
                        {
                            contentCounter === 1 || contentCounter === allLore.length ? (
                                <span></span>
                            ) : ''
                        }
                        <div className={`${style.next} ${contentCounter === allLore.length ? style.disabledBtn : ''}`} onClick={() => getContext(allLore[contentCounter].title)}>next</div>
                    </div>
                </div>
            </div>
        </>
    )
}
