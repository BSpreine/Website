const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
        //console.log(portfolioItem);
    })
    
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
        //console.log(portfolioItem);
    })  
})