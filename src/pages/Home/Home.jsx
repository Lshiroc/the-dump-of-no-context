import { app, database } from '../../../firebaseConfig';
import { collection, addDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { useEffect, useInsertionEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './home.module.scss';

export default function Home() {
    const collectionRef = collection(database, "replies");
    const usersRef = collection(database, "users");
    const loreRef = collection(database, "lore");
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [context, setContext] = useState('');
    const [allLore, setLore] = useState([]);
    const [loreText, setLoreText] = useState([]);
    const [test, setTest] = useState([]); // Test


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

    useEffect(() => {
        getDocs(collectionRef)
            .then(response => {
                setData(response.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                }))
            })
    }, [])

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
        console.log("dsd", allLore);
        let check = '';
        allLore.map(e => {
            if (e.title === c_title) {
                console.log("hueery", e)
                check = e;
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
                        temp[i] = <span><a target="_blank" href={`https://myanimelist.net/profile/${users[j].username}`}>@{users[j].username}</a>&nbsp;</span>;
                        j = users.length;
                    }
                }
            }
            setLoreText(temp);
        }
    }

    useEffect(() => {
        getContext("Intro")
    }, [allLore])
    return (
        <>
            <main className="main">
                {/* <h2 className="section-x padding-x section-title">No-context replies</h2> */}
                <div className="section-x padding-x warning-container">
                    <div className="warning">
                        <p><span className="boldText">Warning: </span> Content of the site should not be taken seriously.</p>
                        <div className="close"><span className="iconify" data-icon="ep:close-bold"></span></div>
                    </div>
                </div>
                <div className={`section-x padding-x ${style.replies}`}>
                    {
                        data.map((reply) => (
                            <div className={style.reply}>
                                <div className={style.replyTop}>
                                    <div className={style.replyAuthor}>
                                        <div className={style.replyAuthorImg} style={{ backgroundImage: `url('${reply.profilepicture}')` }}></div>
                                        <div className={style.replyAuthorInfo}>
                                            <div className={style.replyAuthorName}>{reply.username}</div>
                                            <div className={style.replyAuthorTitle}>{reply.role}</div>
                                        </div>
                                    </div>
                                    <div className={style.replyFeatures}>
                                        <div className={style.replyInfoBtn}>
                                            <span className='iconify' data-icon="akar-icons:info"></span>
                                            <div className={style.descriptionBox}>
                                                <div className={style.thread}>
                                                    <h2 className={style.threadTitle}>Why we always like</h2>
                                                    <span className="iconify" data-icon="akar-icons:link-chain"></span>
                                                </div>
                                                <p className={style.description}>
                                                    Dolores praesentium libero asperiores architecto laborum quibusdam ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae quis natus pariatur aliquid eum laboriosam est accusantium ea exercitationem.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={style.replyCopy}>
                                            <span className="iconify" data-icon="fluent:document-copy-24-regular"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.replyBottom}>
                                    <p className="reply-text">{reply.reply.replaceAll("//n", "\n")}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h2 className="section-x padding-x section-title">Lore of legends</h2>
                <div className={`section-x padding-x ${style.lore}`}>
                    <div className={style.loreContent}>
                        <h4 className={style.loreUpper}>Content</h4>
                        <ul className={style.loreTitles}>
                            {
                                allLore.map(e => (
                                    e.sub ? (
                                        <ul>
                                            <li className={style.loreContentSubtitle}>- {e.title}</li>
                                        </ul>
                                    ) : (
                                        <li className={style.loreContentTitle}>{e.title}</li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                    <div className={style.loreItem}>
                        <h3 className={style.loreTitle}>{context.id}. {context.title}</h3>
                        <div className={style.lorePreview}>
                            {/* {lore[0][0].context} */}
                            <p className={style.loreP}>
                                {
                                    loreText.map(e => (
                                        typeof (e) === "string" ? e.replaceAll('//n', '\n').concat(' ') : e
                                    ))
                                }
                            </p>
                        </div>
                        <div className={style.keepReading}><p>Read more in lore</p></div>
                    </div>
                </div>
            </main>
        </>
    )
}