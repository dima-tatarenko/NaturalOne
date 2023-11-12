import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  arrArticles: IArticle[]

  // What happens when I want to submit articles to different service
  // Callback on 4 diff functions (?)

  constructor() {
    this.arrArticles = [
      {
        id: 1, title: 'What is an Owlbear?', author: 'Michael Karr', date_published: 'December 2, 2022', category: 'dnd', topic: 'info', image: '', text: `Owlbears are a classic monster in Dungeons & Dragons lore. They’re basically what you’d expect after crossing a giant owl with a bear—just as cute and twice as deadly. They come in a variety of forms, from the snowy owlbear to the skeletal owlbear and two-headed owlbear found in the Infernal Machine Rebuild adventure. Although owlbears are a commonly encountered creature, little is known about their origins and nature. Yet, they can be a fun addition to your D&D game. <h5>Where Do Owlbears Come From?</h5> <p>No one truly knows where owlbears came from. Some say that owlbears are the result of a twisted wizard’s experiments. Others may tell you that they have long seen owlbears in the Feywild. In either event, owlbears are now found throughout forested regions of the Forgotten Realms, D&D’s most popular setting. They are known to live in caves or ruins, where they sleep on beds made of the gnawed bones of their prey. Owlbears occasionally travel together in mated pairs. However, these pairs last only so long as their offspring are young and defenseless, as most of the owlbear’s 20-year lifespan is spent alone.</p>
      
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
      { id: 2, title: 'Welcome to the Party, D&D Beyond!', author: 'DnD Team', date_published: 'April 13th, 2022', category: 'pathfinder', topic: 'update', text: 'Dungeons & Dragons levels up by acquiring the popular digital toolset. Dungeons & Dragons and D&D Beyond have always felt like a part of the same family. That’s why we are excited to welcome everyone at D&D Beyond to formally join us at Wizards of the Coast, bringing together two teams dedicated to continuing to make Dungeons & Dragons easy to run and accessible to all! It’s amazing what D&D Beyond has accomplished since its humble beginnings in 2017, and the D&D team has truly leveled up with this acquisition. With over 10 million users, millions of characters created, and millions of campaigns played, the team of 80 passionate creators across US and Europe have brought so much joy to D&D players around the world, including helping friends and family come together to play through a global pandemic. You’re probably wondering what kind of change might happen as a result of these two teams coming together, so let’s make this clear: we have no plans to stop supporting D&D Beyond. The purchases you’ve made, the characters you’ve created, and the campaigns you’ve run aren’t going anywhere. This is an exciting time for all of us, and growing our team means great things to come. If there’s one thing the D&D and D&D Beyond teams have in common, it’s a desire to continue making your experience playing the World’s Greatest Roleplaying game even better. We’ll have more to share with you later this year, so hone those Perception checks and warm up your dice (digital and otherwise). In the meantime, join us in giving a hearty welcome to D&D Beyond into the Dungeons & Dragons family. Welcome to the party, pals!', image: '' },


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
    return this.arrArticles.find(article => {

    })
  }

  addArticle(article: IArticle) {
    this.arrArticles.push(article)
  }


}
