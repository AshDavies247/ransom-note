
var fonts = ['Abadi MT Condensed Light', 'Albertus Extra Bold', 'Albertus Medium', 'Antique Olive', 'Arial', 'Arial Black', 'Arial MT', 'Arial Narrow', 'Bazooka', 'Book Antiqua', 'Bookman Old Style', 'Boulder', 'Calisto MT', 'Clarendon Condensed', 'Comic Sans MS', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'Cornerstone', 'Coronet', 'Courier', 'Courier New', 'Cuckoo', 'Dauphin', 'Denmark', 'Fransiscan', 'Garamond', 'Geneva', 'Haettenschweiler', 'Heather', 'Helvetica', 'Herald', 'Impact', 'Jester', 'Letter Gothic', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lucida Console', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Unicode', 'Marigold', 'Market', 'Matisse ITC', 'MS LineDraw', 'News GothicMT', 'OCR A Extended', 'Old Century', 'Pegasus', 'Pickwick', 'Poster', 'Pythagoras', 'Sceptre', 'Sherwood', 'Signboard', 'Socket', 'Steamer', 'Storybook', 'Subway', 'Tahoma', 'Technical', 'Teletype', 'Tempus Sans ITC', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Tristan', 'Tubular', 'Unicorn', 'Univers', 'Univers Condensed', 'Vagabond', 'Verdana', 'Westminster	Allegro', 'Amazone BT', 'AmerType Md BT', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'BankGothic Md BT', 'Benguiat Bk BT', 'BernhardFashion BT', 'BernhardMod BT', 'BinnerD', 'Bremen Bd BT', 'CaslonOpnface BT', 'Charter Bd BT', 'Charter BT', 'ChelthmITC Bk BT', 'CloisterBlack BT', 'CopperplGoth Bd BT', 'English 111 Vivace BT', 'EngraversGothic BT', 'Exotc350 Bd BT', 'Freefrm721 Blk BT', 'FrnkGothITC Bk BT', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Galliard BT', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Humanst521 BT', 'Humanst 521 Cn BT', 'Humanst521 Lt BT', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'Informal011 BT', 'Kabel Bk BT', 'Kabel Ult BT', 'Kaufmann Bd BT', 'Kaufmann BT', 'Korinna BT', 'Lydian BT', 'Monotype Corsiva', 'NewsGoth BT', 'Onyx BT', 'OzHandicraft BT', 'PosterBodoni BT', 'PTBarnum BT', 'Ribbon131 Bd BT', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Souvenir Lt BT', 'Staccato222 BT', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'TypoUpright BT', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zurich BlkEx BT', 'Zurich Ex B'];

var inputForm = document.querySelector("[data-input='ransom-note']");
var inputButton = document.querySelector("[data-input='submit']");
var outputArea = document.querySelector("[data-output='wrapper']");
var outputItems = outputArea.childNodes;
var outputWords = document.querySelectorAll('[data-output="word"]');

var $jqueryTest = $("[data-input='ransom-note']");

console.log($jqueryTest);

inputButton.addEventListener("click", () => {
    if (outputItems.length > 0 && inputForm.value != 0) {
        deleteNote();
    }
    createNewWord();
    // inputForm.value = '';
});

deleteNote = () => {
    var outputItemsArray = [].slice.call(outputItems);
    outputItemsArray.forEach((e) => {
        e.parentNode.removeChild(e);
    });
}

createNewWord = () => {
    var inputArray = inputForm.value.split(' ');
    inputArray.forEach((e) => {
        // Output words into divs
        var word = document.createElement('div');
        word.innerHTML = e;
        outputArea.appendChild(word);
        word.setAttribute('data-output', 'word');
        word.setAttribute('class', 'output__word');
        window.word = word;
        createNoteLetters();
    })
}

createNoteLetters = () => {
    var letters = word.innerHTML.split('');
    window.letters = letters;
    letters.forEach((e) => {
        var p = document.createElement('p');
        p.innerHTML = e;
        word.appendChild(p);
        p.setAttribute('data-output', 'letter');
        p.setAttribute('class', 'output__letter');
        window.p = p;
        setNoteStyles();
    })
    deleteWords();
}

deleteWords = () => {
    var el = word, child = el.firstChild, nextChild;

    while (child) {
        nextChild = child.nextSibling;
        if (child.nodeType == 3) {
            el.removeChild(child);
        }
        child = nextChild;
    }
}

setNoteStyles = () => {
    p.style.fontFamily = randomFont();
    p.style.padding = randomNumber(10, 5) + 'px';
    p.style.fontWeight = randomNumber(700, 300);
    p.style.fontSize = randomNumber(50, 20) + 'px';
    p.style.backgroundColor = randomColor();
}

randomFont = () => {
    font = fonts[Math.floor(Math.random() * fonts.length)];
    return font;
}

randomNumber = (max, min) => {
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

randomColor = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}