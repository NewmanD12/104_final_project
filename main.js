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

let blackPieces = ["https://www.clipartmax.com/png/small/42-427459_free-vector-pawn-chess-piece-clip-art-chess-pieces.png", 
                    "https://www.clipartmax.com/png/small/159-1599934_chess-piece-black-rook-chess-piece.png", 
                    "https://www.clipartmax.com/png/small/160-1603738_clipart-knight-chess-piece-clipart-best-clipart-best-knight-chess-piece-clipart.png",
                    "https://www.clipartmax.com/png/small/124-1240246_chess-tile-queen-clipart-bishop-chess-piece.png",
                    "https://www.clipartmax.com/png/small/58-581746_chess-pieces-clip-art.png",
                    "https://www.clipartmax.com/png/small/204-2042941_clipart-queen-chess-piece-vector.png"]

function imageTagFunction(url) {
    return `<img src='${url}'>`
}

let row1Squares = document.querySelectorAll('#row-1 span')
let row2Squares = document.querySelectorAll('#row-2 span')
let row3Squares = document.querySelectorAll('#row-3 span')
let row4Squares = document.querySelectorAll('#row-4 span')
let row5Squares = document.querySelectorAll('#row-5 span')
let row6Squares = document.querySelectorAll('#row-6 span')
let row7Squares = document.querySelectorAll('#row-7 span')
let row8Squares = document.querySelectorAll('#row-8 span')
let optionsBox = document.querySelector('#options')

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
        square.addEventListener('click', () =>{
            if(!pieceSelected){
                pieceSelected = true
                square.style.border = '4px solid gold'
                pieceToMove = square.innerHTML
                square.innerHTML = ''
                tileMovedFrom = square.id
                findPossibleMoves(square.id)
            } else {
                // console.log(square.style)
                let movedToTile = Number(square.id.split('-')[1])
                let row = findRow(movedToTile)
                if(pieceToMove.includes(whitePawnUrl) && row === 1){
                    let div = document.createElement('div')
                    let sentence = document.createElement('div')
                    let queenImage = document.createElement('img')
                    let rookImage = document.createElement('img')
                    let knightImage = document.createElement('img')

                    div.classList.add('justify-content-center')
                    sentence.classList.add('row')
                    sentence.classList.add('justify-content-center')
                    sentence.innerText = 'Select a piece to upgrade your pawn.'
                    queenImage.addEventListener('click', () =>{
                        let image = imageTagFunction(whiteQueenUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    rookImage.addEventListener('click', () =>{
                        let image = imageTagFunction(whiteRookUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    knightImage.addEventListener('click', () =>{
                        let image = imageTagFunction(whiteKnightUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    queenImage.src = whiteQueenUrl
                    rookImage.src = whiteRookUrl
                    knightImage.src = whiteKnightUrl
                    queenImage.style.width = '10%'
                    rookImage.style.width = '10%'
                    knightImage.style.width = '10%'
                    div.appendChild(sentence)
                    div.appendChild(queenImage)
                    div.appendChild(rookImage)
                    div.appendChild(knightImage)
                    div.classList.add('row')
                    optionsBox.appendChild(div)

                }
                else if(pieceToMove.includes(blackPawnUrl) && row === 8){
                    let div = document.createElement('div')
                    let sentence = document.createElement('div')
                    let queenImage = document.createElement('img')
                    let rookImage = document.createElement('img')
                    let knightImage = document.createElement('img')

                    div.classList.add('justify-content-center')
                    sentence.classList.add('row')
                    sentence.classList.add('justify-content-center')
                    sentence.innerText = 'Select a piece to upgrade your pawn.'
                    queenImage.addEventListener('click', () =>{
                        let image = imageTagFunction(blackQueenUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    rookImage.addEventListener('click', () =>{
                        console.log('you clicked the rook')
                        let image = imageTagFunction(blackRookUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    knightImage.addEventListener('click', () =>{
                        console.log('you clicked the knight')
                        let image = imageTagFunction(blackKnightUrl)
                        square.innerHTML = image
                        div.remove()
                    })
                    queenImage.src = blackQueenUrl
                    rookImage.src = blackRookUrl
                    knightImage.src = blackKnightUrl
                    queenImage.style.width = '10%'
                    rookImage.style.width = '10%'
                    knightImage.style.width = '10%'
                    div.appendChild(sentence)
                    div.appendChild(queenImage)
                    div.appendChild(rookImage)
                    div.appendChild(knightImage)
                    div.classList.add('row')
                    optionsBox.appendChild(div)

                }
                square.innerHTML = pieceToMove
                pieceSelected = false
                revertBorder(tileMovedFrom)
                revertPossibleMoveBorders(possibleSquares)
                square.style.border = ''
                pieceToMove = ''
            }
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
        tile.style.border = ''
    }
}

function showPossibleMoves(list, currentTile){
    let currentSquare = document.querySelector(`#square-${currentTile}`)
    for(let num of list){
        num = String(num)
        let square = document.querySelector(`#square-${num}`)
        square.style.border = '6px solid green'
    }
}

function findColumn(squareNum){
    res = null
    if(squareNum % 8 === 0){res = 8}
    else if(squareNum % 8 === 1){res = 1}
    else if(squareNum % 8 === 2){res = 2}
    else if(squareNum % 8 === 3){res = 3}
    else if(squareNum % 8 === 4){res = 4}
    else if(squareNum % 8 === 5){res = 5}
    else if(squareNum % 8 === 6){res = 6}
    else if(squareNum % 8 === 7){res = 7}
    return res
}

function findRow(squareNum){
    res = 0
    if(squareNum < 9){res = 1}
    else if(squareNum >= 9 && squareNum < 17){res = 2}
    else if(squareNum >= 17 && squareNum < 25){res = 3}
    else if(squareNum >= 25 && squareNum < 33){res = 4}
    else if(squareNum >= 33 && squareNum < 41){res = 5}
    else if(squareNum >= 41 && squareNum < 49){res = 6}
    else if(squareNum >= 49 && squareNum < 57){res = 7}
    else{res = 8}
    return res
}

function findBishopPossiblesSquares(currentTile){
    possibleSquares = []
    let row = findRow(currentTile)
    let column = findColumn(currentTile)
    let currentSquare = currentTile
    let currentColumn = column
    if(row === 1){
        while(currentColumn < 8){
            possibleSquares.push(currentSquare += 9)
            currentColumn += 1
        }
        currentColumn = column
        currentSquare = currentTile
        while(currentColumn > 1){
            possibleSquares.push(currentSquare += 7)
            currentColumn -= 1
        }
    }
    else if(row === 8){
        while(currentColumn > 1){
            possibleSquares.push(currentSquare -= 9)
            currentColumn -= 1
        }
        currentColumn = column
        currentSquare = currentTile
        while(currentColumn < 8){
            possibleSquares.push(currentSquare -= 7)
            currentColumn += 1
        }
    }
    else {
        let currentRow = row
        while(currentColumn < 8 && currentRow < 8){
            possibleSquares.push(currentSquare += 9)
            currentRow += 1
            currentColumn += 1
        }
        currentColumn = column
        currentRow = row
        currentSquare = currentTile
        while(currentColumn > 1 && currentRow < 8){
            possibleSquares.push(currentSquare += 7)
            currentColumn -= 1
            currentRow += 1
        }
        currentColumn = column
        currentRow = row
        currentSquare = currentTile
        while(currentColumn > 1 && currentRow > 1){
            possibleSquares.push(currentSquare -= 9)
            currentColumn -= 1
            currentRow -= 1
        }
        currentColumn = column
        currentRow = row
        currentSquare = currentTile
        while(currentColumn < 8 && currentRow > 1){
            possibleSquares.push(currentSquare -= 7)
            currentColumn += 1
            currentRow -= 1
        }
    }
    return possibleSquares
}

function findRookPossibleSquares(currentTile){
    possibleSquares = []
    let row = findRow(currentTile)
    let column = findColumn(currentTile)
    let restOfRow = rowsAndSquares[String(row)].filter(num => num !== currentTile)
    
    for(let square of restOfRow){
        possibleSquares.push(square)
    }

    if(column === 1){
        possibleSquares.push(1)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 2){
        possibleSquares.push(2)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 3){
        possibleSquares.push(3)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 4){
        possibleSquares.push(4)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 5){
        possibleSquares.push(5)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 6){
        possibleSquares.push(6)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 7){
        possibleSquares.push(7)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
    }
    else if(column === 8){
        possibleSquares.push(8)
        while(possibleSquares.length < 15){
            possibleSquares.push(possibleSquares[possibleSquares.length - 1] + 8)
        }
        possibleSquares.concat(squaresWithCurrentSquare)
    }
    let squaresWithoutCurrentSquare = possibleSquares.filter(num => num !== currentTile)
    return squaresWithoutCurrentSquare
}

function findPossibleMoves(tileNum){
    if(pieceToMove.includes(whitePawnUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        let column = findColumn(currentTile)
        console.log(column)
        
        if(currentTile >= 49){
            
            let possibleMove = document.querySelector(`#square-${currentTile - 8}`)
            let possibleMove2 = document.querySelector(`#square-${currentTile - 16}`)
            let possibleMove3 = document.querySelector(`#square-${currentTile - 7}`)
            let possibleMove4 = document.querySelector(`#square-${currentTile - 9}`)
            
            if(column !== 8){
                if(!possibleMove.innerHTML.includes('img')){
                    possibleSquares.push(currentTile - 8)
                }
                if(!possibleMove2.innerHTML.includes('img') && possibleSquares.length > 0){
                    possibleSquares.push(currentTile - 16)
                }
                if(possibleMove3.innerHTML.includes('img')){
                    possibleSquares.push(currentTile - 7)
                }
                if(possibleMove4.innerHTML.includes('img')){
                    possibleSquares.push(currentTile - 9)
                }
            } 
            else{
                if(!possibleMove.innerHTML.includes('img')){
                    possibleSquares.push(currentTile - 8)
                }
                if(!possibleMove2.innerHTML.includes('img') && possibleSquares.length > 0){
                    possibleSquares.push(currentTile - 16)
                }
                if(possibleMove4.innerHTML.includes('img')){
                    possibleSquares.push(currentTile - 9)
                }
            }

            showPossibleMoves(possibleSquares, currentTile)
        }
        else {
            let possibleMove = document.querySelector(`#square-${currentTile - 8}`)
            let possibleMove2 = document.querySelector(`#square-${currentTile - 9}`)
            let possibleMove3 = document.querySelector(`#square-${currentTile - 7}`)
            
            if(!possibleMove.innerHTML.includes('img')){
                possibleSquares.push(currentTile - 8)
            }
            if(possibleMove2.innerHTML.includes('img')){
                possibleSquares.push(currentTile - 9)
            }
            if(possibleMove3.innerHTML.includes('img')){
                possibleSquares.push(currentTile - 7)
            }
            showPossibleMoves(possibleSquares, currentTile)
        }
    }
    else if(pieceToMove.includes(blackPawnUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])  
        if(currentTile <= 16){
            let possibleMove = document.querySelector(`#square-${currentTile + 8}`)
            let possibleMove2 = document.querySelector(`#square-${currentTile + 16}`)
            let possibleMove3 = document.querySelector(`#square-${currentTile + 7}`)
            let possibleMove4 = document.querySelector(`#square-${currentTile + 9}`)
            let row = findRow(currentTile)
            let column = findColumn(currentTile)

            if(column !== 1){
                if(!possibleMove.innerHTML.includes('img')){
                    possibleSquares.push(currentTile + 8)
                }
                if(!possibleMove2.innerHTML.includes('img') && possibleSquares.length > 0){
                    possibleSquares.push(currentTile + 16)
                }
                if(possibleMove3.innerHTML.includes('img')){
                    possibleSquares.push(currentTile + 7)
                }
                if(possibleMove4.innerHTML.includes('img')){
                    possibleSquares.push(currentTile + 9)
                }
            } 
            else{
                if(!possibleMove.innerHTML.includes('img')){
                    possibleSquares.push(currentTile + 8)
                }
                if(!possibleMove2.innerHTML.includes('img') && possibleSquares.length > 0){
                    possibleSquares.push(currentTile + 16)
                }
                if(possibleMove4.innerHTML.includes('img')){
                    possibleSquares.push(currentTile + 9)
                }
            }
            showPossibleMoves(possibleSquares, currentTile)
        }
        else {
            let possibleMove = document.querySelector(`#square-${currentTile + 8}`)
            let possibleMove2 = document.querySelector(`#square-${currentTile + 9}`)
            let possibleMove3 = document.querySelector(`#square-${currentTile + 7}`)
            if(!possibleMove.innerHTML.includes('img')){
                possibleSquares.push(currentTile + 8)
            }
            if(possibleMove2.innerHTML.includes('img')){
                possibleSquares.push(currentTile + 9)
            }
            if(possibleMove3.innerHTML.includes('img')){
                possibleSquares.push(currentTile + 7)
            }
            showPossibleMoves(possibleSquares, currentTile)
        }
    }
    else if(pieceToMove.includes(whiteRookUrl) || pieceToMove.includes(blackRookUrl)){
        let currentTile = Number(tileNum.split('-')[1])
        showPossibleMoves(findRookPossibleSquares(currentTile), currentTile)
    }
    else if(pieceToMove.includes(whiteKnightUrl) || pieceToMove.includes(blackKnightUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        let row = findRow(currentTile)
        let column = findColumn(currentTile)
        if(column <= 6 && column >= 3){
            if(row <= 6 && row >= 3){
                possibleSquares.push(currentTile - 17)
                possibleSquares.push(currentTile - 10)
                possibleSquares.push(currentTile - 15)
                possibleSquares.push(currentTile - 6)
                possibleSquares.push(currentTile + 6)
                possibleSquares.push(currentTile + 10)
                possibleSquares.push(currentTile + 15)
                possibleSquares.push(currentTile + 17)
            } 
            else if(row === 2 || row === 7){
                if(row === 2){
                possibleSquares.push(currentTile - 10)
                possibleSquares.push(currentTile - 6)
                possibleSquares.push(currentTile + 6)
                possibleSquares.push(currentTile + 10)
                possibleSquares.push(currentTile + 15)
                possibleSquares.push(currentTile + 17)
                }
                else{
                possibleSquares.push(currentTile - 10)
                possibleSquares.push(currentTile - 6)
                possibleSquares.push(currentTile + 6)
                possibleSquares.push(currentTile + 10)
                possibleSquares.push(currentTile - 15)
                possibleSquares.push(currentTile - 17)
                }
            }
            else if(row === 1 || row === 8){
                if(row === 1){
                    possibleSquares.push(currentTile + 6)
                    possibleSquares.push(currentTile + 10)
                    possibleSquares.push(currentTile + 15)
                    possibleSquares.push(currentTile + 17)
                }
                else {
                    possibleSquares.push(currentTile - 10)
                    possibleSquares.push(currentTile - 6)
                    possibleSquares.push(currentTile - 15)
                    possibleSquares.push(currentTile - 17)
                }
            }
        }
        else if(column === 2 || column === 7){
            if(row <= 6 && row >= 3){
                if(column ===  2){
                    possibleSquares.push(currentTile - 17)
                    possibleSquares.push(currentTile - 15)
                    possibleSquares.push(currentTile - 6)
                    possibleSquares.push(currentTile + 10)
                    possibleSquares.push(currentTile + 15)
                    possibleSquares.push(currentTile + 17)
                }
                else{
                    possibleSquares.push(currentTile - 17)
                    possibleSquares.push(currentTile - 10)
                    possibleSquares.push(currentTile - 15)
                    possibleSquares.push(currentTile + 6)
                    possibleSquares.push(currentTile + 15)
                    possibleSquares.push(currentTile + 17)
                }

            } 
            else if(row === 2 || row === 7){
                if(column === 2){
                    if(row === 2){
                        possibleSquares.push(currentTile - 6)
                        possibleSquares.push(currentTile + 10)
                        possibleSquares.push(currentTile + 15)
                        possibleSquares.push(currentTile + 17) 
                    }
                    else {
                        possibleSquares.push(currentTile - 17)
                        possibleSquares.push(currentTile - 15)
                        possibleSquares.push(currentTile - 6)
                        possibleSquares.push(currentTile + 10)
                    }
                }
                else{
                    if(row === 2){
                        possibleSquares.push(currentTile - 10)
                        possibleSquares.push(currentTile + 6)
                        possibleSquares.push(currentTile + 15)
                        possibleSquares.push(currentTile + 17)
                    }
                    else {
                        possibleSquares.push(currentTile - 17)
                        possibleSquares.push(currentTile - 10)
                        possibleSquares.push(currentTile - 15)
                        possibleSquares.push(currentTile + 6)
                    }
                }

            }
            else if(row === 1 || row === 8){
                if(column === 2){
                    if(row === 1){
                        possibleSquares.push(currentTile + 17)
                        possibleSquares.push(currentTile + 10)
                        possibleSquares.push(currentTile + 15)
                    }
                    else{
                        possibleSquares.push(currentTile - 17)
                        possibleSquares.push(currentTile - 15)
                        possibleSquares.push(currentTile - 6)
                    }
                }
                else {
                    if(row === 1){
                        possibleSquares.push(currentTile + 17)
                        possibleSquares.push(currentTile + 15)
                        possibleSquares.push(currentTile + 6)
                    }
                    else {
                        possibleSquares.push(currentTile - 17)
                        possibleSquares.push(currentTile - 10)
                        possibleSquares.push(currentTile - 15)
                    }

                }

            }
        }
        else if(column === 1 || column === 8){
            if(row <= 6 && row >= 3){
                if(column === 1){
                    possibleSquares.push(currentTile - 15)
                    possibleSquares.push(currentTile - 6)
                    possibleSquares.push(currentTile + 10)
                    possibleSquares.push(currentTile + 17)
                }
                else{
                    possibleSquares.push(currentTile + 15)
                    possibleSquares.push(currentTile + 6)
                    possibleSquares.push(currentTile - 10)
                    possibleSquares.push(currentTile - 17)
                }
            } 
            else if(row === 2 || row === 7){
                if(column === 1){
                    if(row === 2){
                        possibleSquares.push(currentTile - 6)
                        possibleSquares.push(currentTile + 10)
                        possibleSquares.push(currentTile + 17)
                    }
                    else{
                        possibleSquares.push(currentTile - 6)
                        possibleSquares.push(currentTile - 15)
                        possibleSquares.push(currentTile + 10)

                    }
                }
                else {
                    if(row === 2){
                        possibleSquares.push(currentTile - 10)
                        possibleSquares.push(currentTile + 6)
                        possibleSquares.push(currentTile + 15)
                    }
                    else{
                        possibleSquares.push(currentTile - 10)
                        possibleSquares.push(currentTile + 6)
                        possibleSquares.push(currentTile - 17)
                    }
                }
            }
            else if(row === 1 || row === 8){
                if(column === 1){
                    if(row === 1){
                        possibleSquares.push(currentTile + 17)
                        possibleSquares.push(currentTile + 10)
                    }
                    else{
                        possibleSquares.push(currentTile - 6)
                        possibleSquares.push(currentTile - 15)
                    }
                }
                else {
                    if(row === 1){
                        possibleSquares.push(currentTile + 15)
                        possibleSquares.push(currentTile + 6)
                    }
                    else{
                        possibleSquares.push(currentTile - 17)
                        possibleSquares.push(currentTile - 10)
                    }

                }
            }
        }
        // console.log(currentTile)
        showPossibleMoves(possibleSquares, currentTile)
    }
    else if(pieceToMove.includes(whiteBishopUrl) || pieceToMove.includes(blackBishopUrl)){
        let currentTile = Number(tileNum.split('-')[1])
        findBishopPossiblesSquares(currentTile)
        showPossibleMoves(possibleSquares, currentTile)
    }
    else if(pieceToMove.includes(whiteQueenUrl) || pieceToMove.includes(blackQueenUrl)){
        let currentTile = Number(tileNum.split('-')[1])
        let rookMoves = findRookPossibleSquares(currentTile)
        let bishopMoves = findBishopPossiblesSquares(currentTile)
        possibleSquares = bishopMoves.concat(rookMoves)
        showPossibleMoves(possibleSquares, currentTile)
    }
    else if(pieceToMove.includes(whiteKingUrl) || pieceToMove.includes(blackKingUrl)){
        possibleSquares = []
        let currentTile = Number(tileNum.split('-')[1])
        let row = findRow(currentTile)
        let column = findColumn(currentTile)
        if(row === 1){
            if(column === 1){
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile + 8)
                possibleSquares.push(currentTile + 9)
            }
            else if(column === 8){
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile + 7)
                possibleSquares.push(currentTile + 8)
            }
            else{
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile + 7)
                possibleSquares.push(currentTile + 8)
                possibleSquares.push(currentTile + 9)
            }
        }
        else if(row === 8){
            if(column === 1){
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile - 7)
                possibleSquares.push(currentTile - 8)
            }
            else if(column === 8){
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile - 8)
                possibleSquares.push(currentTile - 9)
            }
            else{
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile - 7)
                possibleSquares.push(currentTile - 8)
                possibleSquares.push(currentTile - 9)
            }
        }
        else{
            if(column === 1){
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile - 8)
                possibleSquares.push(currentTile - 7)
                possibleSquares.push(currentTile + 8)
                possibleSquares.push(currentTile + 9)
            }
            else if(column === 8){
                possibleSquares.push(currentTile - 8)
                possibleSquares.push(currentTile - 9)
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile + 7)
                possibleSquares.push(currentTile + 8)
            }
            else{
                possibleSquares.push(currentTile - 7)
                possibleSquares.push(currentTile - 8)
                possibleSquares.push(currentTile - 9)
                possibleSquares.push(currentTile - 1)
                possibleSquares.push(currentTile + 1)
                possibleSquares.push(currentTile + 7)
                possibleSquares.push(currentTile + 8)
                possibleSquares.push(currentTile + 9)
            }
        }
        showPossibleMoves(possibleSquares, currentTile)
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


