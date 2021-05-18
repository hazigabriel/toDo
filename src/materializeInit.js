import M from './materialize';
const materializeInit = function() {
	var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems )
 	
}


export default materializeInit 
 