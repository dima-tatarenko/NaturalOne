import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  arrArticles: IArticle[]

  constructor() {
    this.arrArticles = [
      { id: 1, title: 'What is an Owlbear?', author: 'Michael Karr', date_published: 'December 2, 2022', category: 'dnd', topic: 'info', text: 'Owlbears are a classic monster in Dungeons & Dragons lore. They’re basically what you’d expect after crossing a giant owl with a bear—just as cute and twice as deadly. They come in a variety of forms, from the snowy owlbear to the skeletal owlbear and two-headed owlbear found in the Infernal Machine Rebuild adventure. Although owlbears are a commonly encountered creature, little is known about their origins and nature. Yet, they can be a fun addition to your D&D game. Where Do Owlbears Come From? No one truly knows where owlbears came from. Some say that owlbears are the result of a twisted wizard’s experiments. Others may tell you that they have long seen owlbears in the Feywild. In either event, owlbears are now found throughout forested regions of the Forgotten Realms, D&D’s most popular setting. They are known to live in caves or ruins, where they sleep on beds made of the gnawed bones of their prey. Owlbears occasionally travel together in mated pairs. However, these pairs last only so long as their offspring are young and defenseless, as most of the owlbear’s 20-year lifespan is spent alone.', },
      { id: 2, title: 'Welcome to the Party, D&D Beyond!', author: 'DnD Team', date_published: 'April 13th, 2022', category: 'pathfinder', topic: 'update', text: 'Dungeons & Dragons levels up by acquiring the popular digital toolset. Dungeons & Dragons and D&D Beyond have always felt like a part of the same family. That’s why we are excited to welcome everyone at D&D Beyond to formally join us at Wizards of the Coast, bringing together two teams dedicated to continuing to make Dungeons & Dragons easy to run and accessible to all! It’s amazing what D&D Beyond has accomplished since its humble beginnings in 2017, and the D&D team has truly leveled up with this acquisition. With over 10 million users, millions of characters created, and millions of campaigns played, the team of 80 passionate creators across US and Europe have brought so much joy to D&D players around the world, including helping friends and family come together to play through a global pandemic. You’re probably wondering what kind of change might happen as a result of these two teams coming together, so let’s make this clear: we have no plans to stop supporting D&D Beyond. The purchases you’ve made, the characters you’ve created, and the campaigns you’ve run aren’t going anywhere. This is an exciting time for all of us, and growing our team means great things to come. If there’s one thing the D&D and D&D Beyond teams have in common, it’s a desire to continue making your experience playing the World’s Greatest Roleplaying game even better. We’ll have more to share with you later this year, so hone those Perception checks and warm up your dice (digital and otherwise). In the meantime, join us in giving a hearty welcome to D&D Beyond into the Dungeons & Dragons family. Welcome to the party, pals!' },


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


}
