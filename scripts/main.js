



var ohmsData = {'bandA':'','bandB':'','bandC':'','bandD':''};
var ohmsReadOut = document.getElementById('ohmsReadOut');


ohmsReadOut.value = '';

function changeDisplayBandAndUpdateCalc(_this) {
    console.log('Click Click');
    var color = _this.innerHTML.toLowerCase();
    var band = _this.getAttribute('data-band');


    var eccLen = eccData.length;
    for(var i = 0; i < eccLen; ++i ) {

        if (eccData[i].color === color) {
            var workingColor = eccData[i];
        } else if (i >= (eccLen - 1) && typeof workingColor == 'undefined') {
            throw new Error('Color entered does not exist in data set.')
        }
    }

    if(color !== 'none') {

        if(color == 'black'){
            document.getElementById(band).style.color = 'white' ;
        }else {
            document.getElementById(band).style.color = 'black' ;
        }

        document.getElementById(band).style.backgroundColor = color ;
    } else {
        document.getElementById(band).style.backgroundColor = 'transparent' ;
    }









    if(band === 'bandA'){
        ohmsData.bandA = workingColor.sigFig ;
    } else if (band === 'bandB') {
        ohmsData.bandB = workingColor.sigFig ;
    } else if (band === 'bandC') {
        ohmsData.bandC = workingColor.multi ;
    } else if (band === 'bandD') {
        ohmsData.bandD = workingColor.tolerance ;
    }


    function calcOhmsValue(ohmsObj) {//Calculation
        var out = '' ;
        var range;

        out += String(ohmsObj.bandA);
        out += String(ohmsObj.bandB);
        out = Number(out)*Number(ohmsObj.bandC);
        range = out*ohmsObj.bandD;
        out = String(out - range) + ' - ' + String( out + range );

        ohmsReadOut.value = out;
    }

    if (ohmsData.bandA && (ohmsData.bandB || ohmsData.bandB == 0) && ohmsData.bandC && ohmsData.bandD) {
        calcOhmsValue(ohmsData);
    }






}







//some setup -- ads color to the buttons based on thier name and sets up the click handler
var buttons = document.getElementsByClassName('button');
for( var i = 0; i < buttons.length; ++i ) {
    buttons[i].addEventListener('click', function(){changeDisplayBandAndUpdateCalc(this)}, false);


    if( buttons[i].innerHTML.toLowerCase() === 'none') {
        buttons[i].style.border = '1px solid black';
    }
    else if ( buttons[i].innerHTML.toLowerCase() === 'black' ) {
        buttons[i].style.backgroundColor = buttons[i].innerHTML.toLowerCase();
        buttons[i].style.color = 'white';

    }
    else {
        buttons[i].style.backgroundColor = buttons[i].innerHTML.toLowerCase();
    }



}


