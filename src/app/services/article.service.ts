import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  arrArticles: IArticle[]

  constructor() {
    this.arrArticles = [
      { id: 1, title: 'Unveiling the Mystical Realms: Dungeons and Dragons News Update', author: 'DnDFan247360', date_published: '11/09/2023', category: 'dnd', topic: 'update', summary: 'Dive into the enchanting world of Dungeons and Dragons with the latest news and updates! From new expansions to innovative gameplay features, discover the magic that awaits in the realm of fantasy gaming.', text: 'In the ever-evolving universe of Dungeons and Dragons, where imagination knows no bounds, exciting news has surfaced to captivate the hearts of adventurers and dungeon masters alike. Let\'s embark on a journey through the latest developments in the mystical realms of D&D.', },
      { id: 2, title: 'Navigating New Horizons: Pathfinder Chronicles Unveiled', author: 'JackMeansRandomDude', date_published: '12/09/2023', category: 'pathfinder', topic: 'update', summary: 'Embark on a journey through uncharted territories as Pathfinder enthusiasts rejoice in the latest updates. From expansive adventures to innovative game mechanics, explore the evolving landscape of Pathfinder RPG and delve into the excitement that awaits on the tabletop.', text: 'In the rich tapestry of Pathfinder RPG, where epic quests and mythical encounters abound, exciting developments have emerged to captivate the hearts of seasoned adventurers and fledgling pathfinders alike. Let\'s embark on a journey through the latest revelations in the realm of Pathfinder.' },


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
