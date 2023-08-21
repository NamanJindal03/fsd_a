const STARS = 5;
function STAR(element, count){
    this.parentElement = document.querySelector(element);
    this.count = count;
    //generate stars
    this.generateStars();

    //bind events -> addEventListeners
    this.bindEvents();
}

STAR.prototype.generateStars = function (){
    const fragment = document.createDocumentFragment();
    for(let i=1; i<=this.count; i++){
        const tempStarElement = document.createElement('span');
        tempStarElement.classList.add('fa', 'fa-star-o');
        tempStarElement.dataset.ratingValue = i;
        fragment.append(tempStarElement);
    }
    this.parentElement.append(fragment);
}

STAR.prototype.fillColor = function(lastRatedStar){
    for(let i=0; i<this.count; i++){
        this.parentElement.children[i].classList.remove("fa-star");
        this.parentElement.children[i].classList.remove("fa-star-o");

        if(i < lastRatedStar){
            console.log(this.parentElement.children[i]);
            this.parentElement.children[i].classList.add("fa-star");
        }
        else{
            this.parentElement.children[i].classList.add("fa-star-o");
        }
    }
}

STAR.prototype.onClick = function(e){
    console.log(this);
    this.currentRating = e.target.dataset.ratingValue;
    this.fillColor(this.currentRating);
}

STAR.prototype.onMouseOver = function(e){
    const tempRating = e.target.dataset.ratingValue;
    if(!tempRating){
        return;
    }
    this.fillColor(tempRating);
}

STAR.prototype.onMouseLeave = function(e){
    this.fillColor(this.currentRating);
}

STAR.prototype.bindEvents = function () {
    // this.parentElement.addEventListener("click", this.onClick.bind(this));
    // this.parentElement.addEventListener("mouseover", this.onMouseOver.bind(this));
    // this.parentElement.addEventListener("mouseleave", this.onMouseLeave.bind(this));

    // this.parentElement.addEventListener("click", (e) => this.onClick(e));
    // this.parentElement.addEventListener("mouseover", (e)=> this.onMouseOver(e));
    // this.parentElement.addEventListener("mouseleave", (e)=>this.onMouseLeave(e));

    this.parentElement.addEventListener("click", this.onClick);
    this.parentElement.addEventListener("mouseover", this.onMouseOver);
    this.parentElement.addEventListener("mouseleave", this.onMouseLeave);
}

new STAR('#star', STARS);
new STAR('#star1', 10);
