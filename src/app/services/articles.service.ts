import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles:Article[]=[];

  constructor() { 
    this.createArticles();
  }

  createArticles(){1
    let article = new Article(
      'pc-backup',
      '¿Cómo hacer un backup del PC? Aprende a no perder tu valiosa información?',
      'Desarrollo web y Tecnología > Crehana.com',
      '28 de febrero de 2022',      
      `¿Te gustaría saber cómo hacer un backup del PC? Las copias de seguridad forman una parte muy importante de la seguridad TIC de las empresas y de tus proyectos personales, ya que sin estos respaldos de información, podrías quedarte sin sus datos, uno de los bienes no materiales más importantes de cualquier proyecto.

      Por eso es importante que aprendas cómo hacer un backup del PC, y lo realices sin importar dónde te encuentres.`,
      'La forma oficial de ejecutar el conjunto de pruebas de WordPress es terriblemente complicada y propensa a errores del usuario. Touchstone soluciona ambos problemas al facilitar el proceso de creación y ejecución de pruebas.',
      'https://www.crehana.com/pe/blog/desarrollo-web/como-hacer-backup-pc/'
      );
    this.articles.push(article);

    article = new Article(
      'tendencias',
      '8 tendencias de diseño web que marcarán 2022',
      'Tendencias FrontEnd > profile.es',
      '26 de febrero de 2022',      
      'A continuación, repasamos las tendencias en diseño web que tendrán un gran impacto este 2022 a través de ejemplos reales de sitios web. Veremos las particularidades de cada una de ellas, lo que podemos conseguir al utilizarlas, así como consejos para utilizarlas correctamente. Sin más demora, vamos a ver las tendencias en diseño de páginas web para 2022.',
      `Estamos muy habituados a utilizar como cursor al tradicional puntero blanco. Pero este año, algunos diseñadores están optado por innovar y cada vez encontramos más páginas web que presentan cursores personalizados.

      Normalmente, los cursores se muestran “desnudos”, sin mucho diseño. Sin embargo, con esta tendencia, pasan a presentar un aspecto único y diferenciado en cada web. La utilización de cursores custom supone asó un paso más hacia la personalización de un sitio web. 
      
      Existen muchas opciones a la hora de personalizar el aspecto del cursor. En los últimos tiempos estamos viendo, por ejemplo, cursores de mayor tamaño y con nuevas formas, como círculos. Eso sí, a la hora de llevar a cabo esta personalización, debemos tener en cuenta el diseño del sitio (se convierte en un elemento de diseño más), la actividad y sector de la empresa, así como el mensaje y las sensaciones que queramos transmitir a los usuarios.
      
      Además del aspecto del cursor, también está ganando popularidad personalizar su comportamiento al interactuar con otros elementos de la web. Por ejemplo, modificando su apariencia (tamaño, color o forma en la que se muestra).
      
      En la web que vemos en la imagen, por ejemplo, encontramos un cursor original con forma de aro, que interactúa al pasar por encima de las imágenes desplazando las mismas y revelando un texto.`,
      'https://profile.es/blog/tendencias-diseno-web/'      
      );

    this.articles.push(article);

    article = new Article(
      'ux-ui',
      '¿Qué es UX y UI? Descubre todo lo que hay detrás en el diseño de un sitio o una app',
      'Desarrollo Web y Tecnología > Crehana.com',
      '22 de febrero de 2022',      
      `Si alguna vez te has preguntado qué es UX o UI y por qué deberían convertirse en dos herramientas importantes en tu know how como profesional, en esta guía te traemos las respuestas necesarias.

      Ya sea si estás algo cansado de escuchar ambos términos en el trabajo o si es la primera vez que te enteras, te revelaremos los secretos tras esta práctica multidisciplinaria. `,
      `Estamos muy habituados a utilizar como cursor al tradicional puntero blanco. Pero este año, algunos diseñadores están optado por innovar y cada vez encontramos más páginas web que presentan cursores personalizados.

      Normalmente, los cursores se muestran “desnudos”, sin mucho diseño. Sin embargo, con esta tendencia, pasan a presentar un aspecto único y diferenciado en cada web. La utilización de cursores custom supone asó un paso más hacia la personalización de un sitio web. 
      
      Existen muchas opciones a la hora de personalizar el aspecto del cursor. En los últimos tiempos estamos viendo, por ejemplo, cursores de mayor tamaño y con nuevas formas, como círculos. Eso sí, a la hora de llevar a cabo esta personalización, debemos tener en cuenta el diseño del sitio (se convierte en un elemento de diseño más), la actividad y sector de la empresa, así como el mensaje y las sensaciones que queramos transmitir a los usuarios.
      
      Además del aspecto del cursor, también está ganando popularidad personalizar su comportamiento al interactuar con otros elementos de la web. Por ejemplo, modificando su apariencia (tamaño, color o forma en la que se muestra).
      
      En la web que vemos en la imagen, por ejemplo, encontramos un cursor original con forma de aro, que interactúa al pasar por encima de las imágenes desplazando las mismas y revelando un texto.`,
      'https://www.crehana.com/bo/blog/desarrollo-web/que-es-ux-y-como-te-ayudara-ser-profesional-completo/'
      );

    this.articles.push(article);

    article = new Article(
      'wordpress',
      '¿Qué es WordPress y para qué sirve? Lo básico para usar esta plataforma',
      'Desarrollo web - Tecnología > Crehana.com',
      '2 de febrero 2022',
      'Conoce qué es WordPress y para qué sirve este CMS que es utilizado por miles de usuarios alrededor del mundo.',
      ' ',
      'https://www.crehana.com/bo/blog/desarrollo-web/wordpress-para-que-sirve/?source_page=blog_home',
    )

    this.articles.push(article);
  }
}
