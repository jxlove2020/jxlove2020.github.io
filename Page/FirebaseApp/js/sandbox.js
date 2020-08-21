const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
    // console.log(recipe.created_at.toDate());
    let time = recipe.created_at.toDate().toLocaleDateString();
    let html = `
        <li data-id="${id}" style="list-style:none;">
        <div style="background:rgba(250,150,150, 0.5); border-bottom: 1px solid #fff;">
            <div style="padding:5px 10px; font-weight:bold">${recipe.title} <span class="badge badge-pill bg-warning mx-3">${time}</span><button class="badge badge-danger" style="float:right">x</button></div>
        </div>
        </li>
    `;

    list.innerHTML += html;
}

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}

// get documents
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
    console.log(snapshot.docChanges());
});

// db.collection('recipes').get().then((snapshot)=>{
//     // when we have the data
//     // console.log(snapshot.docs);
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//         addRecipe(doc.data(), doc.id);
//     });
// }).catch((err) =>{
//     console.log(err);
// });

// add documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const receipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(receipe).then(() =>{
        document.querySelector('input').value = "";
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    })
})

// deleting data
list.addEventListener('click', e=> {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        console.log(e.target.parentElement.parentElement);
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        }).catch(err => {
            console.log(err);
        })
    }
});

// unsub from database changes
button.addEventListener('click', () => {
   unsub();
    console.log('unsubscribed from collection changes');
});