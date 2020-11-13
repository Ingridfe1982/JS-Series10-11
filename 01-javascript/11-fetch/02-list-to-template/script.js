/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById('run').addEventListener("click", () => {

        const target = document.getElementById('target');
        const template = document.getElementById('tpl-hero');

        
            
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                data.forEach(men => {

                    let clone = document.importNode(template.content, true)

                    let name = clone.querySelector(".name");
                    name.textContent = men.name;

                    let alter = clone.querySelector(".alter-ego");
                    alter.textContent = men.alter;

                    let ability = clone.querySelector(".powers");

                    men.abilities.forEach(ability =>{
                    
                        console.log(ability);
                    })

                    target.appendChild(clone); 
    
                });
            });
        
     });
})();
