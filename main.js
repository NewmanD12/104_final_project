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
function addClickEvent(rowOfSquares){
    for(let square of rowOfSquares){
        // console.log(square)
        square.addEventListener('click', () =>{
            // console.log(square.innerHTML)
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

function findPossibleMoves(tileNum){
    if(pieceToMove.includes(whitePawnUrl)){
        // console.log('this is a white pawn')
        console.log(tileNum)
        
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


