function pageLoad() {
    h1.innerText = "Vote for Your Canidate"
    document.body.style.backgroundImage = "url('images/large voting website background.jpg')"
};

let moveNumber = 0;
let candidate = 1;
let music = new Audio("sounds/static.mp3")
function nixonbuttonClick(nixButton) {
    if (candidate != 20) {

        text.innerText = "Your vote has been submitted"
        let applause = new Audio("sounds/applause3.mp3")
        applause.play()

        let banner = new Audio("sounds/starspangledBanner.mp3")
        banner.play()


        candidate = 20;
        // document.body.style.backgroundImage = "initial"
        mainDiv.style.backgroundColor = "initial"
        mainDiv.style.border = "initial"
        h1.style.color = "initial"

        document.body.style.backgroundImage = "url('images/americanFlag.jpg')"
        mainDiv.style.backgroundColor = "white"
        mainDiv.style.border = "black solid 10px"
        h1.innerText = "Good Choice"
        h1.style.color = "black"

        this.style.backgroundColor = "wheat"
        mcgovern.style.backgroundColor = "wheat"
        mcgovern.style.color = "black"
        this.style.width = "120px"
        this.style.height = "50px"
        this.style.fontSize = "initial"

        mcgovern.style.left = "auto"
        mcgovern.style.top = "auto"
        mcgovern.style.bottom = "auto"
        mcgovern.style.backgroundColor = "wheat"
        mcgovern.style.color = "initial"
        mcgovern.style.cursor = "initial";
        music.pause()
    }
}

let text = document.getElementById("text");



function mcgovernbuttonClick(mcButton) {
    if (candidate != 10 && candidate != 20 && candidate != 11 && candidate != 12 && candidate != 13 && candidate != 14 && candidate != 15) {
        candidate = 10;
        document.body.style.backgroundImage = "url('images/friedNixon.png')"
        mainDiv.style.backgroundColor = "transparent"
        mainDiv.style.border = "initial"
        h1.innerText = "Try again..."
        h1.style.color = "white"
        music.play()
        nixon.style.backgroundColor = "gold"
        this.style.backgroundColor = "white"
        this.style.color = "black"
        nixon.style.width = "360px"
        nixon.style.height = "150px"
        nixon.style.fontSize = "50px"
    }

}

function buttonMove(mcClick) {
    if (mcgovern.style.left = "inital" && candidate == 10) {
        mcgovern.style.position = "absolute"
        mcgovern.style.left = "300px"
        mcgovern.style.top = "300px"
        text.style.backgroundColor = "black"
        text.style.color = "white"
        text.innerText = "Try to catch me"
        candidate++
        nixon.style.width = "480px"
        nixon.style.height = "200px"
        nixon.style.fontSize = "75px"
        music.pause()
    } else if (mcgovern.style.left = "300px" && candidate == 11) {
        mcgovern.style.left = "700px"
        mcgovern.style.bottom = "600px"
        text.innerText = "Too Slow"
        let gremlin = new Audio("sounds/gremlin.mp3")
        gremlin.play()
        candidate++;
    } else if (mcgovern.style.left = "700px" && candidate == 12) {
        mcgovern.style.left = "1100px"
        mcgovern.style.top = "900px"
        text.innerText = "Haha"
        let womanLaugh = new Audio("sounds/womanLaugh.mp3")
        womanLaugh.play()
        candidate++;
    } else if (mcgovern.style.left = "1100px" && candidate == 13) {
        mcgovern.style.left = "100px"
        mcgovern.style.top = "200px"
        mcgovern.style.backgroundColor = "transparent"
        mcgovern.style.backgroundImage = "url('images/fortniteBanana.png')"
        mcgovern.style.color = "red"
        text.innerText = `You aren't going to catch me... Where did I go?`
        mcgovern.style.cursor = "url(images/Small-redx-cursor.png), pointer";
        let villager = new Audio("sounds/villager_2.mp3")
        villager.play()
        candidate++;
    } else if (mcgovern.style.left = "100px" && candidate == 14) {
        let creeper = new Audio("sounds/creeper_new.mp3");
        creeper.play();

        mcgovern.style.left = "1050px"
        mcgovern.style.top = "650px"
        mcgovern.style.backgroundColor = "wheat"
        mcgovern.style.backgroundImage = "url('images/fortniteBanana.png')"
        mcgovern.style.color = "black"
        text.innerText = `This is your last chance, vote for Nixon!`
        mcgovern.style.marginLeft = "30px"
        this.removeEventListener("mouseover", buttonMove)
        candidate++;
    }
}



