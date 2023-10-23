/**
 * *MILESTONE 0*
*/
const teammates = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        profileImg: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        profileImg: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        profileImg: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        profileImg: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        profileImg: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        profileImg: "barbara-ramos-graphic-designer.jpg"
    }
]

/**
 * *MILESTONE 1*
*/
for (let i = 0; i < teammates.length; i++) {
    const element = teammates[i];
    console.group("mate");
    console.log(element.name);
    console.log(element.role);
    console.log(element.profileImg);
    console.groupEnd();
}

/**
 * *BONUS*
*/
// take div row from html
const row = document.querySelector(".row");

// cycle the array of objects to print mate card in HTML row
for (let i = 0; i < teammates.length; i++) {
    const element = teammates[i];
    col = printMate(element)
}

/**
 * !! FUNCTIONS
 */
function printMate(mate) {
    // create div who will be my col
    const col = document.createElement("div");
    // add to div the class "col"
    col.classList.add("col-4");
    // build main HTML template used for every mate
    let template =
    `
    <div class="card mb-5" style="width: 18rem;">
        <img src="img/${mate.profileImg}" class="card-img-top" alt="">
        <div class="card-body text-center">
            <h5 class="card-title">${mate.name}</h5>
            <p class="card-text">${mate.role}</p>
        </div>
    </div>
    `
    // print template in col
    col.innerHTML = template;
    // append col in row
    row.append(col)
}
