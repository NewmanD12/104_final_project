let whitePawnUrl = 'https://www.clipartmax.com/png/small/397-3970363_chess-piece-pawn-queen-knight-chess-piece-pawn-queen-knight.png'

let whiteRookUrl = "https://www.clipartmax.com/png/small/347-3478496_chess-piece-rook-staunton-chess-set-silhouette-rook.png"

let whiteKnightUrl = "https://www.clipartmax.com/png/small/320-3206451_chess-piece-knight-white-and-black-in-chess-knight.png"

let whiteBishopUrl = "https://www.clipartmax.com/png/small/320-3206529_chess-piece-bishop-king-chessboard-alfil-ajedrez-para-colorear.png"

let whiteKingUrl = "https://www.clipartmax.com/png/small/58-581736_big-image-king-chess-piece-drawing.png"

let whiteQueenUrl = "https://www.clipartmax.com/png/small/350-3507978_chess-piece-king-queen-staunton-chess-set-queen-chess-piece-silhouette.png"

let blackPawnUrl = "https://www.clipartmax.com/png/small/42-427459_free-vector-pawn-chess-piece-clip-art-chess-pieces.png"

let blackRookUrl = "https://www.clipartmax.com/png/small/159-1599934_chess-piece-black-rook-chess-piece.png"

let blackKnightUrl = "https://www.clipartmax.com/png/small/160-1603738_clipart-knight-chess-piece-clipart-best-clipart-best-knight-chess-piece-clipart.png"

let blackBishopUrl = "https://www.clipartmax.com/png/small/124-1240246_chess-tile-queen-clipart-bishop-chess-piece.png"

let blackKingUrl = "https://www.clipartmax.com/png/small/58-581746_chess-pieces-clip-art.png"

let blackQueenUrl = "https://www.clipartmax.com/png/small/204-2042941_clipart-queen-chess-piece-vector.png"


let row1Squares = document.querySelectorAll('#row-1 span')
let row2Squares = document.querySelectorAll('#row-2 span')
let row3Squares = document.querySelectorAll('#row-3 span')
let row4Squares = document.querySelectorAll('#row-4 span')
let row5Squares = document.querySelectorAll('#row-5 span')
let row6Squares = document.querySelectorAll('#row-6 span')
let row7Squares = document.querySelectorAll('#row-7 span')
let row8Squares = document.querySelectorAll('#row-8 span')

let pieceSelected = false
let pieceToMove = ''
let tileMovedFrom = ''
let possibleSquares = []

let rowsAndSquares = {
    '1' : [1,2,3,4,5,6,7,8],
    '2' : [9,10,11,12,13,14,15,16],
    '3' : [17,18,19,20,21,22,23,24],
    '4' : [25,26,27,28,29,30,31,32],
    '5' : [33,34,35,36,37,38,39,40],
    '6' : [41,42,43,44,45,46,47,48],
    '7' : [49,50,51,52,53,54,55,56],
    '8' : [57,58,59,60,61,62,63,64],
}

function addClickEvent(rowOfSquares){
    for(let square of rowOfSquares){
        // console.log(square)
        square.addEventListener('click', () =>{
            // console.log(square)
            if(!pieceSelected){
                pieceSelected = true
                square.style.border = '2px solid gold'
                pieceToMove = square.innerHTML
                square.innerHTML = ''
                tileMovedFrom = square.id
                findPossibleMoves(square.id)
                // console.log(square.id)
            } else {
                square.innerHTML = pieceToMove
                pieceSelected = false
                revertBorder(tileMovedFrom)
                revertPossibleMoveBorders(possibleSquares)
                square.style.border = ''
                pieceToMove = ''
            }
            // console.log(pieceToMove)
        })
    }
    return 'completed'
}

function revertBorder(tileNum){
    let tile = document.querySelector(`#${tileNum}`)
    tile.style.border = ''
}

function revertPossibleMoveBorders(list){
    for(let square of list){
        let tile = document.querySelector(`#square-${square}`)
        // console.log(tile)
        tile.style.border = ''
    }
}

function showPossibleMoves(list){
    for(let num of list){
        // console.log(num)
        num = String(num)
        let square = document.querySelector(`#square-${num}`)
        square.style.border = '2px solid green'
    }
}

function findRow(squareNum){
    res = 0
    if(squareNum < 9){
        res = 1
    }
    else if(squareNum >= 9 && squareNum < 17){
        res = 2
    }
    else if(squareNum >= 17 && squareNum < 25){
        res = 3
    }
    else if(squareNum >= 25 && squareNum < 33){
        res = 4
    }
    else if(squareNum >= 33 && squareNum < 41){
        res = 5
    }
    else if(squareNum >= 41 && squareNum < 49){
        res = 6
    }
    else if(squareNum >= 49 && squareNum < 57){
        res = 7
    }
    else{
        res = 8
    }
    return res
}


function findPossibleMoves(tileNum){
    if(pieceToMove.includes(whitePawnUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        if(currentTile >= 49){
            possibleSquares.push(currentTile - 8)
            possibleSquares.push(currentTile - 16)
            showPossibleMoves(possibleSquares)
        }
        else {
            possibleSquares.push(currentTile - 8)
            showPossibleMoves(possibleSquares)
        }
    }
    else if(pieceToMove.includes(blackPawnUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])  
        if(currentTile <= 16){
            possibleSquares.push(currentTile + 8)
            possibleSquares.push(currentTile + 16)
            showPossibleMoves(possibleSquares)
        }
        else {
            possibleSquares.push(currentTile + 8)
            showPossibleMoves(possibleSquares)
        }
    }
    else if(pieceToMove.includes(whiteRookUrl) || pieceToMove.includes(blackRookUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        let row = findRow(currentTile)
        let restOfRow = rowsAndSquares[String(row)].filter(num => num !== currentTile)
        
        for(let square of restOfRow){
            possibleSquares.push(square)
        }

        if(currentTile % 8 === 1){
            possibleSquares.push(1)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 2){
            possibleSquares.push(2)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 3){
            possibleSquares.push(3)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 4){
            possibleSquares.push(4)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 5){
            possibleSquares.push(5)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 6){
            possibleSquares.push(6)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 7){
            possibleSquares.push(7)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
        else if(currentTile % 8 === 0){
            possibleSquares.push(8)
            while(possibleSquares.length < 15){
                possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
            }
            let squaresWithCurrentSquare = possibleSquares.filter(num => num !== currentTile)
            showPossibleMoves(squaresWithCurrentSquare)
        }
    }
    else if(pieceToMove.includes(whiteKnightUrl) || pieceToMove.includes(blackKnightUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        console.log(currentTile)
    }
}

addClickEvent(row1Squares)
addClickEvent(row2Squares)
addClickEvent(row3Squares)
addClickEvent(row4Squares)
addClickEvent(row5Squares)
addClickEvent(row6Squares)
addClickEvent(row7Squares)
addClickEvent(row8Squares)


