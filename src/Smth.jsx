import React from 'react'

function Smth() {
    let write = "With the new update in the MAL mobile app. It allows users from their smartphone to join or create a club with their official app. Because of this, we get to see several clubs rising into fame and climbing the leaderboards to become the biggest club in MAL.\nAs of 8th July 2022. The biggest club in MAL is currently held by 'Recommendation Club' with a big 32 thousand members in their club. The second biggest club in MAL is 'MAL Update 2.86 - Anime/Manga Tracker' with 30 thousand members. The top 2 clubs are far ahead from their competition. A proof of this is that the third biggest club 'Harem&Ecchi Club' only having 19,600 members listed. That's a 10 thousand members gap between third place and the top 2.\nBut there is a club that is undergoing a recent spike in popularity. The 'Bad Taste Virgins' club is sitting with only 1.4k members to their name. Although on paper it seems like a minor community. It is a very active minor community and it is projected to grow more in the following weeks. So with a bright future waiting for this club. Let's take a look back on this club's short past.";
    console.log(write)
    return (
        <>
            <h1 style={{whiteSpace: "pre-wrap"}}>{write}</h1>
        </>
    )
}

export default Smth