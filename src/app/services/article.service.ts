import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  arrArticles: IArticle[]

  // What happens when I want to submit articles to different service
  // Callback on 4 diff functions (?)

  // Article topics can be: info, story, update

  constructor() {
    this.arrArticles = [
      {
        id: 1, title: 'What is an Owlbear?', author: 'Michael Karr', date_published: 'December 2, 2022', category: 'dnd', topic: 'info', image: 'https://media.wizards.com/2022/dnd/images/dnd_owlbear.jpg', text: `Owlbears are a classic monster in Dungeons & Dragons lore. They’re basically what you’d expect after crossing a giant owl with a bear—just as cute and twice as deadly. They come in a variety of forms, from the snowy owlbear to the skeletal owlbear and two-headed owlbear found in the Infernal Machine Rebuild adventure. Although owlbears are a commonly encountered creature, little is known about their origins and nature. Yet, they can be a fun addition to your D&D game. 
        <h5>Where Do Owlbears Come From?</h5> 
        <p>No one truly knows where owlbears came from. Some say that owlbears are the result of a twisted wizard’s experiments. Others may tell you that they have long seen owlbears in the Feywild. In either event, owlbears are now found throughout forested regions of the Forgotten Realms, D&D’s most popular setting. They are known to live in caves or ruins, where they sleep on beds made of the gnawed bones of their prey. Owlbears occasionally travel together in mated pairs. However, these pairs last only so long as their offspring are young and defenseless, as most of the owlbear’s 20-year lifespan is spent alone.</p>
      
        <h5>Fighting an Owlbear</h5>

        <p>An extremely aggressive forest predator, owlbears will often attack without provocation, relying on their brute strength rather than stealth to overcome their prey. When in combat with a party, owlbears will usually try to take out the character posing the greatest threat first, perhaps only shifting their attention if another character is able to draw their focus.</p>

        <p>When facing an owlbear, a low-level party would do well to think strategically. Catch the owlbear unawares by setting up some kind of trap or finding the perfect vantage point for long ranged attacks. Though categorized as a monstrosity, owlbears behave like any other natural predator and are likely to flee if outmatched, unless of course they are cornered or defending their young.</p>

        <p>A highly trained owlbear or one under the sway of a spellcaster, will naturally exhibit different behaviors, such as a lack of self-preservation or a willingness to allow a rider or trainer to fight alongside them.</p>

        <p>Owlbears have Keen Sight and Smell and as a result roll advantage on Wisdom (Perception) checks involving these senses. They get multiple attacks with their beak and claws, dishing out piercing and slashing damage, respectively. With a challenge rating of 3, your standard owlbear makes for a good random encounter for a low-level party looking for a challenge. For a greater challenge, look to the two-headed owlbear.</p>

        <h5>Can You Train an Owlbear?</h5>

        <p>Though fierce, owlbears are trainable and can serve as savage companions to those willing to put in the effort. According to the arcano-biologists at Strixhaven University, owlbears can best be trained using incentives. Muffins and cupcakes can quell an owlbear’s naturally sour stomach, for example. These sour stomachs are so well-documented that the screech of the owlbear is said to resemble the screech of a common owl suffering from stomach pain.</p>

        <p>Owlbears are also best taught new tasks by example, with the trainer acting out the desired tasks. This may mean that a trainer would have to walk on all fours in front of a domesticated owlbear in order to train it as a mount.</p>

        <p>Your hard work could pay off handsomely. There are frontier settlements who actually engage in owlbear racing and elven communities in the forest that encourage owlbears to hunt the grounds beneath their treetop homes as an added measure of defense.</p>

        <h5>Do Owlbears Lay Eggs?</h5>

        <p>Yes, owlbears lay eggs, at least according to lore from an earlier edition of D&D. These eggs are worth up to 2,000 silver each and are highly sought after commodities. With that in mind, including the procurement of black market owlbear eggs into your campaign would likely inspire some interesting player options and story hooks.</p>

        <h5>Can a Druid Wild Shape Into an Owlbear?</h5>

        <p>According to rules as written: no. Owlbears are categorized in fifth edition as monstrosities and not beasts, meaning a druid can’t Wild Shape into one. That being said, the owlbear has similar stats to beasts with the same challenge rating. So, a Dungeon Master may allow a druid to turn into an owlbear without necessarily breaking game balance.</p>
      `,
      },
      {
        id: 2, title: 'Welcome to the Party, D&D Beyond!', author: 'DnD Team', date_published: 'April 13th, 2022', category: 'dnd', topic: 'update', image: 'https://images.ctfassets.net/swt2dsco9mfe/D3gTBfMesQvLPbnamKbFd/8e993119706963d40e6f77f77b9a46ad/MM_2560x1600.jpeg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `Dungeons & Dragons levels up by acquiring the popular digital toolset. Dungeons & Dragons and D&D Beyond have always felt like a part of the same family. That’s why we are excited to welcome everyone at D&D Beyond to formally join us at Wizards of the Coast, bringing together two teams dedicated to continuing to make Dungeons & Dragons easy to run and accessible to all! It’s amazing what D&D Beyond has accomplished since its humble beginnings in 2017, and the D&D team has truly leveled up with this acquisition. With over 10 million users, millions of characters created, and millions of campaigns played, the team of 80 passionate creators across US and Europe have brought so much joy to D&D players around the world, including helping friends and family come together to play through a global pandemic. You’re probably wondering what kind of change might happen as a result of these two teams coming together, so let’s make this clear: we have no plans to stop supporting D&D Beyond. The purchases you’ve made, the characters you’ve created, and the campaigns you’ve run aren’t going anywhere. This is an exciting time for all of us, and growing our team means great things to come. If there’s one thing the D&D and D&D Beyond teams have in common, it’s a desire to continue making your experience playing the World’s Greatest Roleplaying game even better. We’ll have more to share with you later this year, so hone those Perception checks and warm up your dice (digital and otherwise). In the meantime, join us in giving a hearty welcome to D&D Beyond into the Dungeons & Dragons family. Welcome to the party, pals!`,
      },
      {
        id: 3, title: 'The Rules of Spellcasting', author: 'Jeremy Crawford', date_published: 'March 23rd, 2015', category: 'dnd', topic: 'info', image: 'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `
        <p>The worlds of Dungeons & Dragons are filled with magic, and many characters and monsters wield that magic in the form of spells. This month’s installment of Sage Advice focuses on rules that govern the casting of those spells.</p>

        <p>The following questions deal with rules from the Player’s Handbook, especially in chapters 9 and 10. You might want to have the book handy as you read!</p>
        
        <h5>Can a spell with an attack roll be used as the attack in the Attack action or as part of the Extra Attack feature?</h5>
        The short answer is no.</h5>

        <p>As explained in the Player’s Handbook, you can take one action on your turn in combat, in addition to moving. You choose your action from the options available to everyone—options such as Attack, Cast a Spell, and Dash—or you choose from among the special actions you’ve gained from a class, a feat, or another source.</p>

        <p>If you want to cast a spell on your turn, you take the Cast a Spell action. Doing so means you’re not taking the Attack action or any other action. It is true that a number of spells, such as fire bolt and ray of frost, involve making an attack, but you can’t make such an attack without first casting the spell that delivers it. In other words, just because something involves an attack doesn’t mean the Attack action is being used.</p>

        <p>By extension, the Extra Attack feature (given by several classes, including the fighter and paladin) doesn’t let you cast extra attack spells. That feature specifically relies on the Attack action, not the Cast a Spell action or any other action.</p>

        <p>In summary, to make a spell attack, you have to first cast a spell or use a feature that creates the spell’s effect. A game feature, such as Extra Attack, that lets you make an attack doesn't let you cast a spell unless it says it does.</p>

        <h5>Can you use a melee spell attack to make an opportunity attack?</h5>

        <p>You can’t if the spell attack is created by casting a spell. When a creature triggers an opportunity attack from you, you can use your reaction to make a melee attack against it. The opportunity attack doesn’t suddenly give you the ability to cast a spell, such as shocking grasp.</p>

        <p>Each spell has a casting time. A game feature, such as an opportunity attack, doesn’t let you bypass that casting time, unless the feature says otherwise. The War Caster feat is an example of a feature that does let you bypass a 1-action casting time to cast a spell in place of an opportunity attack.</p>

        <p>A few monsters can make opportunity attacks with melee spell attacks. Here’s how: certain monsters—including the banshee, lich, and specter—have a melee spell attack that isn’t delivered by a spell. For example, the banshee’s Corrupting Touch action is a melee spell attack but no spell is cast to make it. The banshee can, therefore, make opportunity attacks with Corrupting Touch.</p>
      
      ` },
      {
        id: 4, title: 'Orcs, Dromaar, and More!', author: 'Michael Sayre', date_published: 'November 7th, 2023', category: 'pathfinder', topic: 'info', image: 'https://fc00.deviantart.net/fs71/f/2012/203/3/2/orc_shaman_by_markmolchan-d5874kg.jpg', text: `
        <p>As we cruise into the final days before the release, we’re getting to the end of these preview blogs, but we figured there’s probably still a few things we can talk about. How about orcs and the updated mixed ancestry rules?</p>

        <p>Orcs are a common ancestry now, and appear among the Player Core options alongside dwarves, goblins, elves, humans, etc. This reflects not just a mechanical change, but also the ever-evolving state of our lore. With the undead hordes of the Whispering Tyrant seething outwards from the Gravelands, the orcs of Belkzen have seen their home transformed into one of the primary battlegrounds, raising their axes and torches high to fend off the encroaching darkness.</p>

        <p>In becoming the vanguard of one of the greatest ongoing struggles threatening the Inner Sea, Belkzen’s orcs have also formed an ever-increasing number of alliances with their neighbors—something that is a source of contention for some of the less friendly holds…but that’s a story for later!</p>

        <p>To help our new orcish allies with their battles, we’ve brushed up a few of their feats, as well. The old Hold Mark feat wasn’t great, especially in the context of some of the improvements we’ve made to ancestry feats; the Orc Weapon Familiarity feat now automatically gives you the benefits that used to require taking Orc Weapon Carnage as soon as you hit 5th level, without needing to spend any further feats. So, we reworked Hold Mark into a new 1st-level feat based on some of the orc holds of Belkzen that gives you training in a key skill and a constant bonus to saves against a specific type of magic—which does stack with the bonus from Orc Superstition, if you want to go that route, allowing orcs to be particularly resilient against certain types of magic!</p>

        <p>As orcish heroes have spread across the Inner Sea, the opportunities for heroes of mixed orcish ancestry to carve out a place for themselves have also multiplied. Dromaars, as children of mixed orc and human ancestry are known in Belkzen, are one of the mixed ancestry examples provided in Player Core. The word dromaar is an orcish word, referring to those drummers whose music sends the hordes marching to war; many of the current generation of dromaar adventurers view themselves as heralds of a new age for orcs in the Inner Sea region.</p>

        <p>While most dromaars from Belkzen have either one human parent and one orc parent or two dromaar parents, dromaars from other parts of Golarion might have some other ancestral mix; orcs and dwarves in Arcadia, for example, have a much more cooperative history together than the orc and dwarf nations of the Inner Sea, and it’s possible that the dromaars on that continent might have a significant population whose ancestry is of mixed dwarf and orc descent.</p>

        <p>Dromaars aren’t the only example of a mixed ancestry presented in Player Core; aiuvarins are people of mixed elven ancestry, typically having a human parent on one side and an elven parent on the other, though other mixes are entirely possible.</p>

        <p>While introducing the aiuvarins, we took the opportunity to clean up some confusion around options like the Elf Atavism feat, which had some unclear interactions with things like the Ancient Elf heritage.</p>

        <p>Previously we’d presented options like aiuvarin and dromaar as human heritages, specifically half-elves and half-orcs. By pulling them out of the human ancestry and making them the first two heritages of the new Mixed Ancestry option, we open up a whole new world of possible options to customize your characters and your worlds. Currently, if you want to make a new Mixed Ancestry that represents people of partial dwarven, gnome, goblin, or other descent, you’ll need to use the example set by the aiuvarin and dromaar heritages to create your own, but in days to come I wouldn’t be surprised to see more mixed ancestry options appearing as we push back the edges of the map and do deeper explorations of Golarion’s other continents.</p>
      
      ` },
      {
        id: 5, title: 'Iconic Encounter: Ties of Shadow ', author: 'Andrew Mullen', date_published: 'October 31st, 2023', category: 'pathfinder', topic: 'story', image: 'https://cdn.paizo.com/a7d62ac8-7f03-00ef-f1f0-83fb8bf332e2/0059e85c-a486-42f9-9c4d-72abf8c4ad25/PZO2121_equipmentopener_FiratSolhan_2000x1600.png', text: `
        <p>“Can you at least tell me what it does?”

        <p>Lem frowned down at the talisman. Feiya had just handed him a cord of braided sinew hung with scraps of fabric and a small yellowed fang.</p>
        
        <p>“All in due time.” Feiya’s coyly reassuring smile almost achieved its goal. Her eyes betrayed her, preoccupied as they were with scanning the darkened corners of the shop. She was on the hunt, and even more terse than usual.</p>
        
        <p>“Out of sight, fang near a vein, yes? Parallel. When the entity manifests, draw its attention. Then,” she growled through a predatory smile, “it’s mine.”</p>
        
        <p>“So,” she chirped, malice evaporated, “the surprise is intentional!”</p>
        
        <p>“Do consider how it might behoove you to be a bit more forthright?” Lem offered cheerfully, shirt pulled over one shoulder as he tied the charm around his bicep. “People appreciate directness! For instance, a witch might clearly label her concoctions in order to assure others that… hrm. Feiya?”</p>
        
        <p>His willowy companion had drifted off around a rack of hats, their broad brims embroidered with scenes of local myths and histories. Lem sighed, dropped his shoulders slightly, and allowed a frown to darken his face. He sidestepped in front of a fitting mirror.</p>
        
        <p>“She’s not listening, is she, Lem?” he asked his reflection morosely.</p>
        
         <p>“No, Lem, I don’t believe she is.” The mirrored image of Lem in the glass straightened, adopting a genteel tone. “Foregoing the pleasure of our company to go ask a spider for its gallbladder. Or some such.” Lem wrinkled his nose at himself. “Remember the rat?”</p>
        
        <p>“How could I forget?” Mirror Lem mourned anew. “All that chittering, night after night. Daji said they preferred the ferns, but I think he just wanted an excuse to make noise when we were sleeping.”</p>
        
        <p>They’d been tracing the Crushing Shadow for a few weeks, following a trail of property damage and strangulations across inland Ravounel. As best they could tell their quarry wasn’t a person, but some sort of magical force. Lem had picked up traces of hatred and want from the recent murder sites, not as acrid as one would expect from a mortal actor. They were attenuated—just not by time. With the most recent victim, they’d arrived right as her gaze became still and empty, yet even with violence so fresh, the emotions were wan and… dusty, was how he’d described it to Feiya. She had immediately agreed, then started down the path that had led to his strange new accessory.</p>
        
        <p>An integral part of this was her nine-tailed fox’s repeated interviews with a rat. It was of utmost importance, Feiya had said, that the rat give the fang of its own free will. Mostly this had meant Lem got to practice the flute and forage for mushrooms for a few hours a day, and eventually Daji had returned triumphant from his protracted negotiations.</p>
        
        <p>Feiya’s “other source” had revealed that, apart from the deceased’s, no flesh or blood were present at the killing. Lem had overheard Feiya mumbling in her sleep twice. The first time, she had mentioned “the lady’s dark and diaphanous wings,” and the second was something about traveling a path of stars. Then Lem shifted in his bedroll and saw Daji’s little red eyes peering at him over his pack. Since then, he’d done his best to ignore her troubled sleep.</p>
        
        <p>Now, here they were in some packrat’s palace, searching hatboxes for traces of an invisible and apparently unliving force with a particular love for flattened tracheae.</p>
        
         <p>“Come now, Sad Lem, your tenebrous friend seems to have it all well in hand,” Mirror Lem reassured. “Just make sure that little—hey!”</p>
        
        <p>A flash of white flitted behind a neat stack of bones. Muddy pawprints led from the ossuary and back to…</p>
        
        <p>Real Lem looked down. “I just washed my feet! Do you know how long it takes to style my hair?” he groaned. “‘Back in a town,’ I thought, ‘do something nice for yourself after weeks of rainy roads.’ Should have known.”</p>
        
        <p>A vulpine snicker sounded from the bones. A pair of red eyes glittered between them, then Daji strolled out into sight, nine tails swaying languidly.</p>
        
        <p>“But Lem, practice makes perfect. Consternation builds character. That is my gift to you—the chance to grow as a performer and a person.” The fox knelt, wriggled as if to jump, then paused. “It was both, by the way. They liked ferns, and I liked needling you.”</p>
        
        <p>Daji launched himself upward with a little yipping laugh, landing both atop a bookshelf and above the pincushion Lem had thrown at him. There was a dejected pah, pahf as the makeshift missile bounced off the shelf and fell to the floor.</p>
      
      ` },
      {
        id: 6, title: 'Critical Recap: Critical Role – The Mighty Nein: Echoes of the Solstice', author: 'Daniel Sloss', date_published: 'March 23rd, 2015', category: 'criticalrole', topic: 'story', image: 'https://images.squarespace-cdn.com/content/v1/58814a7abf629aeb03ec15b1/1547411289759-QMLAKQ7AQSP3LSYYJCZK/Megzilla87-All.jpg', text: `
        <h5>EMPIRE SIBLINGS</h5>

        <p>It has been roughly 7 years since the Mighty Nein helped broker the peace that ended the War of Ash & Light, a war between the Dwendalian Empire and the Kryn Dynasty. The Mighty Nein have kept in contact over the years but have followed their own individual paths to the sea, to family, and to removing corrupt government officials. Beauregard Lionett, an Expositor of the Cobalt Soul, and Caleb Widogast, a powerful mage, followed the trail of Ludinus Da’leth to the Tishtan Excavation Site during the Apogee Solstice.</p>

        <p>Beau and Caleb were captured, with Caleb locked in a silence collar, and then shunted away during the activation of the Malleus Key. They find themselves transported to a graveyard battlefield known as the Incanter’s Rest within the Miskath Strand, or Blightshore. Caleb can speak, which means the collar was deactivated. Caleb transmutes the metal collar into balsa wood and Beau breaks it off his neck, freeing him.</p>

        <p>A fear strikes Caleb’s mind – Trent Ikithon’s same collar may have been deactivated, as well. Trent was Caleb’s former teacher who tortured him and manipulated him into killing his own parents as a teenager. Caleb and the Mighty Nein placed Trent in a similar silence collar before turning him over to be imprisoned in Rexxentrum. Beau wants to return to her wife, the warrior Yasha Nydoorin, before they brainstorm, so they teleport to the Blooming Grove – the home of their friend and healer Caduceus Clay, whom Yasha visited while Beau was in Marquet.</p>

        <h5>TOGETHER AGAIN</h5>

        <p>Beau and Yasha reunite immediately, overjoyed to be safely back together. Caduceus can tell that he needs to pack a bag. Caleb declares that it is time to get the Mighty Nein back together, due to everything that happened during the solstice and his own worries about Trent. They teleport to the ship the Nein Heroez, which is docked in Nicodranas. Admiral Fjord Stone, a hexblade paladin, is below deck making repairs with his partner Jester Lavorre, a cheerful healer. Jester is relieved to see her friends, as her sending spells have not been working.</p>

        <p>Caleb and Beau explain what occurred at the excavation site and Caleb’s worries that Trent may have broken out of the Rexxentrum prison. Fjord and Jester agree to come along and the team takes to the streets of Nicodranas. Sea beasts have wandered into the city, causing chaos that the Zhelezo have been able to tamp down for now. Jester is worried about her mother Marion, so she tries to cast sending again but fails. They do run into Marion’s bodyguard, Bluud, who reassures Jester that Marion is just fine.</p>

        <p>Their last stop is at the home of Veth Brenatto, a retired thief who now runs a camp for children adventurers and is a full-time wife and mother. Veth is stressed, due to dealing with her son Luc and his teenage antics. Luc keeps running away to go adventuring, at one point getting all the way to Alfield, so Veth grounded him. She is also taking care of the kids at her camp, ensuring their safety until their parents arrive.</p>

        <h5>TEEN SPIRIT</h5>

        <p>The Mighty Nein, together again, try to figure out what their plan is. Ruidus is tethered to Exandria, magic has gone haywire, Trent and others could be free. There is a lot to check in on. Jester attempts to scry on Trent, but her attempt fails. Caduceus thinks that stopping Trent is perfect right now. It’s something they can fix at this moment, which is the best thing to do in a crisis. Trent is powerful and if he joins with Ludinus Da’leth, it could spell danger for everyone.</p>

        <p>Veth loves her friends, but she is unwilling to join them this time. She needs to take care of these kids and keep her son safe. Luc breaks out of his room and admonishes his mother for her cowardice, while Caleb admonishes Luc in turn for taking his mother’s love for granted. Veth locks Luc back in his room and again states that she can’t go with her team. Not this time. Caleb reluctantly activates his teleportation circle to the Cobalt Soul in Rexxentrum and the other members of the Mighty Nein leave Veth in Nicodranas.</p>

        <p>However, as the circle begins to fade, Luc busts out of his room once more and hops in. They arrive in the archives with Luc in tow, to the group’s shock. Caleb is horrified – Veth is going to kill him, Luc, and all of them. Luc tries to prove that he knows enough to join them; after all, he’s a senior counselor at the camp. Caleb traps Luc in a wall of force and Luc pleads with each of them one by one. Eventually they all acquiesce, with Caleb vowing to send Luc home the second it gets too dangerous.</p>

        <h5>WORDS FROM BEYOND</h5>

        <p>Ovedo, a Cobalt Soul member, comes to Beau. He explains that the wards of the high level Masked Vault have been dispelled and the vault has possibly been infiltrated, as there are new traps within. An investigator named Aggie has been sent ahead of them. The Masked Vault houses items with the potential to destroy Exandria, so its infiltration is deeply worrisome.</p>

        <p>The Mighty Nein head down to the Vellum Basement and discover that magic mouths have been placed by Trent, taunting Caleb by telling him that solitude has made him stronger and encouraging him to explore the vault. They then meet Rab “Aggy” Agg (he/him, played by Daniel Sloss), a dwarven monk armed with only a foul red tonic wine and the head on his shoulders. Fjord casts see invisibility, discovering a shimmer behind a tapestry, and the combination of his eldritch blasts and Aggie’s headbutt opens a stone wall.</p>

        <p>Aggie immediately activates a necrotic trap and another magic mouth speaks, with Trent threatening to reveal the past crimes of Caleb’s partner, the mage Essek Thelyss, to his leader the Bright Queen. Caleb is now of the belief that they were too easy on Trent and Jester assures him that this time, Trent dies. As they move deeper into the basement, Aggie trips two more traps, the final of which is a disintegration trap. Aggie is disintegrated immediately.</p>

        <h5>WHAT WAS TAKEN</h5>

        <p>With Aggie’s sacrifice, the group reaches the Masked Vault. They discover an empty vial and a piece of paper. The last magic mouth activates, explaining that Trent was called here to release a forgotten nightmare and beckons Caleb to Blumenthal – an illusion of Caleb’s childhood home in flames is left to bait him. Beau comforts Caleb, reminding him of how far he’s come, but Caleb doesn’t care about the taunts. He needs to end Trent before he can harm anyone else.</p>

        <p>Beau takes a look at the lockboxes that held the vial and the paper. The vial contains Adreenis Sap and the other held a binding stone called Athtiri-Mentaal. Adreenis Sap is an unholy ichor distilled from abyssal primordials that can bind the worshipers of abyssal lords to dark powers. The Athtiri-Mentaal is a binding stone that captures powerful entities for study, siphoning, or imprisonment. They usually contain entities from the Calamity or before. This means that Trent is likely going to bind something of great and terrible power to him.</p>

        <p>The Nein are running out of time. Trent won’t wait and he could hurt Essek or other loved ones. They decide to set up Caleb’s magical tower in Beau’s office and rest for the night, then teleport to Blumenthal in the morning. Jester prepares a heroes’ feast and Caleb gives Luc his luck stone and casts wish to create a simulacrum to watch over Luc. The young Brenatto thanks Caleb for being such a good teacher to him, unlike Trent ever was for Caleb.</p>

        <h5>WELCOME HOME</h5>

        <p>A long rest is taken and Luc drinks the experimental potion that he stole from his father, Yeza. This potion gives Luc an arcane boost to his constitution and his confidence soars. Caleb and his simulacrum cast fortune’s favor on everyone and the simulacrum polymorphs into a saber-toothed tiger to protect Luc. They teleport to Blumenthal and see Caleb’s childhood home standing whole once again, despite it having been torn down and rebuilt differently years ago.</p>

        <p>Caleb telepathically tells Trent that he is here. Trent invites him to breakfast, saying that his parents miss him. Caleb tells Beau that he has done what he needed to do in this world. If he doesn’t survive, get Luc to safety. Beau tells him they’re all walking away from this. Fjord senses two undead entities within the home as Caleb goes inside – Fjord and Jester follow while Beau and Yasha go around back.</p>

        <p>Trent Ikithon, gaunt and still wearing the collar around his neck, sits at the table with Caleb’s parents, looking as they did before their deaths at Caleb’s flames. His mother says that Trent has gifted them a second chance. Jester apologizes to Caleb and channels turn undead, revealing the parents as undead entities. Trent then explodes the house, though luckily Fjord, Jester, and Caleb all have fire resistance.</p>

        <h5>NO HOLDS BARRED</h5>

        <p>The Mighty Nein fight against Trent Ikithon, but despite landing numerous hits against him, he continues to evade and take no damage. They realize that he is not physically present within the destroyed house, but must be close. He casts a meteor storm, injuring everyone and knocking Caleb unconscious. The Caleb Simulacrum turns into a T-rex, with Luc riding him. Jester notices a spell cast near a tree and Luc casts see invisibility, seeing the invisible Trent in that spot.</p>

        <p>Caduceus casts Mass Heal, healing everyone back to full health. Jester casts anti-magic field, revealing Trent to all, and Beau and Yasha surround him. Trent chooses to break the Athtiri-Mentaal stone and push it into his chest, creating a shadowy portal from which a massive entity of swirling darkness emerges. This is Omentis, Scion of Ruin, and it is heading towards the small town of Blumenthal. Townsfolk begin to fall just from the aura of its necrosis.</p>

        <p>The group chases after Omentis, with Fjord flying and Caleb polymorphed into a white dragon. Luc casts enlarge on his T-rex and Caduceus casts holy weapon on Yasha’s sword Scaldsaber. Jester casts gate, pulling her best friend, one-time god, and archfey Artagan to the fight for assistance. Yasha does an incredible amount of damage to the entity, backed up by her wife Beau, who lowers the dragon’s resistance to ice damage.</p>

        <h5>FINAL BLOWS</h5>

        <p>Caleb spots the strange, egg-like shard still pulsing in the chest of Omentis. Fjord dodges numerous attacks from the entity while Caleb!dragon vomits ice onto it and scares the townspeople away to safety. Luc strikes that egg with his mother’s spell and crossbow, causing the entity to flicker. Caduceus gets a divine intervention from the Wildmother, making the ichor clear and allowing everyone to see the egg and the hanging shadow of Trent within its chest.</p>

        <p>Beau climbs the side of Omentis and attempts to rip out the artifact. She successfully pulls it out and throws it into the mouth of Caleb!dragon. The tendrils hook into Trent’s body and pull him into the egg as Caleb catches it with ice and slams it to the ground. The ice shatters, the egg remains intact, but the entity is resealed and captured. Caleb #2 casts demiplane and places the egg within it for safekeeping.</p>

        <p>The group welcomes Luc to the Mighty Nein. Luc had a great time, but that was extremely scary. He requests to go home, but also to rejoin the Mighty Nein in the future. Caleb says he gets 9 days a year with them. Tonight, they will party, and then take Luc home. Fjord proposes to Jester, who happily accepts. Caleb casts Widogast’s Nascent Nein-Sided Tower, preparing a feast for the Nei and the townspeople. They celebrate their victory, but the sky still holds the leylines of the solstice – this is only the beginning of the work still to be done.</p>

        <p>That is it for this special Critical Role one-shot!</p>
      
      ` },
      {
        id: 7, title: 'The Rules of Spellcasting', author: 'Jeremy Crawford', date_published: 'March 23rd, 2015', category: 'dnd', topic: 'info', image: 'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `
        <p>The worlds of Dungeons & Dragons are filled with magic, and many characters and monsters wield that magic in the form of spells. This month’s installment of Sage Advice focuses on rules that govern the casting of those spells.</p>

        <p>The following questions deal with rules from the Player’s Handbook, especially in chapters 9 and 10. You might want to have the book handy as you read!</p>
        
        <h5>Can a spell with an attack roll be used as the attack in the Attack action or as part of the Extra Attack feature?</h5>
        The short answer is no.</h5>

        <p>As explained in the Player’s Handbook, you can take one action on your turn in combat, in addition to moving. You choose your action from the options available to everyone—options such as Attack, Cast a Spell, and Dash—or you choose from among the special actions you’ve gained from a class, a feat, or another source.</p>

        <p>If you want to cast a spell on your turn, you take the Cast a Spell action. Doing so means you’re not taking the Attack action or any other action. It is true that a number of spells, such as fire bolt and ray of frost, involve making an attack, but you can’t make such an attack without first casting the spell that delivers it. In other words, just because something involves an attack doesn’t mean the Attack action is being used.</p>

        <p>By extension, the Extra Attack feature (given by several classes, including the fighter and paladin) doesn’t let you cast extra attack spells. That feature specifically relies on the Attack action, not the Cast a Spell action or any other action.</p>

        <p>In summary, to make a spell attack, you have to first cast a spell or use a feature that creates the spell’s effect. A game feature, such as Extra Attack, that lets you make an attack doesn't let you cast a spell unless it says it does.</p>

        <h5>Can you use a melee spell attack to make an opportunity attack?</h5>

        <p>You can’t if the spell attack is created by casting a spell. When a creature triggers an opportunity attack from you, you can use your reaction to make a melee attack against it. The opportunity attack doesn’t suddenly give you the ability to cast a spell, such as shocking grasp.</p>

        <p>Each spell has a casting time. A game feature, such as an opportunity attack, doesn’t let you bypass that casting time, unless the feature says otherwise. The War Caster feat is an example of a feature that does let you bypass a 1-action casting time to cast a spell in place of an opportunity attack.</p>

        <p>A few monsters can make opportunity attacks with melee spell attacks. Here’s how: certain monsters—including the banshee, lich, and specter—have a melee spell attack that isn’t delivered by a spell. For example, the banshee’s Corrupting Touch action is a melee spell attack but no spell is cast to make it. The banshee can, therefore, make opportunity attacks with Corrupting Touch.</p>
      
      ` },
      {
        id: 8, title: 'The Rules of Spellcasting', author: 'Jeremy Crawford', date_published: 'March 23rd, 2015', category: 'dnd', topic: 'info', image: 'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `
        <p>The worlds of Dungeons & Dragons are filled with magic, and many characters and monsters wield that magic in the form of spells. This month’s installment of Sage Advice focuses on rules that govern the casting of those spells.</p>

        <p>The following questions deal with rules from the Player’s Handbook, especially in chapters 9 and 10. You might want to have the book handy as you read!</p>
        
        <h5>Can a spell with an attack roll be used as the attack in the Attack action or as part of the Extra Attack feature?</h5>
        The short answer is no.</h5>

        <p>As explained in the Player’s Handbook, you can take one action on your turn in combat, in addition to moving. You choose your action from the options available to everyone—options such as Attack, Cast a Spell, and Dash—or you choose from among the special actions you’ve gained from a class, a feat, or another source.</p>

        <p>If you want to cast a spell on your turn, you take the Cast a Spell action. Doing so means you’re not taking the Attack action or any other action. It is true that a number of spells, such as fire bolt and ray of frost, involve making an attack, but you can’t make such an attack without first casting the spell that delivers it. In other words, just because something involves an attack doesn’t mean the Attack action is being used.</p>

        <p>By extension, the Extra Attack feature (given by several classes, including the fighter and paladin) doesn’t let you cast extra attack spells. That feature specifically relies on the Attack action, not the Cast a Spell action or any other action.</p>

        <p>In summary, to make a spell attack, you have to first cast a spell or use a feature that creates the spell’s effect. A game feature, such as Extra Attack, that lets you make an attack doesn't let you cast a spell unless it says it does.</p>

        <h5>Can you use a melee spell attack to make an opportunity attack?</h5>

        <p>You can’t if the spell attack is created by casting a spell. When a creature triggers an opportunity attack from you, you can use your reaction to make a melee attack against it. The opportunity attack doesn’t suddenly give you the ability to cast a spell, such as shocking grasp.</p>

        <p>Each spell has a casting time. A game feature, such as an opportunity attack, doesn’t let you bypass that casting time, unless the feature says otherwise. The War Caster feat is an example of a feature that does let you bypass a 1-action casting time to cast a spell in place of an opportunity attack.</p>

        <p>A few monsters can make opportunity attacks with melee spell attacks. Here’s how: certain monsters—including the banshee, lich, and specter—have a melee spell attack that isn’t delivered by a spell. For example, the banshee’s Corrupting Touch action is a melee spell attack but no spell is cast to make it. The banshee can, therefore, make opportunity attacks with Corrupting Touch.</p>
      
      ` },
      {
        id: 9, title: 'The Rules of Spellcasting', author: 'Jeremy Crawford', date_published: 'March 23rd, 2015', category: 'dnd', topic: 'info', image: 'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `
        <p>The worlds of Dungeons & Dragons are filled with magic, and many characters and monsters wield that magic in the form of spells. This month’s installment of Sage Advice focuses on rules that govern the casting of those spells.</p>

        <p>The following questions deal with rules from the Player’s Handbook, especially in chapters 9 and 10. You might want to have the book handy as you read!</p>
        
        <h5>Can a spell with an attack roll be used as the attack in the Attack action or as part of the Extra Attack feature?</h5>
        The short answer is no.</h5>

        <p>As explained in the Player’s Handbook, you can take one action on your turn in combat, in addition to moving. You choose your action from the options available to everyone—options such as Attack, Cast a Spell, and Dash—or you choose from among the special actions you’ve gained from a class, a feat, or another source.</p>

        <p>If you want to cast a spell on your turn, you take the Cast a Spell action. Doing so means you’re not taking the Attack action or any other action. It is true that a number of spells, such as fire bolt and ray of frost, involve making an attack, but you can’t make such an attack without first casting the spell that delivers it. In other words, just because something involves an attack doesn’t mean the Attack action is being used.</p>

        <p>By extension, the Extra Attack feature (given by several classes, including the fighter and paladin) doesn’t let you cast extra attack spells. That feature specifically relies on the Attack action, not the Cast a Spell action or any other action.</p>

        <p>In summary, to make a spell attack, you have to first cast a spell or use a feature that creates the spell’s effect. A game feature, such as Extra Attack, that lets you make an attack doesn't let you cast a spell unless it says it does.</p>

        <h5>Can you use a melee spell attack to make an opportunity attack?</h5>

        <p>You can’t if the spell attack is created by casting a spell. When a creature triggers an opportunity attack from you, you can use your reaction to make a melee attack against it. The opportunity attack doesn’t suddenly give you the ability to cast a spell, such as shocking grasp.</p>

        <p>Each spell has a casting time. A game feature, such as an opportunity attack, doesn’t let you bypass that casting time, unless the feature says otherwise. The War Caster feat is an example of a feature that does let you bypass a 1-action casting time to cast a spell in place of an opportunity attack.</p>

        <p>A few monsters can make opportunity attacks with melee spell attacks. Here’s how: certain monsters—including the banshee, lich, and specter—have a melee spell attack that isn’t delivered by a spell. For example, the banshee’s Corrupting Touch action is a melee spell attack but no spell is cast to make it. The banshee can, therefore, make opportunity attacks with Corrupting Touch.</p>
      
      ` },
      {
        id: 10, title: 'The Rules of Spellcasting', author: 'Jeremy Crawford', date_published: 'March 23rd, 2015', category: 'dnd', topic: 'info', image: 'https://images.ctfassets.net/swt2dsco9mfe/9LkRuIR6fI50Wp62IvTBS/c7acc5e562433751b25fbb047d27df93/2560x1600-zodiac.jpg?q=70&fit=thumb&w=2560&h=1600&fm=avif', text: `
        <p>The worlds of Dungeons & Dragons are filled with magic, and many characters and monsters wield that magic in the form of spells. This month’s installment of Sage Advice focuses on rules that govern the casting of those spells.</p>

        <p>The following questions deal with rules from the Player’s Handbook, especially in chapters 9 and 10. You might want to have the book handy as you read!</p>
        
        <h5>Can a spell with an attack roll be used as the attack in the Attack action or as part of the Extra Attack feature?</h5>
        The short answer is no.</h5>

        <p>As explained in the Player’s Handbook, you can take one action on your turn in combat, in addition to moving. You choose your action from the options available to everyone—options such as Attack, Cast a Spell, and Dash—or you choose from among the special actions you’ve gained from a class, a feat, or another source.</p>

        <p>If you want to cast a spell on your turn, you take the Cast a Spell action. Doing so means you’re not taking the Attack action or any other action. It is true that a number of spells, such as fire bolt and ray of frost, involve making an attack, but you can’t make such an attack without first casting the spell that delivers it. In other words, just because something involves an attack doesn’t mean the Attack action is being used.</p>

        <p>By extension, the Extra Attack feature (given by several classes, including the fighter and paladin) doesn’t let you cast extra attack spells. That feature specifically relies on the Attack action, not the Cast a Spell action or any other action.</p>

        <p>In summary, to make a spell attack, you have to first cast a spell or use a feature that creates the spell’s effect. A game feature, such as Extra Attack, that lets you make an attack doesn't let you cast a spell unless it says it does.</p>

        <h5>Can you use a melee spell attack to make an opportunity attack?</h5>

        <p>You can’t if the spell attack is created by casting a spell. When a creature triggers an opportunity attack from you, you can use your reaction to make a melee attack against it. The opportunity attack doesn’t suddenly give you the ability to cast a spell, such as shocking grasp.</p>

        <p>Each spell has a casting time. A game feature, such as an opportunity attack, doesn’t let you bypass that casting time, unless the feature says otherwise. The War Caster feat is an example of a feature that does let you bypass a 1-action casting time to cast a spell in place of an opportunity attack.</p>

        <p>A few monsters can make opportunity attacks with melee spell attacks. Here’s how: certain monsters—including the banshee, lich, and specter—have a melee spell attack that isn’t delivered by a spell. For example, the banshee’s Corrupting Touch action is a melee spell attack but no spell is cast to make it. The banshee can, therefore, make opportunity attacks with Corrupting Touch.</p>
      
      ` },


      // id: string,
      // title: string,
      // author: string,
      // date_published: string,
      // category: string,
      // topic: string,
    ]
  }

  getAll() {
    return this.arrArticles
  }

  getArticle(articleId: number) {
    return this.arrArticles.find(article => article.id === articleId)
  }

  addArticle(article: IArticle) {
    this.arrArticles.push(article)
  }


}
