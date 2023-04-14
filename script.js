const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext('2d');
const sqr = 120;
var x, y;
/* Image size: 800 × 267 pixels */
/* Construindo o tabuleiro */
function drawSqr() {
    for (y = 0; y < 960; y += 120) {
        if ((y / 120) % 2 == 0) {
            x = 0;
        } else {
            x = 120;
        }
        for (x; x < 960; x += 240) {
            ctx.rect(x, y, sqr, sqr);
            ctx.fillStyle = "#EEEED2"
            ctx.fill();
        }
    }
}

class Piece {
    constructor(x, y, sx, sy, id, sqr) {
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.id = id;
        this.sqr = sqr;
    }
}

function whatColor(id) {
    if (id == 0) return false;
    if (id < 20) {
        color = "w"
    } else color = "b"
    return color
}


var boardState = [[0, 0, 11], [120, 0, 12], [240, 0, 13], [360, 0, 15], [480, 0, 14], [600, 0, 13], [720, 0, 12], [840, 0, 11],
[0, 120, 10], [120, 120, 10], [240, 120, 10], [360, 120, 10], [480, 120, 10], [600, 120, 10], [720, 120, 10], [840, 120, 10],
[0, 240, 0], [120, 240, 0], [240, 240, 0], [360, 240, 0], [480, 240, 0], [600, 240, 0], [720, 240, 0], [840, 240, 0],
[0, 360, 0], [120, 360, 0], [240, 360, 0], [360, 360, 0], [480, 360, 0], [600, 360, 0], [720, 360, 0], [840, 360, 0],
[0, 480, 0], [120, 480, 0], [240, 480, 0], [360, 480, 0], [480, 480, 0], [600, 480, 0], [720, 480, 0], [840, 480, 0],
[0, 600, 0], [120, 600, 0], [240, 600, 0], [360, 600, 0], [480, 600, 0], [600, 600, 0], [720, 600, 0], [840, 600, 0],
[0, 720, 20], [120, 720, 20], [240, 720, 20], [360, 720, 20], [480, 720, 20], [600, 720, 20], [720, 720, 20], [840, 720, 20],
[0, 840, 21], [120, 840, 22], [240, 840, 23], [360, 840, 24], [480, 840, 25], [600, 840, 23], [720, 840, 22], [840, 840, 21]]
var listTemp = [];

function drawBoard() {
    var i = 0;
    var j = 0;
    boardState.forEach(element => {

        if (i == 8 && j == 0) {
            j = 1
            i = 0
        } else if (i == 8 && j == 1) {
            j = 0
            i = 0
        }
        if (boardState.indexOf(element) % 2 == j) {
            ctx.fillStyle = '#EEEED2'
            ctx.fillRect(element[0], element[1], 120, 120)
        }
        else {
            ctx.fillStyle = '#90EE90'
            ctx.fillRect(element[0], element[1], 120, 120);
        }
        i++;
    });
}

const piecesImage = new Image()
const board = new Image()
piecesImage.src = "Images/pieces.png"
board.src = "Images/board.jpg"
var listaPecas = []
// x, y, sx, sy , id, sqr
var wKing = new Piece(360, 0, 8, 7, 15, 3)
var wQueen = new Piece(480, 0, 140, 7, 14, 4)
var wBishop1 = new Piece(240, 0, 275, 7, 13, 2)
var wBishop2 = new Piece(600, 0, 275, 7, 13, 5)
var wKnight1 = new Piece(120, 0, 410, 7, 12, 1)
var wKnight2 = new Piece(720, 0, 410, 7, 12, 6)
var wRook1 = new Piece(0, 0, 540, 7, 11, 0)
var wRook2 = new Piece(840, 0, 540, 7, 11, 7)
var wPawn1 = new Piece(0, 120, 670, 7, 10, 8)
var wPawn2 = new Piece(120, 120, 670, 7, 10, 9)
var wPawn3 = new Piece(240, 120, 670, 7, 10, 10)
var wPawn4 = new Piece(360, 120, 670, 7, 10, 11)
var wPawn5 = new Piece(480, 120, 670, 7, 10, 12)
var wPawn6 = new Piece(600, 120, 670, 7, 10, 13)
var wPawn7 = new Piece(720, 120, 670, 7, 10, 14)
var wPawn8 = new Piece(840, 120, 670, 7, 10, 15)

var bKing = new Piece(480, 840, 8, 140, 25, 60)
var bQueen = new Piece(360, 840, 140, 140, 24, 59)
var bBishop1 = new Piece(240, 840, 275, 140, 23, 58)
var bBishop2 = new Piece(600, 840, 275, 140, 23, 61)
var bKnight1 = new Piece(120, 840, 410, 140, 22, 57)
var bKnight2 = new Piece(720, 840, 410, 140, 22, 62)
var bRook1 = new Piece(0, 840, 540, 140, 21, 56)
var bRook2 = new Piece(840, 840, 540, 140, 21, 63)
var bPawn1 = new Piece(0, 720, 670, 140, 20, 48)
var bPawn2 = new Piece(120, 720, 670, 140, 20, 49)
var bPawn3 = new Piece(240, 720, 670, 140, 20, 50)
var bPawn4 = new Piece(360, 720, 670, 140, 20, 51)
var bPawn5 = new Piece(480, 720, 670, 140, 20, 52)
var bPawn6 = new Piece(600, 720, 670, 140, 20, 53)
var bPawn7 = new Piece(720, 720, 670, 140, 20, 54)
var bPawn8 = new Piece(840, 720, 670, 140, 20, 55)

var turn = 0;
var enPass = false;
var enPassSqr;
var blackProm = [0, 1, 2, 3, 4, 5, 6, 7]
var whiteProm = [63, 62, 61, 60, 59, 58, 57, 56]

