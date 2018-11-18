var fonts = ['Abadi MT Condensed Light', 'Albertus Extra Bold', 'Albertus Medium', 'Antique Olive', 'Arial', 'Arial Black', 'Arial MT', 'Arial Narrow', 'Bazooka', 'Book Antiqua', 'Bookman Old Style', 'Boulder', 'Calisto MT', 'Clarendon Condensed', 'Comic Sans MS', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'Cornerstone', 'Coronet', 'Courier', 'Courier New', 'Cuckoo', 'Dauphin', 'Denmark', 'Fransiscan', 'Garamond', 'Geneva', 'Haettenschweiler', 'Heather', 'Helvetica', 'Herald', 'Impact', 'Jester', 'Letter Gothic', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lucida Console', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Unicode', 'Marigold', 'Market', 'Matisse ITC', 'MS LineDraw', 'News GothicMT', 'OCR A Extended', 'Old Century', 'Pegasus', 'Pickwick', 'Poster', 'Pythagoras', 'Sceptre', 'Sherwood', 'Signboard', 'Socket', 'Steamer', 'Storybook', 'Subway', 'Tahoma', 'Technical', 'Teletype', 'Tempus Sans ITC', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Tristan', 'Tubular', 'Unicorn', 'Univers', 'Univers Condensed', 'Vagabond', 'Verdana', 'Westminster	Allegro', 'Amazone BT', 'AmerType Md BT', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'BankGothic Md BT', 'Benguiat Bk BT', 'BernhardFashion BT', 'BernhardMod BT', 'BinnerD', 'Bremen Bd BT', 'CaslonOpnface BT', 'Charter Bd BT', 'Charter BT', 'ChelthmITC Bk BT', 'CloisterBlack BT', 'CopperplGoth Bd BT', 'English 111 Vivace BT', 'EngraversGothic BT', 'Exotc350 Bd BT', 'Freefrm721 Blk BT', 'FrnkGothITC Bk BT', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Galliard BT', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Humanst521 BT', 'Humanst 521 Cn BT', 'Humanst521 Lt BT', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'Informal011 BT', 'Kabel Bk BT', 'Kabel Ult BT', 'Kaufmann Bd BT', 'Kaufmann BT', 'Korinna BT', 'Lydian BT', 'Monotype Corsiva', 'NewsGoth BT', 'Onyx BT', 'OzHandicraft BT', 'PosterBodoni BT', 'PTBarnum BT', 'Ribbon131 Bd BT', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Souvenir Lt BT', 'Staccato222 BT', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'TypoUpright BT', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zurich BlkEx BT', 'Zurich Ex B'];

var inputForm = document.querySelector("[data-input='ransom-note']");
var inputButton = document.querySelector("[data-input='submit']");
var outputArea = document.querySelector("[data-output='wrapper']");
var outputItems = document.getElementsByClassName("output__letter");

inputButton.addEventListener("click", () => {
    if (outputItems.length > 0 && inputForm.value != 0) {
        deleteOldNote();
    }
    createNewNote();
    // inputForm.value = '';
});

deleteOldNote = () => {
    var outputItemsArray = [].slice.call(outputItems);
    outputItemsArray.forEach((e) => {
        e.parentNode.removeChild(e);
    });
}

createNewNote = () => {
    var inputArray = inputForm.value.split('');
    inputArray.forEach((e) => {
        // outputting the letters of the input as separate elements
        var p = document.createElement('p');
        p.innerHTML = e;
        outputArea.appendChild(p);
        p.setAttribute('data-output', 'letter');
        p.setAttribute('class', 'output__letter');
        window.p = p;
        setNoteStyles();
    })
}

setNoteStyles = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    p.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    p.style.height = Math.floor(Math.random() * (100 - 75 + 1)) + 75 + 'px';
    p.style.width = Math.floor(Math.random() * (100 - 75 + 1)) + 75 + 'px';
    p.style.fontWeight = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
    p.style.fontSize = Math.floor(Math.random() * (40 - 20 + 1)) + 20 + 'px';
    p.style.backgroundColor = bgColor;
}
