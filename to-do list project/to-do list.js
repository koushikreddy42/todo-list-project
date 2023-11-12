let todo_array = [];

document.querySelector('.add-button').addEventListener("click",()=>
{
    take_todos();
}
)
function display_todos()
{
    let final_html='';
    todo_array.forEach(
        (value,index)=>
        {
        let {name,date} = value;
        final_html+=`
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-button">Delete</button>
        `
        }
    )
    document.querySelector('.display-class').innerHTML=final_html;
    document.querySelectorAll('.delete-button').forEach(
        (button,index)=>
        {
            button.addEventListener("click",
                ()=>
                {
                    todo_array.splice(index,1);
                    display_todos();
                }
            )
        }
    )
}

function take_todos()
{
    let name_ele=document.querySelector('.name-class');
    let date_ele=document.querySelector('.date-class');
    let obj = {
        name:name_ele.value,
        date:date_ele.value
    }
    todo_array.push(obj);
    display_todos();
}