function contextMenu(mcContext) {
    alert("You have found the secret context menu. Well, it does nothing so you're better off closing it.")
}

function mouseMove(docmouseMove) {
    nixon.style.cursor = "url(images/smallcheckmarkCursor.png), pointer";
}

function finalClick(mcfinalClick) {
    if (candidate == 15) {
        text.innerText = `Thank you for voting for Nixon`
        text.style.color = "black"
        text.style.backgroundColor = "white"
        h1.innerText = "Your Vote has been Submitted"

        mainDiv.style.backgroundColor = "initial"
        mainDiv.style.border = "initial"
        h1.style.color = "initial"

        document.body.style.backgroundImage = "url('images/americanFlag.jpg')"
        mainDiv.style.backgroundColor = "white"
        mainDiv.style.border = "black solid 10px"

        nixon.style.backgroundColor = "wheat"
        mcgovern.style.backgroundColor = "wheat"
        mcgovern.style.color = "black"
        nixon.style.width = "120px"
        nixon.style.height = "50px"
        nixon.style.fontSize = "initial"

        mcgovern.style.left = "auto"
        mcgovern.style.top = "auto"
        mcgovern.style.bottom = "auto"
        mcgovern.style.backgroundColor = "wheat"
        mcgovern.style.color = "initial"
        mcgovern.style.cursor = "initial";

        let applause = new Audio("sounds/applause3.mp3")
        applause.play()

        let banner = new Audio("sounds/starspangledBanner.mp3")
        banner.play()
        creeper.pause()
        womanLaugh.pause()
    }
}

function randomElements(fortnite) {
    for (i = 0; i <= 10; i++) {
        let rE = document.createElement("div");
        main.appendChild(rE)
    }
}

let test;

function moveMouse(event) {
    if (candidate == 20 && text.innerText == "Your vote has been submitted"&& test != "test") {
        let flagImage = document.createElement("img")
        flagImage.id = `flag`;
        test = "test";
        main.appendChild(flagImage)
    }

    if (candidate == 20 && text.innerText == "Your vote has been submitted") {

        let divCoords = this.getBoundingClientRect();

        let buttonCoords = {
            top: event.clientY - divCoords.top - mainDiv.clientTop - flag.clientHeight / 2,
            left: event.clientX - divCoords.left - mainDiv.clientLeft - flag.clientWidth / 2
        }


        if (buttonCoords.top < 0) {
            buttonCoords.top = 0;
        }
        if (buttonCoords.left < 0) {
            buttonCoords.left = 0
        }
        if (buttonCoords.left + flag.clientWidth > mainDiv.clientWidth) {
            buttonCoords.left = mainDiv.clientWidth - flag.clientWidth
        }
        if (buttonCoords.top + flag.clientHeight > mainDiv.clientHeight) {
            buttonCoords.top = mainDiv.clientHeight - flag.clientHeight;
        }

        flag.style.left = buttonCoords.left + 'px'
        flag.style.top = buttonCoords.top + 'px'
    }
}


// function reverseGeocodingWithGoogle(latitude, longitude) {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?
//         latlng=${latitude},${longitude}&key={GOOGLE_MAP_KEY}`)
//     .then( res => res.json())
//     .then(response => {
//         console.log("User's Location Info: ", response)
//      })
//      .catch(status => {
//         console.log('Request failed.  Returned status of', status)
//      })
//   }


let nixon = document.getElementById("nixon")
let mcgovern = document.getElementById("mcgovern")
let mcClick = document.getElementById("mcgovern")
let mcContext = document.getElementById("mcgovern")
let docmouseMove = document.getElementById("nixon")
let mcfinalClick = document.getElementById("mcgovern")
let randomE = document.getElementById("mcgovern")
let moveFlag = document.getElementById("mainDiv")

mcClick.addEventListener("mouseover", buttonMove)
nixon.addEventListener("click", nixonbuttonClick)
mcgovern.addEventListener("click", mcgovernbuttonClick)
mcContext.addEventListener("contextmenu", contextMenu)
document.addEventListener("DOMContentLoaded", pageLoad)
docmouseMove.addEventListener("onmousemove", mouseMove(docmouseMove))
mcfinalClick.addEventListener("click", finalClick)
randomE.addEventListener("click", randomElements)
moveFlag.addEventListener("click", moveMouse)


