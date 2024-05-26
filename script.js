const puzzleContainer = document.getElementById('puzzleContainer');
    const pieces = ['1', '2', '3', '4', '5', '6', '7', '8', '', '9', '10', '11', '12', '13', '14', '15'];
    let emptyIndex = 8;

    function createPuzzle() {
      pieces.forEach((piece, index) => {
        const puzzlePiece = document.createElement('div');
        puzzlePiece.classList.add('puzzle-piece');
        puzzlePiece.innerText = piece;
        puzzlePiece.addEventListener('click', () => movePiece(index));
        puzzleContainer.appendChild(puzzlePiece);
      });
    }

    function movePiece(index) {
      const dx = Math.abs(index % 4 - emptyIndex % 4);
      const dy = Math.abs(Math.floor(index / 4) - Math.floor(emptyIndex / 4));
      if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        swapPieces(index, emptyIndex);
        emptyIndex = index;
        checkWin();
      }
    }

    function swapPieces(index1, index2) {
      const temp = pieces[index1];
      pieces[index1] = pieces[index2];
      pieces[index2] = temp;
      renderPuzzle();
    }

    function renderPuzzle() {
      puzzleContainer.innerHTML = '';
      createPuzzle();
    }

    function checkWin() {
      const isSorted = pieces.every((piece, index) => {
        return index === pieces.length - 1 || piece === '' || parseInt(piece) === index + 1;
      });
      if (isSorted) {
        alert('Congratulations! You solved the puzzle.');
      }
    }

    createPuzzle();
