import '../ratingStars.css'
//links

export default function ratingStars() {
    console.log('ratingstar called')
    let starContainer = document.querySelectorAll(".star-container");
    const submitButton = document.querySelector("#submit");
    const message = document.querySelector("#message");
    const submitSection = document.querySelector("#submit-section");
    const rating = document.querySelector("#rating");

    console.log(starContainer)
    starContainer.forEach((element, index) => {
        console.log(index);
        console.log(element)
        if (element.hasAttribute('listener-attached')) {
            element.addEventListener("click", () => {
                console.log("clicked")
                submitButton.disabled = false;
                if (element.classList.contains("inactive")) {
                    //Fill Star
                    ratingUpdate(0, index, true);
                    rating.value = index + 1;
                    console.log(rating)
                } else {
                    //Regular stars (remove color)
                    ratingUpdate(index, starContainer.length - 1, false);
                    rating.value = index
                    console.log(rating)
                }
            });
        }
        element.setAttribute('listener-attached', 'true');
    });
    const ratingUpdate = (start, end, active) => {
        console.log(start)
        console.log(end)
        console.log(active)
        for (let i = start; i <= end; i++) {
            if (active) {
                starContainer[i].classList.add("active");
                starContainer[i].classList.remove("inactive");
                starContainer[i].firstElementChild.className = "fa-star fa-solid";
            } else {
                starContainer[i].classList.remove("active");
                starContainer[i].classList.add("inactive");
                starContainer[i].firstElementChild.className = "fa-star fa-regular";
            }
        }
        //Message
        let activeElements = document.getElementsByClassName("active");
        if (activeElements.length > 0) {
            switch (activeElements.length) {
                case 1:
                    message.innerText = "Terrible";
                    break;
                case 2:
                    message.innerText = "Bad";
                    break;
                case 3:
                    message.innerText = "Satisfied";
                    break;
                case 4:
                    message.innerText = "Good";
                    break;
                case 5:
                    message.innerText = "Excellent";
                    break;
            }
        } else {
            message.innerText = "";
        }
    };

    return (
        <div class="wrapper">
            <h5 id="message">Rate The Movies</h5>
            <div class="container">
                <div class="star-container inactive">
                    <i class="fa-regular fa-star"></i>
                    <span class="number">1</span>
                </div>
                <div class="star-container inactive">
                    <i class="fa-regular fa-star"></i>
                    <span class="number">2</span>
                </div>
                <div class="star-container inactive">
                    <i class="fa-regular fa-star"></i>
                    <span class="number">3</span>
                </div>
                <div class="star-container inactive">
                    <i class="fa-regular fa-star"></i>
                    <span class="number">4</span>
                </div>
                <div class="star-container inactive">
                    <i class="fa-regular fa-star"></i>
                    <span class="number">5</span>
                </div>
            </div>
            <button id="submit" disabled>Submit</button>
            <div id="submit-section" class="hide">
                <p id="submit-message">Thanks for your feedback</p>
            </div>
        </div >
    )
}