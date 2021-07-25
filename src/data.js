const questions = [
    {
        painting: "Interior from Strandgade 30",
        img: "https://gazette-eu-west2.azureedge.net/media/49717/hammershoi-brunn-rasmussen-2420ne-28-11-19.jpg",
        questionAnswer: "Vilhelm Hammershøi",
        info: "Vilhelm Hammershøi, often written in English Vilhelm Hammershoi, was a Danish painter. He is known for his poetic, subdued portraits and interiors."
    },
    {
        painting: "The Night Watch",
        img: "https://blog.singulart.com/wp-content/uploads/2019/10/nightwatch2.jpg",
        questionAnswer: "Rembrandt",
        info: "Rembrandt Harmenszoon van Rijn was a Dutch draughtsman, painter, and printmaker. An innovative and prolific master in three media, he is generally considered one of the greatest visual artists in the history of art and the most important in Dutch art history."
    },
    {
        painting: "The Milkmaid",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/1200px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
        questionAnswer: "Johannes Vermeer",
        info: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle class life. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and The Hague."
    },
    {
        painting: "The Hunters in the Snow",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/1200px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
        questionAnswer: "Pieter Bruegel",
        info: "Pieter Bruegel the Elder was the most significant artist of Dutch and Flemish Renaissance painting, a painter and printmaker, known for his landscapes and peasant scenes; he was a pioneer in making both types of subject the focus in large paintings."
    },
    {
        painting: "The Garden of Earthly Delights",
        img: "https://artsy-media-uploads.s3.amazonaws.com/fjrGRpX29vMJUlmoTJtkfw%2Fgarden+of+earthly+delights+email+thumb.jpg",
        questionAnswer: "Hieronymus Bosch",
        info: "Hieronymus Bosch was a Dutch/Netherlandish painter from Brabant. He is one of the most notable representatives of the Early Netherlandish painting school. His work, generally oil on oak wood, mainly contains fantastic illustrations of religious concepts and narratives."
    },
    {
        painting: "The Music Lesson",
        img: "https://www.rct.uk/sites/default/files/styles/rctr-scale-1010w/public/the%20music%20lessonweb.jpg?itok=6PR0E5Jw",
        questionAnswer: "Johannes Vermeer",
        info: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle class life. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and The Hague."
    },
    {
        painting: "The Death of Marat",
        img: "https://cdna.artstation.com/p/media_assets/images/images/000/630/886/large/final_02.jpg?1594736879",
        questionAnswer: "Jacques-Louis David",
        info: "Jacques-Louis David was a French painter in the Neoclassical style, considered to be the preeminent painter of the era."
    },
    {
        painting: "The Death of Marat",
        img: "https://cdna.artstation.com/p/media_assets/images/images/000/630/886/large/final_02.jpg?1594736879",
        questionAnswer: "Jacques-Louis David",
        info: "Jacques-Louis David was a French painter in the Neoclassical style, considered to be the preeminent painter of the era."
    },
    {
        painting: "The Large Bathers",
        img: "https://www.nationalgallery.org.uk/media/34533/n-6359-00-000039-hd.jpg?center=0.54285714285714282,0.41290322580645161&mode=crop&width=1280&height=960&rnd=132385909733670000",
        questionAnswer: "Paul Cézanne",
        info: "Paul Cézanne was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century."
    },
    {
        painting: "Impression, Sunrise",
        img: "https://sites.create-cdn.net/siteimages/35/9/0/359067/17/5/4/17540833/1000x719.jpg?1564041693",
        questionAnswer: "Claude Monet",
        info: "Oscar-Claude Monet was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it."
    },
    {
        painting: "A Bar at the Folies-Bergère",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/13/Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg",
        questionAnswer: "Édouard Manet",
        info: "Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism."
    },
    {
        painting: "Self Portrait as a Soldier",
        img: "https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/1-self-portrait-as-a-soldier-ernst-ludwig-kirchner.jpg?&targetx=0&targety=-153&imagewidth=700&imageheight=806&modelwidth=700&modelheight=500&backgroundcolor=A8994A&orientation=0",
        questionAnswer: "Ernst Ludwig Kirchner",
        info: "Ernst Ludwig Kirchner was a German expressionist painter and printmaker and one of the founders of the artists group Die Brücke or \"The Bridge\", a key group leading to the foundation of Expressionism in 20th-century art."
    },
    {
        painting: "Erna With Cigarette",
        img: "https://cdn11.bigcommerce.com/s-feud0ek893/images/stencil/2048x2048/products/1910/2179/erna-with-cigarette-1915_painter-ernst-ludwig-kirchner__21407__13690__97116.1567385321.jpg?c=1",
        questionAnswer: "Ernst Ludwig Kirchner",
        info: "Ernst Ludwig Kirchner was a German expressionist painter and printmaker and one of the founders of the artists group Die Brücke or \"The Bridge\", a key group leading to the foundation of Expressionism in 20th-century art."
    },
    {
        painting: "Female Artist",
        img: "https://4.bp.blogspot.com/-pLlaSiC1iL8/WahiyDdjOkI/AAAAAAAASTY/5tNwmo8sNQQJfLbn-6WeJrCYxM-TI1mJwCLcBGAs/w1200-h630-p-k-no-nu/Ernst-Ludwig-Kirchner-_Artistin-Marcella_1910-Br%25C3%25BCckeMuseumBerlin.jpg",
        questionAnswer: "Ernst Ludwig Kirchner",
        info: "Ernst Ludwig Kirchner was a German expressionist painter and printmaker and one of the founders of the artists group Die Brücke or \"The Bridge\", a key group leading to the foundation of Expressionism in 20th-century art."
    },
    {
        painting:"Fränzi in front of Carved Chair",
        img: "https://www.museothyssen.org/sites/default/files/styles/width_600/public/imagen/obras/1961.8_franzi-silla-tallada.jpg",
        questionAnswer: "Ernst Ludwig Kirchner",
        info: "Ernst Ludwig Kirchner was a German expressionist painter and printmaker and one of the founders of the artists group Die Brücke or \"The Bridge\", a key group leading to the foundation of Expressionism in 20th-century art."
    },
    {
        painting: "Marischka Mit Maske",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Otto_Mueller_-_Marischka_mit_Maske_-_1919.jpeg/1414px-Otto_Mueller_-_Marischka_mit_Maske_-_1919.jpeg",
        questionAnswer: "Otto Mueller",
        info: "Otto Müller was a German painter and printmaker of the Die Brücke expressionist movement."
    },
    {
        painting: "Hesitation",
        img: "https://uploads3.wikiart.org/images/paul-klee/hesitation(1).jpg!Large.jpg",
        questionAnswer: "Paul Klee",
        info: "Paul Klee was a Swiss-born German artist. His highly individual style was influenced by movements in art that included expressionism, cubism, and surrealism."
    },
    {
        painting: "Portrait of a Man",
        img: "https://collection.mcnayart.org/records/images/xlarge/1451/2b186eacc2613bc931a13a2ad8df56de2d38003b.jpg",
        questionAnswer: "Erich Heckel",
        info: "Erich Heckel was a German painter and printmaker, and a founding member of the group Die Brücke which existed 1905–1913. His work was part of the art competitions at the 1928 Summer Olympics and the 1932 Summer Olympics."
    },
    {
        painting: "The Poet Max Herrmann-Neisse",
        img: "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2013/05/Grosz-Poet-Max-469x374.jpg",
        questionAnswer: "George Grosz",
        info: "George Grosz was a German artist known especially for his caricatural drawings and paintings of Berlin life in the 1920s. He was a prominent member of the Berlin Dada and New Objectivity groups during the Weimar Republic."
    },



    ]
export default questions
