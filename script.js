const API_KEY =
  "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";
const submitBtn = document.getElementById("submit");
const outputOfElement = document.getElementById('output');
const inputElement = document.querySelector('input');
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')
const mViwePort = document.getElementsByClassName('m-v')


function changeInput(value){
    const inputElement = document.querySelector('input')
    inputElement.value=value;

}


async function getMassage() {
  console.log("Hi");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "developer",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: inputElement.value,
        },
      ],
    }),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    outputOfElement.textContent = data.choices[0].message.content
    if(data.choices[0].message.content && inputElement.value){
        const pElement = document.createElement('p')
        pElement.textContent= inputElement.value
        pElement.addEventListener('click', ()=> changeInput(pElement.textContent))
        historyElement.append(pElement)
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", getMassage);

function clearInput(){
    inputElement.value="";
}


function clearMoblieView(){
    inputElement.value =''
}
buttonElement.addEventListener('click', clearInput)
mViwePort.addEventListener('click', clearMoblieView)