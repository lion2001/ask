function topBtm(id){
  let divs = document.getElementsByClassName("top-div")
  let imgs = document.getElementsByClassName("topBtm")
  let target = document.getElementById(id)
  let index = 0
  for(;index<divs.length;index++){
    if (divs[index]===target){
      imgs[index].style.display = "block"
      divs[index].style.color = 'black'
    }else {
      imgs[index].style.display = "none"
      divs[index].style.color = '#8590BA'
    }
  }
}

function searchHover(id){
  let element = document.getElementById(id)
  element.src = '../public/img/search_hover.png'
}

function searchOut(id){
  document.getElementById(id).src = '../public/img/search.png'
}
