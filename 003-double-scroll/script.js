function scrollBlocks() {
  let scrollBlock = document.querySelector('.scroll-block'),
      scrollBlockLeft = document.querySelector('.scroll-block__left'),
      scrollBlockRight = document.querySelector('.scroll-block__right');

  //при прокрутке, в зависимости от направления, трансформируем блоки
  scrollBlock.addEventListener('wheel', function (e){
    if (e.wheelDeltaY < 0) {
      //если раскоментить/закоментить строки, то прокрутка будет
      //единоразовая на всю высоту
      //PS для плавности - увеличиваем transition в Css
      scrollBlockLeft.style.transform += 'translateY(5%)';
      scrollBlockRight.style.transform += 'translateY(-5%)';
      // scrollBlockLeft.style.transform = 'translateY(100%)';
      // scrollBlockRight.style.transform = 'translateY(-100%)';
    } else {
      //если раскоментить/закоментить строки, то прокрутка будет
      //единоразовая на всю высоту
      //PS для плавности - увеличиваем transition в Css
      scrollBlockLeft.style.transform += 'translateY(-5%)';
      scrollBlockRight.style.transform += 'translateY(5%)';
      // scrollBlockLeft.style.transform = 'translateY(-100%)';
      // scrollBlockRight.style.transform = 'translateY(100%)';
    }
  });
}

scrollBlocks();

