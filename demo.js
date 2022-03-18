let click_copy = document.getElementById('copy-clipboard')
console.log(click_copy)
click_copy.addEventListener('click', function(){
    click_copy.querySelector('input').select();
    // copy_pass.select()
    document.execCommand("Copy");
})