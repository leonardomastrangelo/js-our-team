/**
 * * MILESTONE 0 *
*/
const teammates = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        profileImg : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        profileImg : "img/angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        profileImg : "img/walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        profileImg : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        profileImg : "img/scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        profileImg : "barbara-ramos-graphic-designer.jpg"
    }
]

/**
 * * MILESTONE 1 *
*/
for (let i = 0; i < teammates.length; i++) {
    const element = teammates[i];
    console.group("mate");
    console.log(element.name);
    console.log(element.role);
    console.log(element.profileImg);
    console.groupEnd();
}
