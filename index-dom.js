/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      const changeTitle = function (newTitle) {
        //document.title="title Changed"
        let title = document.querySelector("title");
        title.innerText = "title Changed";
        let titleOfThePage = document.querySelector("h1");
        titleOfThePage.innerText = "Something else";
      };

      /*  changeTitle(); */

      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {
        let titleOfThePage = document.querySelector("h1");
        titleOfThePage.classList.add("myHeading");
      };
      /*  addClassToTitle(); */

      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        let pChildOfDiv = document.querySelector("div p");
        pChildOfDiv.innerText =
          "Text of p changed Text of p changed Text of p changed Text of p changed Text of p changed";
      };
      /* changePcontent(); */

      /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

      const changeUrls = function () {
        let anchor = document.querySelector("a");
        anchor.href = "https://www.google.com";
        anchor.text = "The link go to google website";
      };
      /*  changeUrls(); */

      /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

      const addToTheSecond = function (content) {
        let ul = document.getElementById("secondList");
        let li = document.createElement("li");
        li.innerText = "new item";
        ul.appendChild(li);
      };
      addToTheSecond();
      const removeItem = function () {
        let ul = document.getElementById("secondList");
        ul.lastChild.remove();
      };

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      const addParagraph = function (content) {
        let div = document.querySelector("div >p");
        let newParagraph = document.createElement("p");
        newParagraph.innerText =
          "new paragraph new pharagraph new pharagraph new pharagraph";
        div.appendChild(newParagraph);
      };
      /* addParagraph(); */
      const createButtonforNewParagraph = function () {
        let newButton = document.createElement("button");
        newButton.innerText = "new paragraph";
        newButton.style.display = "block";
        newButton.style.marginTop = "10px";
        newButton.addEventListener("click", addParagraph);
        let div = document.querySelector("div >p");
        div.appendChild(newButton);
      };
      createButtonforNewParagraph();
      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      const firstUlDisappear = function () {
        let firstUL = document.getElementById("firstList");
        let btnUlDisappear = document.getElementById("btn-disappear");
        if (btnUlDisappear.innerText === "Hide List") {
          firstUL.style.display = "none";
          btnUlDisappear.innerText = "Show List";
        } else {
          firstUL.style.display = "block";
          btnUlDisappear.innerText = "Hide List";
        }
      };

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      const paintItGreen = function () {
        let ulBgGreen = document.getElementById("firstList");

        ulBgGreen.style.backgroundColor = "green";
      };
      const paintItRandomly = function () {
        let ulBgRandom = document.getElementById("secondList");

        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        ulBgRandom.style.backgroundColor =
          "rgb(" + r + ", " + g + ", " + b + ")";
      };

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        let headClicable = document.querySelector("h1");
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        headClicable.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
      };

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function () {
        let footer = document.querySelector("footer");
        footer.innerHTML =
          "footer text changed footer text changed footer text changed";
      };

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");
      const consoleLoggingInputValue = function () {
        console.log(inputField.value);
      };
      inputField.addEventListener("keypress", consoleLoggingInputValue);

      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        alert("welcome the page loads sucessfully!!!");
      };

      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */