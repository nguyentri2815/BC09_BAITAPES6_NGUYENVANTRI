const guessNumber = Math.round(Math.random() * 100);

document.querySelector('.number-random').innerHTML = guessNumber;

let count = 0;

const CheckNumber = () => {
  count++;
  let valueInput = +document.querySelector('.form-control').value;
  let node = document.createElement("LI");
  node.classList.add('list-group-item');
  let textnode = document.createTextNode(`Lần ${count}: ${valueInput}`);
  node.appendChild(textnode);
  document.querySelector('.list-group').appendChild(node);

  if (valueInput > guessNumber) {
    document.querySelector('.alert-mess').innerHTML = 'sô nhập vào lớn hơn số cần tìm ';
  }else if (valueInput < guessNumber) {
    document.querySelector('.alert-mess').innerHTML = 'sô nhập vào nhỏ hơn số cần tìm ';
  }else{
    document.querySelector('.alert-mess').innerHTML = 'Chúc mứng bạn đã đoán đúng số ';
    document.querySelector('.list-group').classList.remove('d-none');
  }

}