function promotion(data) {
    console.log(data)
    console.log(listaPecas)
    if (whatColor(data.id) == 'b') {
        listaPecas.forEach(piece => {
            if (piece.x == data.x && piece.y == data.y && piece.id == data.id) {
                piece.sx = 140
                piece.sy = 140
                piece.id = 24
            }

        })
    } else {
        listaPecas.forEach(piece => {
            if (piece.x == data.x && piece.y == data.y && piece.id == data.id) {
                piece.sx = 140
                piece.sy = 7
                piece.id = 14
            }

        })
    }
}
function legalMove(starting, ending, id, cap) {
    let goodHorse = [6, 15, 17, 10]
    let goodKing = [9, 8, 7, 1]
    let dWPawn = [8, 9, 10, 11, 12, 13, 14, 15]
    let dBPawn = [48, 49, 50, 51, 52, 53, 54, 55]
    let x = starting - ending
    var y = Math.abs(x)
    switch (id) {
        default:
            return 0
        //white
        case 10: // pawn
            if (!cap) {
                if (starting + 8 == ending) {
                    return true
                } else if (dWPawn.includes(starting) && starting + 16 == ending) {
                    if (boardState[starting + 8][2] != 0) {
                        return false
                    } if (boardState[ending - 1][2] == 20 || boardState[ending + 1][2] == 20) {
                        enPass = true;
                        enPassSqr = ending
                    }
                    return true
                }
                return false;
            }
            else {
                if (enPass && (starting == enPassSqr - 1 || starting == enPassSqr + 1 && ending == enPassSqr)) {
                    return true
                }
                else if (starting + 7 == ending || starting + 9 == ending) {
                    return true
                }
            }

        case 11:// rook
            if (y % 9 == 0 || goodHorse.includes(y)) {
                return false
            } else if (y % 8 == 0 || y < 8) {
                let i;
                if (y % 8 == 0) i = 8;
                else i = 1;
                if (ending > starting) {
                    currSqr = starting + i
                    for (currSqr; currSqr < ending; currSqr += i) {
                        if (boardState[currSqr][2] != 0)
                            return false;
                    }
                } else {
                    currSqr = ending + i
                    for (currSqr; currSqr < starting; currSqr += i) {
                        if (boardState[currSqr][2] != 0)
                            return false;
                    }
                }
                return true
            }
        case 12://knight

            if (goodHorse.includes(Math.abs(x))) {
                return true
            }
            else return false;
        case 13://bishop
            if (y % 9 == 0 || y % 7 == 0) {
                let i;
                if (y % 9 == 0)
                    i = 9;
                else i = 7;
                if (ending > starting) {
                    let currSqr = starting + i;
                    for (currSqr; currSqr < ending; currSqr += i) {
                        if (boardState[currSqr][2] != 0) {
                            return false
                        }
                    }
                }
                else {
                    let currSqr = ending + i;
                    for (currSqr; currSqr < starting; currSqr += i) {
                        if (boardState[currSqr][2] != 0) {
                            return false;
                        }
                    }
                }
                return true
            }
            return false
        case 14://queen
            if (goodHorse.includes(y)) return false;
            else if (((y % 8 == 0 || y < 8) || (y % 9 == 0 || y % 7 == 0))) {
                if (y % 9 == 0 || y % 7 == 0) {
                    let i;
                    if (y % 9 == 0)
                        i = 9;
                    else i = 7;
                    if (ending > starting) {
                        let currSqr = starting + i;
                        for (currSqr; currSqr < ending; currSqr += i) {
                            if (boardState[currSqr][2] != 0) {
                                return false
                            }
                        }
                    }
                    else {
                        let currSqr = ending + i;
                        for (currSqr; currSqr < starting; currSqr += i) {
                            if (boardState[currSqr][2] != 0) {
                                return false;
                            }
                        }

                    }
                } if (y % 8 == 0) {
                    let i;
                    if (y % 8 == 0) i = 8;
                    else i = 1;
                    if (ending > starting) {
                        currSqr = starting + i
                        for (currSqr; currSqr < ending; currSqr += i) {
                            if (boardState[currSqr][2] != 0)
                                return false;
                        }
                    } else {
                        currSqr = ending + i
                        for (currSqr; currSqr < starting; currSqr += i) {
                            if (boardState[currSqr][2] != 0)
                                return false;
                        }
                    }
                }
                return true
            }
        case 15://king
            if (goodKing.includes(y)) {
                return true
            } return false
        //black
        case 20://pawn
            if (!cap) {
                if (starting - 8 == ending) {
                    return true
                } else if (dBPawn.includes(starting) && starting - 16 == ending) {
                    if (boardState[starting - 8][2] != 0) {
                        return false
                    } if (boardState[ending - 1][2] == 10 || boardState[ending + 1][2] == 10) {
                        enPass = true;
                        enPassSqr = ending
                    }
                    return true
                }
                return false;
            }
            else {
                if (enPass && (starting == enPassSqr - 1 || starting == enPassSqr + 1 && ending == enPassSqr)) {
                    return true
                }
                else if (starting - 7 == ending || starting - 9 == ending) {
                    return true
                }
            }
            return false;
        case 21://rook
            if (y % 9 == 0 || goodHorse.includes(y)) {
                return false
            } else if (y % 8 == 0 || y < 8) {
                let i;
                if (y % 8 == 0) i = 8;
                else i = 1;
                if (ending > starting) {
                    currSqr = starting + i
                    for (currSqr; currSqr < ending; currSqr += i) {
                        if (boardState[currSqr][2] != 0)
                            return false;
                    }
                } else {
                    currSqr = ending + i
                    for (currSqr; currSqr < starting; currSqr += i) {
                        if (boardState[currSqr][2] != 0)
                            return false;
                    }
                }
                return true
            }
        case 22://knight
            if (goodHorse.includes(Math.abs(x))) {
                return true
            }
            else return false;
        case 23://bishop
            if (y % 9 == 0 || y % 7 == 0) {
                let i;
                if (y % 9 == 0)
                    i = 9;
                else i = 7;
                if (ending > starting) {
                    let currSqr = starting + i;
                    for (currSqr; currSqr < ending; currSqr += i) {
                        if (boardState[currSqr][2] != 0) {
                            return false
                        }
                    }
                }
                else {
                    let currSqr = ending + i;
                    for (currSqr; currSqr < starting; currSqr += i) {
                        if (boardState[currSqr][2] != 0)
                            return false;
                    }
                }
                return true
            }
            return false
        case 24://queen
            if (goodHorse.includes(y)) return false;
            else if (((y % 8 == 0 || y < 8) || (y % 9 == 0 || y % 7 == 0))) {
                if (y % 9 == 0 || y % 7 == 0) {
                    let i;
                    if (y % 9 == 0)
                        i = 9;
                    else i = 7;
                    if (ending > starting) {
                        let currSqr = starting + i;
                        for (currSqr; currSqr < ending; currSqr += i) {
                            if (boardState[currSqr][2] != 0) {
                                return false
                            }
                        }
                    }
                    else {
                        let currSqr = ending + i;
                        for (currSqr; currSqr < starting; currSqr += i) {
                            if (boardState[currSqr][2] != 0) {
                                return false;
                            }
                        }

                    }
                } if (y % 8 == 0) {
                    let i;
                    if (y % 8 == 0) i = 8;
                    else i = 1;
                    if (ending > starting) {
                        currSqr = starting + i
                        for (currSqr; currSqr < ending; currSqr += i) {
                            if (boardState[currSqr][2] != 0)
                                return false;
                        }
                    } else {
                        currSqr = ending + i
                        for (currSqr; currSqr < starting; currSqr += i) {
                            if (boardState[currSqr][2] != 0)
                                return false;
                        }
                    }
                }
                return true
            }
        case 25://king
            if (goodKing.includes(y)) {
                return true
            } return false

    }

}

