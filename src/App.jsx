// import { collection } from 'firebase/firestore';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const collectionRef = collection(database, "replies");
    const loreRef = collection(database, "lore");
    const [data, setData] = useState([]);
    const [context, setContext] = useState('');
    const [allLore, setLore] = useState([]);
    const lore = useSelector(state => state.loreReducer.lore)
    useEffect(() => {
        setLore(lore);
    }, [])

    useEffect(() => {
        getDocs(collectionRef)
            .then(response => {
                setData(response.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                }))
            })
    }, [])

    // useEffect(() => {
    //     getDocs(loreRef)
    //         .then(response2 => {
    //             setContext(response2.docs.map((item) => {
    //                 return { ...item.data(), id: item.id };
    //             }))
    //         })
    // }, [])

    const getContext = (c_title) => {
        console.log("dsd", allLore);
        let check = '';
        allLore.map(e => {
            if(e.title === c_title) {
                console.log("hueery", e)
                check = e;
            }
        })
        if(check) {
            console.log("hmm", check)
            setContext(check);
        }

    }

    useEffect(() => {
        getContext("Intro")
    }, [allLore])

    // let data = {
    //     username: "velocityd",
    //     reply: "I want them fresh lmao",
    //     date: "8/31/2022",
    //     club: "Bad Taste Virgins"
    // };

    const ganbatte = () => {
        // Add Data
        // addDoc(collectionRef, data)
        // .then(() => alert("Added"))

        //Get Data 
        // getDocs(collectionRef)
        // .then((response) => {
        //     console.log(response.docs.map((item) => {
        //         return {...item.data(), id: item.id};
        //     }))
        // })
    }



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

                {/* <div className="club-info">
        <div className="club-img"></div>
        <div className="club-info-text">
          <h1 className="club-name">Bad Taste</h1>
          <p className="club-info-context">Dolores praesentium libero asperiores architecto laborum quibusdam ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae quis natus pariatur aliquid eum laboriosam est accusantium ea exercitationem.</p>
        </div>
      </div> */}
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
                    {/* <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">velocityd</div>
                                    <div className="reply-author-title">officer</div>
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
                            <p className="reply-text">'I Want Hassan Casselore As A Side Dish'</p>
                        </div>
                    </div>
                    <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">cam-eleon</div>
                                    <div className="reply-author-title">member</div>
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
                            <p className="reply-text">'I prefer them fresh from the womb'</p>
                        </div>
                    </div>
                    <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">cam-eleon</div>
                                    <div className="reply-author-title">member</div>
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
                            <p className="reply-text">'I prefer them fresh from the womb'</p>
                        </div>
                    </div>
                    <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">cam-eleon</div>
                                    <div className="reply-author-title">member</div>
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
                            <p className="reply-text">'I prefer them fresh from the womb'</p>
                        </div>
                    </div>
                    <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">cam-eleon</div>
                                    <div className="reply-author-title">member</div>
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
                            <p className="reply-text">'I prefer them fresh from the womb'</p>
                        </div>
                    </div>
                    <div className="reply">
                        <div className="reply-top">
                            <div className="reply-author">
                                <div className="reply-author-img"></div>
                                <div className="reply-author-info">
                                    <div className="reply-author-name">cam-eleon</div>
                                    <div className="reply-author-title">member</div>
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
                            <p className="reply-text">'I prefer them fresh from the womb'</p>
                        </div>
                    </div> */}
                </div>
                <h2 className="section-x padding-x section-title">Lore of legends</h2>
                <div className="section-x padding-x lore">
                    <div className="lore-content">
                        <h4 className="lore-upper">Content</h4>
                        <ul className="lore-titles">
                            {
                                lore.map(e => (
                                    e.sub ? (
                                        <ul>
                                            <li className="lore-content-subtitle" onClick={() => getContext(e.title)}>- {e.title}</li>
                                        </ul>
                                    ) : (
                                        <li className="lore-content-title" onClick={() => getContext(e.title)}>{e.title}</li>
                                    )
                                ))
                            }
                            {/* <li className="lore-content-title">1. Intro</li>
                            <li className="lore-content-title">2. Creation Of The Club
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- Dub vs Sub Debate</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">3. The Transition Period
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- Admin Rumors</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">4. The Loli-Wars
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- The Loli Kingdom</li>
                                    <li className="lore-content-subtitle">- The Great Loli Rebelion/The Kingship Dispute</li>
                                    <li className="lore-content-subtitle">- The Crusades</li>
                                    <li className="lore-content-subtitle">- Love Is War?</li>
                                    <li className="lore-content-subtitle">- The Experienced Tohru (Letter)</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">5. Invasion To Other Clubs
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- Club Rankings</li>
                                    <li className="lore-content-subtitle">- Dub vs Sub Debate II</li>
                                    <li className="lore-content-subtitle">- Religion</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">6. Mass Invasion
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- The Virgins Trial</li>
                                    <li className="lore-content-subtitle">- Attack On Titan</li>
                                    <li className="lore-content-subtitle">- Effects of Mass-Invasion</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">7. No Rules, No Life</li>
                            <li className="lore-content-title">8. Ultimatum
                                <ul className="lore-content-sub">
                                    <li className="lore-content-subtitle">- Personal Opinions</li>
                                    <li className="lore-content-subtitle">- Celebrated or Despised?</li>
                                </ul>
                            </li>
                            <li className="lore-content-title">9. The First Galacticos</li> */}
                        </ul>
                    </div>
                    <div className="lore-item">
                        <h3 className="lore-title">{context.id}. {context.title}</h3>
                        <div className="lore-preview">
                            {/* {lore[0][0].context} */}
                            <p style={{whiteSpace: 'pre-wrap'}}>{context.context}</p>
                            {/* <p className="lore-p">With the new update in the MAL mobile app. It allows users from their smartphone to join or create a club with their official app. Because of this, we get to see several clubs rising into fame and climbing the leaderboards to become the biggest club in MAL.</p>
                            <p className="lore-p">As of 8th July 2022. The biggest club in MAL is currently held by "Recommendation Club" with a big 32 thousand members in their club. The second biggest club in MAL is "MAL Update 2.86 - Anime/Manga Tracker" with 30 thousand members. The top 2 clubs are far ahead from their competition. A proof of this is that the third biggest club "Harem&Ecchi Club" only having 19,600 members listed. That's
                                a 10 thousand members gap between third place and the top 2.</p>
                            <p className="lore-p">But there is a club that is undergoing a recent spike in popularity. The "Bad Taste Virgins" club is sitting with only 1.4k members to their name. Although on paper it seems like a minor community. It is a very active minor community and it is projected to grow more in the following weeks. So with a bright future waiting for this club. Let's take a look back on this club's short past.</p> */}
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