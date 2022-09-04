// import { collection } from 'firebase/firestore';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { useEffect, useInsertionEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const collectionRef = collection(database, "replies");
    const usersRef = collection(database, "users");
    const loreRef = collection(database, "lore");
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [context, setContext] = useState('');
    const [allLore, setLore] = useState([]);
    const [loreText, setLoreText] = useState([]);
    const [test, setTest] = useState([]); // Test
    // const lore = useSelector(state => state.loreReducer.lore);
    const tedd = document.createElement("a");
    const teddText = document.createTextNode("MAL")
    let con = 0;
    tedd.appendChild(teddText);
    // useEffect(() => {
    //     setLore(lore);
    // }, [])

    useEffect(() => {
        getDocs(loreRef)
        .then(response => {
            setLore(response.docs.map((item) => {
                return { ...item.data(), id: item.id};
            }))
        })
    }, [])

    useEffect(() => {
        console.log("lmao ufckin",test);
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
            for(let i = 0; i < temp.length; i++) {
                for(let j = 0; j < users.length; j++) {
                    if(temp[i].includes(users[j].username)) {
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


    // useEffect(() => {

    // }, [context.text])


    return (


        <>
            <header className="section-x padding-x header">
                <nav className="navbar">
                    <h1 className="logo"><a href="#">Dump Of No-Context</a></h1>
                    <ul className="menu">
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#">Replies</a></li>
                        <li className="menu-item"><a href="#">Lore</a></li>
                        <li className="menu-item"><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                {/* <h2 className="section-x padding-x section-title">No-context replies</h2> */}
                <div className="section-x padding-x warning-container">
                    <div className="warning">
                        <p><span className="boldText">Warning: </span> Content of the site should not be taken seriously.</p>
                        <div className="close"><span className="iconify" data-icon="ep:close-bold"></span></div>
                    </div>
                </div>
                <div className="section-x padding-x replies">
                    {
                        data.map((reply) => (
                            <div className="reply">
                                <div className="reply-top">
                                    <div className="reply-author">
                                        <div className="reply-author-img" style={{ backgroundImage: `url('${reply.profilepicture}')` }}></div>
                                        <div className="reply-author-info">
                                            <div className="reply-author-name">{reply.username}</div>
                                            <div className="reply-author-title">{reply.role}</div>
                                        </div>
                                    </div>
                                    <div className="reply-features">
                                        <div className="reply-info-btn">
                                            <span className="iconify" data-icon="akar-icons:info"></span>
                                            <div className="description-box">
                                                <div className="thread">
                                                    <h2 className="thread-title">Why we always like</h2>
                                                    <span className="iconify" data-icon="akar-icons:link-chain"></span>
                                                </div>
                                                <p className="description">
                                                    Dolores praesentium libero asperiores architecto laborum quibusdam ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae quis natus pariatur aliquid eum laboriosam est accusantium ea exercitationem.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-copy">
                                            <span className="iconify" data-icon="fluent:document-copy-24-regular"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="reply-bottom">
                                    <p className="reply-text">{reply.reply.replaceAll("//n", "\n")}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h2 className="section-x padding-x section-title">Lore of legends</h2>
                <div className="section-x padding-x lore">
                    <div className="lore-content">
                        <h4 className="lore-upper">Content</h4>
                        <ul className="lore-titles">
                            {
                                allLore.map(e => (
                                    e.sub ? (
                                        <ul>
                                            <li className="lore-content-subtitle" onClick={() => getContext(e.title)}>- {e.title}</li>
                                        </ul>
                                    ) : (
                                        <li className="lore-content-title" onClick={() => getContext(e.title)}>{e.title}</li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                    <div className="lore-item">
                        <h3 className="lore-title">{context.id}. {context.title}</h3>
                        <div className="lore-preview">
                            {/* {lore[0][0].context} */}
                            <p className="lore-p">
                                {
                                    loreText.map(e => (
                                        typeof(e) === "string" ? e.concat(' ') : e
                                    ))
                                }
                            </p>
                        </div>
                        <div className="keep-reading"><p>Read more in lore</p></div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    created by <a target="_blank" href="https://myanimelist.net/profile/velocityd">velocityd</a> with ❤️
                </div>
            </footer>
        </>
    )
}

export default App