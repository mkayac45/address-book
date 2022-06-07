import { CREATE_CONTACT,DELETE_CONTACT,UPDATE_CONTACT} from "../constant/types";

const intialState = {
    contacts:[
        {
          "id": 1,
          "name": "Ahmet Sonuç",
          "username": "Lord",
          "email": "Lordum@gmail.com",
          "tw": "/jaho07",
          "ins": "/Jahreinlord",
          "lk": "/jaho",
          "git": "jahreinjaho",
          "country" : "Türkiye",
          "street": "Ahmet sk.",
          "suite": "Apt. 556",
          "city": "Antalya",
          "zipcode": "07000",
          "phone": "+905448633525",
          "website": "jahrein.com",
          "company": "Jaharia",
          "aaddress": "Cumhuriyet cad. ahmet sk. apt.556 no:15 d:4 ",      
        },
        {
          "id": 2,
          "name": "Kemal Can Parlak",
          "username": "KenfineMüzisyen",
          "email": "müzisyen@gmail.com",
          "tw": "müzisyenkendine",
          "ins": "/kendinemüzisyen",
          "lk": "-",
          "git": "-",
          "country" : "Türkiye",
          "street": "Akbelen Blv.",
          "suite": "Zeytin Apt.",
          "city": "Mersin",
          "zipcode": "33000",
          "phone": "+905236548722",
          "website": "kendine.com",
          "company": "BBL",
          "aaddress": "Akbelen Bul.Zeytin Apt. No:15 D:5 Mersin/Merkez/Türkiye",
         
       
        },
        {
          "id": 3,
          "name": "Ali Kır",
          "username": "Kır",
          "email": "ali.net",
          "tw": "ali_2",
          "ins": "/ali",
          "lk": "-",
          "git": "-",
          "country" : "Almanya",
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "Berlin",
          "zipcode": "030000",
          "phone": "+49595904157",
          "website": "ali.com",
          "company": "AliAS TDİ ŞTİ",
          "aaddress": "Douglas Extension Suite 847 No:56 D:12 Berlin/Almanya",
        },
        {
          "id": 4,
          "name": "Turgut Yoğurtçu",
          "username": "ineklerkralı",
          "email": "yoğurtçu46@hotmail.com",
          "tw": "mandıracıdurgut",
          "ins": "peynirdurgut",
          "lk": "-",
          "git": "-",
          "country" : "Türkiye",
          "street": "Sütçü İmam Cad.",
          "suite": "Mandıra Apt.",
          "city": "Kahramanmaraş",
          "zipcode": "46000",
          "phone": "05698453258",
          "website": "www.mandıracıdurgut.com",
          "company": "Turgut Mandıra",
          "aaddress": "Sütçü İmam,Mandıra Apt. No:6 D:12 Kahramanmaraş/Türkiye ",

        },
        {
          "id": 5,
          "name": "Turgut Aslan",
          "username": "Börü",
          "email": "turgutaslan@yahoo.com",
          "tw": "-",
          "ins": "-",
          "lk": "-",
          "git": "-",
          "country" : "Türkiye",
          "street": "Leblebi Cad.",
          "suite": "Yaman Apt.",
          "city": "Çorum",
          "zipcode": "19000",
          "phone": "+905369122233",
          "website": "www.turgutbaskan.com",
          "company": "EGM",
          "aaddress": "Leblebi Cad. Yaman Apt. No:45 D:9 Çorum/Türkiye",
        },
        {
          "id": 6,
          "name": "Jason Statham",
          "username": "jason",
          "email": "jasonstatham@gmail.com",
          "tw": "@jasonstatham",
          "ins": "@jasonstatham",
          "lk": "@jasonstatham",
          "git": "-",
          "country" : "İngiltere",
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "Londra",
          "zipcode": "M99",
          "phone": "+446322511256",
          "website": "ola.org",
          "company": "Hollywood",
          "aaddress": "Norberto Crossing,Apt. 950 İngiltere/Londra",

        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "tw": "Lordum@gmail.com",
          "ins": "Lordum@gmail.com",
          "lk": "Lordum@gmail.com",
          "git": "Lordum@gmail.com",
          "country" : "asdf",
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "phone": "210.067.6132",
          "website": "elvis.io",     
          "company": "Johns Group",
          "aaddress": "doldur",
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "tw": "Lordum@gmail.com",
          "ins": "Lordum@gmail.com",
          "lk": "Lordum@gmail.com",
          "git": "Lordum@gmail.com",
          "country" : "asdf",
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": "Abernathy Group",
          "aaddress": "doldur",
         
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "tw": "Lordum@gmail.com",
          "ins": "Lordum@gmail.com",
          "lk": "Lordum@gmail.com",
          "git": "Lordum@gmail.com",
          "country" : "asdf",
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": "Yost and Sons",
          "aaddress": "doldur",
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "tw": "clementina32",
          "ins": "clementina32",
          "lk": "clementina32",
          "git": "clementina",
          "country" : "Amerika",
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Washington",
          "zipcode": "31428-2261",
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": "Hoeger LLC",
          "aaddress": "Kattie Turnpike,Suite 198,Washington",
        }
      ],
    
};

export const contactReducer = (state = intialState , action) =>{
    switch(action.type){
        case CREATE_CONTACT:
          return{
            ...state,
            contacts:[action.payload, ...state.contacts],
          };
case DELETE_CONTACT:
  console.log("delete",action.payload)
  let arr = state.contacts.filter((contact) => contact.id != action.payload);
  
  return{
    ...state,
    contacts:arr,

  }
  case UPDATE_CONTACT:
    return{
      ...state,
      contacts: state.contacts.map((contact)=>
        contact.id == action.payload.id ? action.payload : contact
      ),
    }
        default:
          return state;
    }
};