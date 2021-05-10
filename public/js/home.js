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

function moreHover(id){
  let elemrnts = document.getElementsByClassName('moreItem')
  switch (id) {
    case 0:
      elemrnts[0].style.color= '#FFCF05'
      break
    case 1:
      elemrnts[1].style.color = '#42D47F'
      break
    case 2:
      elemrnts[2].style.color = '#188AFB'
      break
    case 3:
      elemrnts[3].style.color = '#148CF1'
      break
    case 4:
      elemrnts[4].style.color = '#5775F7'
      break
    case 5:
      elemrnts[5].style.color = '#5769CE'
      break
  }
}

function moreOut(id){
  let elemrnts = document.getElementsByClassName('moreItem')
  elemrnts[id].style.color = '#95999B'
}

function cancle(){
  document.getElementById('ask').style.display = 'none'
}

function up(){
  document.getElementById('ask').style.display = 'block'
}

function canclemy(){
  document.getElementById('my').style.display = 'none'
}

function upmy(index){
  document.getElementById('my').style.display = 'block'
  myPanBtu(index)
}

function myPanBtu(index){
      // let myPanBtus = document.getElementsByClassName('myPanBtu')
  for(  let i = 0;i<3;i++){
    if(i==index)  document.styleSheets[0].addRule('#btu'+i+'::after','display:block')
    else  {
      document.styleSheets[0].addRule('#btu'+i+'::after','display:none')
      console.log(i)
    }
  }
}

