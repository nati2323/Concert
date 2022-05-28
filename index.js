function appear() {  
let readMoreButton = document.getElementById('read-more-button');
  let additionalSingers = document.querySelectorAll('.additional-singers-article');
 
  for (let i = 1; i < additionalSingers.length; i++) {
    if (additionalSingers[i].style.display === 'flex') {
      additionalSingers[i].style.display = 'none';
      readMoreButton.innerHTML = 'Read More >>';
      console.log('if');
    }else {
      additionalSingers[i].style.display = 'flex';
      readMoreButton.innerHTML = '<< Read Less';
    }
  }
}
