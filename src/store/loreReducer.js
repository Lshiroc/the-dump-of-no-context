import { createSlice } from '@reduxjs/toolkit';

export const loreReducer = createSlice({
    name: "loreReducer",
    initialState: {
        lore: [
            {
                id: "1",
                title: "Intro",
                text: 'With the new update in the MAL mobile app. It allows users from their smartphone to join or create a club with their official app. Because of this, we get to see several clubs rising into fame and climbing the leaderboards to become the biggest club in MAL.\nAs of 8th July 2022. The biggest club in MAL is currently held by "Recommendation Club" with a big 32 thousand members in their club. The second biggest club in MAL is "MAL Update 2.86 - Anime/Manga Tracker" with 30 thousand members. The top 2 clubs are far ahead from their competition. A proof of this is that the third biggest club "Harem&Ecchi Club" only having 19,600 members listed. That\'s a 10 thousand members gap between third place and the top 2.\nBut there is a club that is undergoing a recent spike in popularity. The "Bad Taste Virgins" club is sitting with only 1.4k members to their name. Although on paper it seems like a minor community. It is a very active minor community and it is projected to grow more in the following weeks. So with a bright future waiting for this club. Let\'s take a look back on this club\'s short past.',
                sub: false,
            },
            {
                id: "2",
                title: "Creation Of The Club",
                text: 'On 17th May, 2022. A user called "Keithjustkeith" Creates a club and named it Bad Taste Virgins containing a Giga-Chad meme as their group logo. Troll_face_3460 is the and only admin in this club. Unfortunately it was not clear who was the officers during the early days of the club. The very first post was made by "Keithjustkeith" with the caption saying "First LLLLL" and has no replies yet. On 26th of May 2022. "Keithjustkeith" celebrated his club reaching 30 members. A simple and small milestone but a big one during the early days of a community.\n\nThen 2 days later, the club had surpassed the 100 members milestone. After surpassing the 100 member milestone. "Keithjustkeith" is considering making a discord server for this club to celebrate this achievement. It would eventually go on. However it hasn\'t lived up to the tale. Just 4 days later after the 100 member milestone. The club reached 200 members. It is clear the club is growing bigger and bigger so far.',
                sub: false,
            },
            {
                id: "2a",
                title: "Dub vs Sub Debate",
                text: 'A debate that features members to argue if sub or dub is better. This is an early debate in the club\'s history and sometimes in the replies can turn to literal warfare. Unfortunately this subject is pretty bleak in its documentation but there were some advancements that are made. Earliest form of this kind of post was made by a club member with a caption "Spanish dub > everything else."\n\nAnother kind was found in a post made by "scorpawe" with the post saying "Sub is better than dub. Right guys?" And prompted 24 replies of discussion. Fortunately it was a friendly discussion. Perhaps signs of conflict are found at the "unpopular opinions" post where club member "Superninjaboy2" aggressively stated that he watches dub rather than sub.\n\nIt suddenly disappeared as a topic but later on resurfaced.',
                sub: true,
            }, 
            {
                id: "3",
                title: "The Transition Period",
                text: 'We will start this era from the earliest appearance I can find of what is now the most famous member in this club when this document was written. "SledMasterFred" made his first post about "Is Isekai bad? It seems to be over hated."\nRight after that. A trend of "Rate my taste/list" in the club skyrocketed as many members are asking other members to judge their taste or list. Some went even further by asking members to roast their lists. Perhaps the best one is a post made by "Archdruidman" where it got 97 replies and featured a debate with officer "HassanIQ9."',
                sub: false,
            }
        ]
    }
});

export default loreReducer.reducer;