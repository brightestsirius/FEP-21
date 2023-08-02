// Chess board

countOfTrs = 10;
TRs = [];

alphabet = `abcdefgh`;
figures = [`rook`, `horse`, `bishop`, `queen`, `king`, `bishop`, `horse`, `rook`];

for(trIndex=1; trIndex<=countOfTrs; trIndex++){

    countOfTds = 10;
    TDs = [];

    chessColor = trIndex<=3 ? `white` : `black`;

    for(tdIndex=1; tdIndex<=countOfTds; tdIndex++){
        content = ``;

        if(trIndex === 1 || trIndex === countOfTrs){
            if(tdIndex>=2 && tdIndex<=countOfTds-1){
                content = alphabet[tdIndex-2];
            }
        } else{
            if(tdIndex === 1 || tdIndex === countOfTds){
                content = countOfTrs-trIndex;
            }
        }

        if(trIndex === 3 || trIndex === 8){
            if(tdIndex>=2 && tdIndex<=countOfTds-1){
                content = `<img src="chess/${chessColor}/pawn.svg">`
            }
        }

        if(trIndex === 2 || trIndex === 9){
            if(tdIndex>=2 && tdIndex<=countOfTds-1){
                content = `<img src="chess/${chessColor}/${figures[tdIndex-2]}.svg">`
            }
        }

        TDs[tdIndex] = `<td>${content}</td>`;
    }

    TRs[trIndex] = `<tr>${TDs.join(``)}</tr>`;
}

document.write(`<table>${TRs.join(``)}</table>`);