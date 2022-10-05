//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
 let num = [];


 //박스를 선택한 순서를 기록하는 배열
 let selNum = [];

 // //박스를 선택한 개수를 기록하는 변수
 let cnt = 0;

 //폭탄이 섞였는지 체크하는 flag변수  
 let shuffleFlag = false;                            
 //메세지 출력 함수
 const msgShow= (m) =>{
 let msg = document.getElementById('msg');
 msg.innerHTML = `<h2>${m}</h2>`;
 }
 //초기화 함수
 const init = ()=>{
    
  // 메세지 지우기  
    msgShow("");
 
  // 그림 지우기
  for(let i=1; i<=9; i++){
    document.getElementById(`box${i}`).innerHTML ="" 
  }

// 선택했던 숫자 배열 초기화
  selNum = [];

}

 



 // 숫자박스가 선택된 경우
 const show = (x)=>{
 if(!shuffleFlag) {
   msgShow("폭탄을 섞어 주세요.")
   return
 } 
 
 // 눌러진 번호판 배열에 추가
 if(!selNum.includes(x)) selNum.push(x)
 cnt++;
 console.log(selNum, cnt,selNum.length);               //cnt와 selNum.length 똑같이 갯수 체크해줌
 

 // 폭탄이 있는 배열을 참고하여 그림 변경
 //  let imgSrc = "hart";
 //  if(num[n-1] == 1) imgSrc = "bomb"
 let imgSrc = null;
 if(num[x-1]==1) imgSrc ="boom"
 else imgSrc = "hart"

 // 현재 눌러진 숫자 박스에 그림표시
 document.getElementById(`box${x}`).innerHTML =`<img src=/ES6/pj3/images/${imgSrc}.png>`
  //성공 체크
 if(selNum.length == 8) {
   let fn = [1,2,3,4,5,7,8,9].filter((i)=>!selNum.includes(i))
   console.log(fn[0]) 
   document.getElementById(`box${fn[0]}`).innerHTML =`<img src=/ES6/pj3/images/hart.png>`
   msgShow("성공입니다")
   shuffleFlag = false;
 }

 
  //실패 체크
 if(imgSrc == "boom") {
    shuffleFlag = false
    msgShow("실패입니다")
 }
}

 // 폭탄섞기 함수
 const boxShuffle = () => {
  num.sort(()=>Math.random() -0.5 );
  shuffleFlag = true;
 // 초기화 함수 호출
  init();
   console.log(num);
}











 /* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
for (let i =0; i<8; i++){
    num.push(0);
    }
    num.push(1);
    console.log(num)

});
