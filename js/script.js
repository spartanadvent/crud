

document.addEventListener('DOMContentLoaded',function(){
var input_box = document.getElementsByTagName('input')[0];
var new_element;
var body = document.getElementsByTagName('body')[0];
var unordered_list = document.createElement('ul');
var submit_btn = document.getElementsByTagName('button')[0];
var delete_btn = document.getElementsByClassName('delete')[0];
    body.appendChild(unordered_list);

    // alert(input_box);
    
   
     function create_new_Element(element_name){
         new_element = document.createElement(element_name);
         unordered_list.appendChild(new_element);
         new_element.innerText = input_box.value;
         new_element.addEventListener('click', function(){
            this.innerText = prompt('change item');
            
            //  alert('hi');
         });
         
     }
    
    delete_btn.addEventListener('click',function(event) {
             for(var i = 0; i < new_element.length; i++){
             new_element.length[i].remove(false);
             
                 
             }
         });
    submit_btn.addEventListener('click',function(){
         create_new_Element('li');
         
    });
    
    
     
    
});