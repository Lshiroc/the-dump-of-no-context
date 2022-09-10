import { app, database } from '../../../firebaseConfig';
import { collection, addDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { useEffect, useInsertionEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './lore.module.scss';

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

    const getContext = (c_title) => {
        let tempCounter = 0;
        console.log("dsd", allLore);
        let check = '';
        allLore.map(e => {
            tempCounter++;
            if (e.title === c_title) {
                console.log("hueery", e)
                check = [e, tempCounter];
                console.log(tempCounter)
            }
        })
        if (check) {
            console.log("hmm", check[1])
            setContext(check)


            // Finding usernames and replacing them with links
            let temp = check[0].text.split(' ');
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
            let temp = e.title.replaceAll(' ','-').replaceAll('/', '-').replaceAll('?','').replaceAll('\'', '').replace(',', '').replaceAll('.','').toLowerCase();
            console.log(temp)
            if(temp === contentTitle) {
                console.log("found", e.title)
                getContext(e.title);
                check++;
            }
        });
        if(check < 1) {
            getContext("Intro");
        }
    }, [allLore])

    const makeLink = (title) => {
        let tempLink = 'http://127.0.0.1:5173/lore/' + title.replaceAll(' ','-').replaceAll('/', '-').replaceAll('?','').replaceAll('\'', '').replaceAll(',', '').replaceAll('.','').toLowerCase();
        navigator.clipboard.writeText(tempLink);
    }

    return (
        <>
            <div className={`section-x padding-x ${style.loreContainer}`}>
                <div className={style.loreTableContainer}>
                    <h1>Content Of The Lore</h1>
                    <ul className={style.loreTable}>
                        {
                            allLore.map((item) => (
                                item.sub ? (
                                    <ul className={style.loreTableSub}>
                                        <li className={`${style.loreTableSubtitle} ${item.title === context.title ? style.chosen : ''}`}
                                            onClick={() => getContext(item.title)}>{item.title}</li>
                                    </ul>
                                ) : (
                                    <li className={`${style.loreTableTitle} ${item.title === context.title ? style.chosen : ''} `} 
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
                        <div className={style.prev}>previous</div>
                        <div className={style.next}>next</div>
                    </div>
                </div>
            </div>
        </>
    )
}
