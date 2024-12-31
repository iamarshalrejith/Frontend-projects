const questions = document.querySelectorAll('.x');
questions.forEach((question)=>{
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".toggle-icon")
    icon.addEventListener('click',()=>{
      answer.classList.toggle("hidden");
      if (answer.classList.contains("hidden")){
        icon.src = "assets/images/icon-plus.svg";
      }
      else{
        icon.src = "assets/images/icon-minus.svg";
      }
    })
})