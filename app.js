const tbody = document.getElementById('tbody-rows')

const linkList = document.getElementById('linkList')

const menu = document.getElementById('menu-icon')

const darkMode = document.getElementById('dark-mode')

/* inner  html */
const template = ` <tr class="tbody-row">
              <td>
                <input type="checkbox" class="checkbox">
              </td>
              <td>1</td>
              <td>Christmas 2020</td>
              <td>Food Market <p>Krab</p>
              </td>
              <td>holiday night during chr...</td>
              <td>$2000</td>
              <td>2020/12/24 19:30</td>
              <td>2021/01/02 23:00</td>
              <td class="td-menu">
                <img class="menu-icon " id="menu-icon"
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
                  alt="">
                <div class="menu-container d-none">
                  <menu class="menu-body">
                    <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                      alt="">
                    <span>Duplicate</span>
                    </menuitem>
                    <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                      alt="">
                    <span>Edit</span>
                    </menuitem>
                    <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                      alt="">
                    <span>Delete</span>
                    </menuitem>
                  </menu>

                </div>
              </td>
            </tr>`

for (let i = 0; i <= 30; i++) {
  tbody.innerHTML += template
}

// 左邊項目點擊
function handleLinkClicked(e) {
  const node = e.target.closest('.link')
  if (node) {
    const activeLink = linkList.querySelector('.active')
    activeLink.classList.remove('active')
    node.classList.add('active')
  }
}

//  表格項目點擊
function handleTbodyRowClicked(e) {
  // checkbox
  const node = e.target.closest('.tbody-row')
  if (e.target.classList.contains('checkbox')) {
    e.target.classList.toggle('active')
    node.classList.toggle('active')
  }
  // menu
  if (e.target.classList.contains('menu-icon')){
    const menu = node.querySelector('.menu-container')
    menu.classList.toggle('d-none')
  }
}


function handleDarkModeClicked(e){
  if (e.target.classList.contains('on')){
    e.target.classList.toggle('on')
    document.documentElement.setAttribute('data-theme','dark')
  }else{
    document.documentElement.setAttribute('data-theme', 'light')
    e.target.classList.toggle('on')
  }

}

linkList.addEventListener('click', handleLinkClicked)

tbody.addEventListener('click', handleTbodyRowClicked)

darkMode.addEventListener('click', handleDarkModeClicked)
