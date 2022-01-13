const ids = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
            ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
            ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55']
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
