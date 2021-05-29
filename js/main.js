const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item


function selectItem()
{
    removeBorder();
    removeShow(); //removes show class from every class List

    this.classList.add('tab-border');
    //add border to current tab
    //classList.add is just for adding an HTML class
    //so don't get overwhelmed by that code

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //above LOC grabs the 1st, 2nd or 3rd tab-content

    tabContentItem.classList.add('show');
}

function removeBorder()
{
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
// event listener for tab click

function removeShow()
{
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
