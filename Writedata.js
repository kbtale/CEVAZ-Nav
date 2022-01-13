const ids = [
            ['98', '99', '76', '75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65', '64', '63', '62', '61'],
            ['95', '94', '93', '92', '91', '90', '89', '88', '87', '86', '85', '84', '83', '82', '81', '80', '79', '78'],
            ['18', '51', '52', '31', '32', '34', '33', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
          ];

const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get('id');

detectGroupType();

function detectGroupType(){
  var pos = [0,0];
  //try {
    for (let i = 0; i < ids.length; i++){
      j = ids[i].indexOf(currentId);
      if (j != -1) {
        pos = [i,j];
        i = ids.length;
      }
    }
    console.log(pos);
  //}
  /*catch {
    console.log("Error, is not a kids, teens or adults group.")
  }*/
}

function createNav() {
  var arrLeft = document.createElement("a");
  arrLeft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" >`+`<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>`;
  arrLeft.href = 0;
}
