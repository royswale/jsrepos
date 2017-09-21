var ULS =document.getElementsByTagName('ul');
            var LENGTH = ULS.length;

            // cell is from getCell()
            // function onCell (cell) {
            //  cell.className = 'on';
            // }
            // cell is from getCell()
            // function offCell (cell) {
            //  cell.className = '';
            // }
            // do not forget to check boundary
            //
            // function getCell (row, column) {
            //  var row = document.getElementsByTagName('ul')[row];
            //  var column = row.getElementsByTagName('li')[column];
            //  return column;
            // }
            // array p[x, y]
            // x 0~7
            // y 0~7 corresponding to getElementsByTagName array index
            function getCell (p) {
                var row = ULS[p['1']];
                if (row == undefined) {return;}
                var column = row.getElementsByTagName('li')[p['0']];
                if (column == undefined) {return;}
                return column;
            }
            function onCell (p) {
                var cell = getCell(p);
                if (cell == undefined) {return;}
                cell.className = 'on';
            }
            function offCell (p) {
                var cell = getCell(p);
                if (cell == undefined) {return};
                cell.className = '';
            }
            // function testBoundary() {
            //  if ( > LENGTH) {}
            // }

            // shapes array
            // var shapes = [{
            //  'up': [[0,0], [1,0], [2,0], [2,1], [2,2]], // L
            //  'right': [[0,0], [1,0], [2,0], [2,1], [2,2]],
            // },{
            //  'up': [[0,0], [1,0], [2,0], [2,1], [2,2]], // L
            //  'right': [[0,0], [1,0], [2,0], [2,1], [2,2]],
            // },

            // ];


            // positioning system
            // 0__________x
            // |
            // |
            // |
            // |y



            // left up point
            // var leftTopPoint = [];



            // key press event
            // maybe need underscore.js _.debounce() or _.throttle()
            // https://css-tricks.com/debouncing-throttling-explained-examples/
            window.addEventListener('load', function () {
                console.log("onload");


                var cell = [3, -1];
                var nextCell = [3, 0];


                var timer = setInterval(function () {
                    mainLoop();
                }, 1000);

                var mainLoop = function () {
                    console.log("mainLoop...");

                    offCell(cell);
                    onCell(nextCell);

                    cell[0]= nextCell[0];
                    cell[1]= nextCell[1];
                    if (nextCell[1] >= 7) {
                        nextCell[1] = 0;
                    } else {
                        nextCell[1]++;
                    }

                    console.log(cell);
                    console.log(nextCell);
                };


                document.body.addEventListener('keydown',function (event) {
                    console.log(event);


                    // keydown { target: <body>, key: "ArrowUp", charCode: 0, keyCode: 38 }
                    // keydown { target: <body>, key: "ArrowDown", charCode: 0, keyCode: 40 }
                    // keydown { target: <body>, key: "ArrowLeft", charCode: 0, keyCode: 37 }
                    // keydown { target: <body>, key: "ArrowRight", charCode: 0, keyCode: 39 }
                    // keydown { target: <body>, key: " ", charCode: 0, keyCode: 32 }
                    switch(event.keyCode || event.which){
                        case 32:
                            console.log("Press Space to pause");
                            clearInterval(timer);
                        break;
                        default:
                        break;
                    }
                })
            });

            // body.onkeydown = kdhandler;
            // function kdhandler(e) {
            //  console.log(e);
            // }


            // direction according to key press
            // up down left right
            // default down



            // figure out the next step
            // i.e. array of cells to be painted



            // test if the next step cells array will be valid
            // if some other painted cells obstable the way we going


            //


            // window.onload = function()
         //    {
         //        document.getElementById("MyElement").addEventListener( 'click', changeClass);
         //    }

// var nIntervId;

// function changeColor() {
// nIntervId = setInterval(flashText, 1000);
// }

// function flashText() {
// var oElem = document.getElementById('my_box');
// oElem.style.background = oElem.style.background == 'red' ? 'blue' : 'red';
// }

// function stopTextColor() {
// clearInterval(nIntervId);
// }
