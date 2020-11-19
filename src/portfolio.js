
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Soft Skill: Empatia!",
  title: "Falaaa Devs!",
  subTitle: emoji("A Soft Skill que vamos conhecer é a Empatia! Em minha opinião ela é essencial para todos nós, principalmente em nossa área, vamos abordar: O que é essa Soft Skill? Como posso ter mais empatia? Por que ela é a melhor soft skill?"),
  //resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  //github: "",
  linkedin: "https://www.linkedin.com/in/rafael-m-09871b14b/",
  gmail: "miguel.desenvolvimento@hotmail.com",
  //gitlab: "",
  //facebook: "",
  //medium: "",
 //stackoverflow: ""
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "O que é empatia? 😀 ",
  subTitle: "Empatia é a habilidade de se colocar no lugar da outra pessoa. Parece simples não é mesmo? Mas colocá-lo em prática requer paciência e dedicação",
  skills: [
    emoji(" Praticar a empatia requer que não julguemos e encaremos determinada situação considerando apenas a própria perspectiva, experiência e bagagem emocional. Essa soft skill só pode ser exercida se observarmos os problemas e as felicidades pelo ponto de vista da outra pessoa. E não é nada fácil aplicar isso no dia a dia, mas é essencial!"),
    emoji("Hoje com um mercado tão competitivo e nossas rotinas sobrecarregadas de tarefas, quando encontramos pessoas que entendem o que estamos passando e estão dispostas a nos ajudar a resolver nossos problemas, ficamos surpresos não é mesmo? É sobre isso que se trata a empatia! "),
    emoji("Você prefere trabalhar em um ambiente onde seus colegas são egoistas e competitivos, ou prefere trabalhar em uma equipe onde todos deixam de lado o egoísmo e buscam compreender suas dificuldades e tentam ajudar você a melhorar profissionalmente?"),
    emoji("A resposta é clara não é mesmo! 😄 ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: []
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    { 
      schoolName: "Seja Paciente!",
      logo: require("./assets/images/paciencia.png"),
      subHeader: "Esteja disposto a ouvir o problema do seu colega de trabalho, depois procure formas de explicar ou ajudar ele com o problema dele. As vezes pode parecer algo bobo para você, mas para ele é um problemão que está esgotando ele!",
      duration: "Pratique: Procure ainda esse mês conversar com um colega que tenha pouco contato, conheça ele melhor e tente ver o que VOCÊ pode aprender com ele.",
      desc: "",
    },
    {
      schoolName: "Respeite a opinião de outros!",
      logo: require("./assets/images/respeito.png"),
      subHeader: "No ambiente de trabalho é muito comum que haja diversas opiniões diferentes, isso é normal. Mas não significa que devemos iniciar um debate com clima tenso para defender nossas ideias.",
      duration: "É preciso ouvir o posicionamento da pessoa, buscar compreendê-lo, fazer perguntas sobre como será aplicado e caso ele não seja adequado em sua visão, apenas diga: “Não vejo desta maneira, mas respeito a sua opinião”. As vezes é necessário ouvir e ter paciencia para entender como seu colega de trabalho está vendo determinada situação e a solução que ele está apresentando!",
      desc: "Pratique:",
      descBullets: [
        "Tente ainda esse mês pedir a opinião de seus colegas em algum assunto especifico ou caso algum problema ocorra em sua empresa! Você vai ver que algumas vezes não irá concordar, mas será um meio de ter também mais empatia pelos outros, pois essa atitude demonstra que você se importa com a opinião de todos!",
      ]
    },
    {
      schoolName: "Não seja egoísta e pare de julgar!",
      logo: require("./assets/images/Help.png"),
      subHeader: "Pessoas que olham com mais atenção para as necessidades das outras, tornam-se mais leves e empáticas.",
      duration: "Quando chega um Dev novo em sua equipe, e ele não tem conhecimento em alguma tecnologia especifica ou em alguma linguagem que você tem, qual sua primeira reação? Você procura ajuda-lo de imediato a entender e se disponhem em tirar sua dúvidas, ou fica comentando com outros que 'fulano não sabe tal coisa, dá pra acreditar?'. Lembre-se das suas origens, você provavelmente não sabia, teve que estudar e pedir a ajuda de outros em algum momento. Então PARE de julgar e seja proativo em ajudar e dar o suporte que o novo Dev precisa para ser mais produtivo na equipe! Faça a sua parte!",
      desc: "Pratique:",
      descBullets: [
        "Quando alguém novo chegar em sua equipe, seja ele um Dev, Trainee (meu caso 😄), estagiário ou Júnior. Tente conhecer essa pessoa melhor, converse, tire as dúvidas dele e aprenda com ele também! De dicas mostre os outros departamentos da empresa, faça o máximo para que ele se sinta confortável! Se praticarmos isso, teremos um ambiente de trabalho muito melhor em nossa equipe!",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: []
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role:"",
      company: "Cooperação",
      companylogo: require("./assets/images/cooperar.png"),
      date: "A empatia ajuda muito na cooperação!",
      desc: "Pense em uma equipe que é dividida e todos os colaboradores não tem nenhum tipo de empatia. Qual a chance de um projeto ser finalizado com qualidade? Nenhuma! O projeto pode ser finalizado, mas não terá a mesma qualidade que outro projeto onde a equipe é unida! Por que?",
      descBullets: [
        "Quando temos empatia, temos também que entender que cada um vai passar ou já está passando por algum problema em desenvolver alguma feature nova na aplicação, ou desconhece como trabalhar com alguma tecnologia, quando temos a empatia vamos ajudar e alcançar os objetivos juntos em equipe. E isso inclue entender as dificuldades de cada membro da equipe.",

        "A empatia nos ajuda a ver as coisas de um ponto de vista mais positivo. Quando vemos que algum membro da equipe não está conseguindo entender algum conceito, se nós já passamos por isso vamos ter totais condições de ajudar-lo, caso também nunca passamos pela mesma situação, a empatia vai nos motivar a querer entender o problema junto com a equipe ou membro dela e resolver isso da melhor forma possível, ou seja, sempre que temos pessoas com essa qualidade todos saem ganhando!"
      ]
    },
    {
      role: "",
      company: "Quem tem empatia tem disposição em ajudar",
      companylogo: require("./assets/images/ajudar.png"),
      date: "Sim isso é um fato. As pessoas que buscam essa qualidade sempre querem ajudar outros!",
      desc: "Depois de um tempo praticando essa Soft Skill vai perceber que vai ganhar mais respeito de seus colegas de equipe e que você vai se sentir bem melhor no final do dia, logicamente pode estar mais cansado, pois será preciso dedicar mais tempo em ajudar outras pessoas em seus problemas, mas a sensação de ajudar alguém a entender como resolver um problema ou entender um assunto é muito boa. E isso é uma maneira também de fixarmos nossos conhecimento e também de renova-los!",
      descBullets: [
        "É importante também destacar que quem prática a empatia também influência outras pessoas a serem assim. Não adianta você ser um gênio da programação, saber resolver todos os erros e trabalhar com todos os Frameworks e tecnologias disponíveis se você não tiver empatia! Se você for uma pessoa que não gosta de ajudar outros e cria conflitos na equipe, pode ter certeza de que nada vale sua genialidade! É preciso ter equilibrio!"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company
/**
 * 
 * 
 */
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: []
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji(""),
  subtitle: "",

  achievementsCards: [
    
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
   
  ]
};

// Podcast Section

const podcastSection = {};

const contactInfo = {
  title: emoji("Agradecimentos 👏"),
  subtitle: "Gostaria de agradecer a equipe da Rocketseat pelo trabalho excepcional e dedicação a todos os alunos, também gostaria de agradecer a oportunidade de realizar o desafio proposto que me agregou conhecimentos novos!",
  number: "Meu contatos (LinkedIn e E-mail) seguem abaixo:",
  email_address: "miguel.desenvolvimento@hotmail.com"
};

//Twitter Section

const twitterDetails = {};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
