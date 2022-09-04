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
            },
            {
                id: "3.1",
                title: "Admin Rumors",
                text: 'On 9th of July, 2022. "Sled" made a petition to be promoted as admin. This would mean the club will get a second admin in history. Previously is and currently held by "Troll_face_3640" as the first admin. The club we\'re mixed as they don\'t want to see such a- problematic admin. But the other side is they wanted to see such an entertaining admin following "Sled\'s" unique humor.',
                sub: false
            },
            {
                id: "4",
                title: "The Loli-wars",
                text: 'A period in time where "Sled" just kept going and it seems unstoppable. A period where "Archdruidman" paralyzed and stunned everyone in the replies. During the time "_Nobu" reigned as the king of Lolis. First hints of serious conflict was when a post made on 8th of July where an officer named "Renoss" posted a statement where it goes: "Loli\'s are Overrated."\nImmediately 4 other officers jumped into the response and Immediately straight out disagreed with the statement. Although "HassanIQ9" seems to be agreeing with the statement. Which suddenly created a 1v4 situation between the officers.',
                sub: false,
            },
            {
                id: "4a",
                title: "The Loli Kingdom",
                text: 'Then suddenly later on the replies. "_Nobu" boldly decided to form his/her own kingdom in this club. "_Nobu" named it the Loli Kingdom and it was the very first faction or kingdom existing under the banner of this club. Created exactly on 8th of July, 2022.\nAfter that, the officer\'s moved to Sled\'s post about "Lolis < You". The "Anti-Lolis" lost to the newly formed "Loli Kingdom" and several other allies in this conflict. Although this will drag on to a personal level which might see an officer vs officer argument later on after this conflict.\nMost notably of these ongoing ones are SledMasterFred and HassanIQ9. It is unclear whether these two show some spite or they were joking. (Of course I hope they have a good relationship.) So this was undetermined.',
                sub: true,
            },
            {
                id: "4b",
                title: "The Great Loli Rebellion/The Kingship Dispute.",
                text: 'Not long after the founding of the Loli Kingdom and its newest king. "SledMasterFred" suddenly made a surprise comment about him being the "Chosen King" by the "Lolis."\nApparently "Sled" led the "Great Loli Rebellion" which made "Sled" able to form its own government. "Sled" imposed some laws such as:\n- Abortion is legal.\n- R**e/Consent Laws.\n- Banned the Degenerate Race.\n\nThis of course made "_Nobu" which at the time was de jure a king of the Loli Kingdom at the time. "_Nobu" got into an argument with "Sled" about who was the true "King of the Lolis." So far the public opinions are mixed and whether the "Great Loli Rebellion" did actually happen as there is a lack of evidence and historical accounts following the event. If it were proven true, it would lead to the fastest rebellion in civilization history just 1-3 hours after the founding of the Loli Kingdom. Finally on a post where the dispute is about to be settled. Some members who are also powerful recognize and make "_Nobu" de facto the "King of Lolis."',
                sub: true,
            },
            {
                id: "4c",
                title: "The Crusades.",
                text: 'However news struck as a user named "Broadsider" led the 5th Regime Crusaders to besiege and massacre the Loli Population in the capital city of Rome. "Sled" shockingly joined the crusades and plans to kill the Loli Population aswell after commiting genocide on the Degenerate Race.\n\nAn estimated 45 thousand civilians were killed during the crusade and an estimated 1,000 soldiers perished. It is unknown what the Crusaders lost but it is estimated to have lost 2.4k soldiers during the hard fought battle. The Crusaders are also planning to annex the entire territory and killing everybody in the kingdom, mainly targeting Loli\'s and Degenerates which at the time were all teenagers.',
                sub: true,
            },
            {
                id: "4.1",
                title: 'Love is War?',
                text: '"Keithjustkeith" Returns to the spotlight once again. After hitting a club record of 1 thousand replies in a single post. Everyone now wants love from the President.\n\nClub officer "kerr_caprices" confess his/her feelings (well if you can call that) by dedicating a shrine built for the president. Immediately, club member "NoLifeKiing" made the shrine with candles and with the inscribed words "our president" on the candles.\n\nAlthough "HassanIQ9" didn\'t really bring in the idea since "Hassan" knew the president likes lolis. "Hassan" didn\'t show any resistance against the idea so the officers who discussed did agree or stay neutral.\n\n"kerr_caprices" made further advancements by stating "Prez, We believe in your lolicon tendencies." Although this time "HassanIQ9" did show some resistance by stating that "Loli\'s have no right to live." "Sled" agreed with "Hassan\'s" point. The president boldly stated "no comment" within the replies and suddenly 2 other members are  also trying to earn the president\'s love. Club member "XxDIY_INGXx" and officer "Yatagarasu17" tried to lure the president with such careful and gentle words. Of course "kerr" will try to stop that so he/she promised the president to "tame" him/her.\n\nThen later on, "Yatagarasu17" made multiple advancements and questions like asking the president\'s "boob size" and "ass width." Most notably is the "Who would you smash in this club?" Question where "Yata" also mentioned that "Prez is all mine."\n\nImmediately when this document was written, 92 replies were made and some other members or officers are hinted to show interest to the president. Club officer and the king of the Loli Kingdom "_Nobu" stated that "prez has always been part of my harem." Club member "Under-dog" also showed love interests too. Therefore most members and officers that showed interest agreed to a period where they shared the president together.\n\nAlthough some barriers we\'re made when the president or "Keithjustkeith" asked if he\'s/she\'s getting protected or going to have a sex session with "Yatagarasu17" of course other members tried to get his/her attention which it worked.\n\nOther notable moments are made when "HassanIQ9" which is now known as a tsundere to "SledMasterFred" where he/she answered "Sledddddd" to the question made before. Although he reversed it by stating that he was smashing his head and sending nukes to "Sled\'s" hometown.\n\n',
                sub: false,
            }
        ]
    }
});

export default loreReducer.reducer;