listaPecas.push(wKing, wQueen, wBishop1, wBishop2, wKnight1, wKnight2, wRook1, wRook2, wPawn1, wPawn2, wPawn3, wPawn4, wPawn5, wPawn6, wPawn7, wPawn8, bKing, bQueen, bBishop1, bBishop2, bKnight1, bKnight2, bRook1, bRook2, bPawn1, bPawn2, bPawn3, bPawn4, bPawn5, bPawn6, bPawn7, bPawn8)


function drawPieces() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBoard()

    for (i = 0; i < listaPecas.length; i++) {
        if (listaPecas[i] == undefined) {
            continue
        } else
            ctx.drawImage(piecesImage, listaPecas[i].sx, listaPecas[i].sy, 120, 120, listaPecas[i].x, listaPecas[i].y, 120, 120);
    }
    requestAnimationFrame(drawPieces);
};



drawPieces();
var draggable = false;
var originX;
var originY;
var currPeca;

canvas.onmousedown = (e) => {

    listaPecas.forEach(peca => {
        if (e.layerX <= peca.x + 120 &&
            e.layerX >= peca.x &&
            e.layerY <= peca.y + 120 &&
            e.layerY >= peca.y) {
            switch (turn % 2) {
                default:
                    if (whatColor(peca.id) == 'b') {
                        draggable = true;
                        currPeca = peca
                        originX = peca.x
                        originY = peca.y
                    }
                    break
                case 0:
                    if (whatColor(peca.id) == 'w') {
                        draggable = true;
                        currPeca = peca
                        originX = peca.x
                        originY = peca.y
                    }
                    break
            }
        };

    });

}
canvas.onmousemove = (e) => {
    if (draggable) {
        currPeca.x = e.layerX - 60
        currPeca.y = e.layerY - 60
    }
}
canvas.onmouseup = (e) => {
    boardState.forEach(sqr => {
        var onIt = (e.layerX <= sqr[0] + 120 && e.layerX >= sqr[0] && e.layerY <= sqr[1] + 120 && e.layerY >= sqr[1])
        var color = whatColor(currPeca.id)
        // legal move without capture
        if (draggable && onIt && sqr[2] == 0 && legalMove(currPeca.sqr, boardState.indexOf(sqr), currPeca.id, false)) {

            currPeca.x = sqr[0]
            currPeca.y = sqr[1]
            boardState[currPeca.sqr][2] = 0
            currPeca.sqr = boardState.indexOf(sqr)
            sqr[2] = currPeca.id
            if (color == 'w' && whiteProm.includes(currPeca.sqr) && currPeca.id == 10 || color == 'b' && blackProm.includes(currPeca.sqr) && currPeca.id == 20) {
                promotion(currPeca)
            }
            turn += 1
            // legal capture move
        } else if (draggable && onIt && sqr[2] != 0 && legalMove(currPeca.sqr, boardState.indexOf(sqr), currPeca.id, true) && whatColor(sqr[2]) != whatColor(currPeca.id)) {
            listaPecas.forEach(piece => {
                if (piece.x == sqr[0] && piece.y == sqr[1] && piece.id == sqr[2]) {
                    delete listaPecas[listaPecas.indexOf(piece)]
                }

            }); //en passant
            if (enPass == true && boardState.indexOf(sqr) == enPassSqr) {

                if (color == "w") { //white statement
                    currPeca.x = boardState[boardState.indexOf(sqr) + 8][0]
                    currPeca.y = boardState[boardState.indexOf(sqr) + 8][1]
                    boardState[currPeca.sqr][2] = 0;
                    currPeca.sqr = boardState.indexOf(sqr) + 8
                    boardState[boardState.indexOf(sqr) + 8][2] = currPeca.id
                    boardState[boardState.indexOf(sqr)][2] = 0
                    if (color == 'w' && whiteProm.includes(currPeca.sqr) && currPeca.id == 10 || color == 'b' && blackProm.includes(currPeca.sqr) && currPeca.id == 20) {
                        promotion(currPeca)
                    }
                } else { //black statement
                    currPeca.x = boardState[boardState.indexOf(sqr) - 8][0]
                    currPeca.y = boardState[boardState.indexOf(sqr) - 8][1]
                    boardState[currPeca.sqr][2] = 0;
                    currPeca.sqr = boardState.indexOf(sqr) - 8
                    boardState[boardState.indexOf(sqr) - 8][2] = currPeca.id
                    boardState[boardState.indexOf(sqr)][2] = 0
                    if (color == 'w' && whiteProm.includes(currPeca.sqr) && currPeca.id == 10 || color == 'b' && blackProm.includes(currPeca.sqr) && currPeca.id == 20) {
                        promotion(currPeca)
                    }
                }

            } else { // legal capture but not en passant

                currPeca.x = sqr[0]
                currPeca.y = sqr[1]
                boardState[currPeca.sqr][2] = 0;
                currPeca.sqr = boardState.indexOf(sqr)
                sqr[2] = currPeca.id
                if (color == 'w' && whiteProm.includes(currPeca.sqr) && currPeca.id == 10 || color == 'b' && blackProm.includes(currPeca.sqr) && currPeca.id == 20) {
                    promotion(currPeca)
                }
            }
            turn += 1
            //ilegal move 
        } else if (draggable && onIt && !legalMove(currPeca.sqr, boardState.indexOf(sqr), currPeca.id, false) || (draggable && onIt && sqr[2] != 0)) {
            currPeca.x = originX
            currPeca.y = originY

        }
    })
    draggable = false;

}

canvas.onmouseleave = (e) => {
    draggable = false
}
