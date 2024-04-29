function AsimaninBanki(emekhaqqi, istediyinizmeblegh, istediyinizmuddet) {
    
    if (istediyinizmuddet > 36) {
        return 'size bu shertlerle kredit dushmur';
    }

    
    if (istediyinizmuddet <= 12) {
        faiz = 0.13;
    } else if (istediyinizmuddet <= 24) {
        faiz = 0.15;
    } else {
        faiz = 0.17;
    }

    
    let maksimalmeblegh= emekhaqqi * 10;
    if (istediyinizmeblegh > maksimalmeblegh) {
        return 'size bu shertlerle kredit dushmur';
    }

    
    let ayliqodenish = (istediyinizmeblegh * faiz) / istediyinizmuddet;
    if (ayliqodenish > emekhaqqi * 0.45) {
        return 'size bu shertlerle kredit dushmur';
    }

    
    let Asiman = `${istediyinizmeblegh} azn mebleg size ${faiz * 100}%lə ${istediyinizmuddet} ay muddetine ayliq ${ayliqodenish.toFixed(2)} manat odenishle veririlir`;
    return Asiman;
}


let emekhaqqi = parseFloat(prompt("Emek haqqinizi qeyd edin (AZN): "));
let istediyinizmeblegh = parseFloat(prompt("İstediyiniz kredit mebleğini qeyd edin (AZN): "));
let istediyinizmuddet = parseInt(prompt("İstediyiniz kredit müddetini qeyd edin (ay): "));

console.log(AsimaninBanki(emekhaqqi, istediyinizmeblegh, istediyinizmuddet));

