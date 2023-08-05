chessSize = 10;
alphabet = `abcdefgh`;
figures = [`rook`, `horse`, `bishop`, `queen`, `king`, `bishop`, `horse`, `rook`];

TRs = [];
for(tr=1; tr<=chessSize; tr++){

    color = tr<=3 ? `white` : `black`;

    TDs = [];
    for(td=1; td<=chessSize; td++){
        value = ``;

        if(tr===1 || tr===chessSize){
            if(td!==1 && td!==chessSize){
                value = alphabet[td-2];
            }
        }

        if(tr!==1 && tr!==chessSize){
            if(td===1 || td===chessSize){
                value = tr-1;
            }
        }

        if(tr===3 || tr===chessSize-2){
            if(td!==1 && td!==chessSize){
                value = `<img src="chess/${color}/pawn.svg" alt="pawn">`;
            }
        }

        if(tr===2 || tr===chessSize-1){
            if(td!==1 && td!==chessSize){
                value = `<img src="chess/${color}/${figures[td-2]}.svg" alt="${figures[td-2]}">`;
            }
        }

        TDs.push(`<td>${value}</td>`);
    }

    TRs.push(`<tr>${TDs.join(``)}</tr>`);
}

document.write(`<table>
    ${TRs.join(``)}
</table>`);